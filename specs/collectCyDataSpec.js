var lib = require('../app/scripts/collectdata');

describe('collectCyData', function() {
  it('Wont have nodes and edges when the doc is empty', function() {
    var doc = {};
    var data = lib.collectCyData(doc);
    expect(data.nodes.length).toBe(0);
    expect(data.edges.length).toBe(0);
  });
  it('Will have a node when there is a resource', function() {
    var doc = { 'Resources': { 'something': {'Type': 'something'}}};
    var data = lib.collectCyData(doc);
    expect(data.nodes.length).toBeGreaterThan(0);
    expect(data.edges.length).toBe(0);
  });
  it('Should have an edge to a role', function() {
    var resources = {
      'something': {'Type': 'something'},
      'policy': {
        'Type': 'AWS::IAM::Policy',
        'Properties': {
          'Roles': [ { 'Ref': 'something' } ]
        }
      },
    };
    var data = lib.collectCyData({ 'Resources': resources});
    expect(data.edges.length).toBe(1);
  });
  it('SecurityGroupIngress never has SecurityGroup as parent', function() {
    var doc = {
      'Resources': {
        "ingress": {
          "Type" : "AWS::EC2::SecurityGroupIngress",
          "Properties": {
            "GroupId": { "Fn::GetAtt": [ "SG", "GroupId" ] },
            "SourceSecurityGroupId": { "Fn::GetAtt": [ "SG2", "GroupId" ] },
          }
        },
        'SG': {'Type': 'AWS::EC2::SecurityGroup' },
        'SG2': {'Type': 'AWS::EC2::SecurityGroup' }
      }
    };
    var data = lib.collectCyData(doc);
    expect(data.nodes.length).toBe(3);
    expect(data.edges.length).toBe(2);
    expect(data.edges[0].data['target']).toBe('SG');
    expect(data.edges[1].data['source']).toBe('SG2');
  });
  it('SecurityGroupEgress never has SecurityGroup as parent', function() {
    var doc = {
      'Resources': {
        "egress": {
          "Type" : "AWS::EC2::SecurityGroupEgress",
          "Properties": {
            "GroupId": { "Fn::GetAtt": [ "SG", "GroupId" ] },
            "DestinationSecurityGroupId": { "Fn::GetAtt": [ "SG2", "GroupId" ] },
          }
        },
        'SG': {'Type': 'AWS::EC2::SecurityGroup' },
        'SG2': {'Type': 'AWS::EC2::SecurityGroup' }
      }
    };
    var data = lib.collectCyData(doc);
    expect(data.nodes.length).toBe(3);
    expect(data.edges.length).toBe(2);
    expect(data.edges[0].data['source']).toBe('SG');
    expect(data.edges[1].data['target']).toBe('SG2');
  });
  it('Will have an EC2 instance with SecurityGroup as parent', function() {
    var doc = {
      'Resources': {
        'instance': {
          'Type': 'AWS::EC2::Instance',
          'Properties': {
            'NetworkInterfaces': [{
              'GroupSet': [ { 'Ref': 'SG' } ],
            }]
          }
        },
        'SG': {'Type': 'AWS::EC2::SecurityGroup' }
      }
    };
    var data = lib.collectCyData(doc);
    expect(data.nodes.length).toBe(2);
    expect(data.edges.length).toBe(0);
    expect(data.nodes[0].data['parent']).toBe('SG');
  });
});
