var lib = require('../app/scripts/collectdata');
//global.findEdges = require('../app/scripts/graph.js').findEdges;
//global.findEdges = require('../app/scripts/graph.js').findEdges;

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
