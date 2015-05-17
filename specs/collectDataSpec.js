var lib = require('../app/scripts/collectdata');

describe('collectData', function() {

  it('Wont have nodes and edges when the doc is empty', function() {
    var doc = {};
    var data = lib.collectData(doc);
    expect(data.nodes.length).toBe(0);
    expect(data.edges.length).toBe(0);
  });
  it('Will have a node when there is a resource', function() {
    var doc = { 'Resources': { 'something': {'Type': 'something'}}};
    var data = lib.collectData(doc);
    expect(data.nodes.length).toBeGreaterThan(0);
    expect(data.edges.length).toBe(0);
  });
  describe('Collecting groups', function () {
    var doc = { 'Resources': { 'something': {'Type': 'AWS::IAM::Policy'}}};
    var data = lib.collectData(doc);
    xit('Will collect an aws-iam-policy group', function() {
      var node = data.nodes[0];
      expect(node.group).toBe('aws-iam-policy');
    });
    it('Will collect the aws-iam-policy group for the first node', function() {
      var node = data.nodes[0];
      expect(node.group).toBe('aws-iam-policy');
    });
    it('will set the aws-iam-policy image for the first node', function() {
      var node = data.nodes[0];
      expect(node.shape).toBe('image');
      expect(node.image).toBe('images/aws-iam-policy.png');
    });
  });
  describe('IAM policies', function() {
    it('Should have an edge to another resource', function() {
      var resources = {
        'something': {'Type': 'something'},
        'policy': {
          'Type': 'AWS::IAM::Policy',
          'Properties': {
            'PolicyDocument': {
              'Statement': [ { 'Resource': [ { 'Ref': 'something' } ] } ]
            }
          }
        },
      };
      var data = lib.collectData({ 'Resources': resources});
      expect(data.edges.length).toBe(1);
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
      var data = lib.collectData({ 'Resources': resources});
      expect(data.edges.length).toBe(1);
    });
  });
});
