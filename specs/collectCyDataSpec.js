var lib = require('../app/scripts/collectdata');

var customMatchers = {
  toHaveParent: function(util, customEqualityTesters) {
    return {
      compare: function(actual, expected) {
        var expectedParent = expected ? "'" + expected + "' " : '';
        var result = {};
        if (typeof actual === 'object') {
          result.pass =  actual.data &&
            (expected && actual.data.parent === expected || actual.data.parent);

          result.message = (result.pass ? "didn't" : '') +
            'expect to find a parent ' + expectedParent + 'on the node';
        }
        else {
          result.pass = false;
          result.message = 'Expected to have an object to test on';
        }
        return result;
      }
    };
  }
};

var findById = function (arr, id) {
  var filtered = arr.filter(function(obj){
    return obj && obj.data && obj.data.id === id;
  });
  return filtered.length > 0 ? filtered[0] : undefined;
};

describe('collectCyData', function() {
  beforeEach(function() {
    jasmine.addMatchers(customMatchers);
  });

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
  it('Should have zero edges to undefined role', function() {
    var resources = {
      'policy': {
        'Type': 'AWS::IAM::Policy',
        'Properties': {
          'Roles': [ { 'Ref': 'something' } ]
        }
      },
    };
    var data = lib.collectCyData({ 'Resources': resources});
    expect(data.edges.length).toBe(0);
  });
  it('Should have an edge to a defined role', function() {
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
    expect(data.nodes[0].data['parent']).toBeUndefined();
    expect(findById(data.nodes, 'ingress')).not.toHaveParent();
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
    expect(data.nodes[0].data['parent']).not.toHaveParent();
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
