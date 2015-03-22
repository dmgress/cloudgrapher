module.exports = require('../app/scripts/graph.js')
describe('collectData', function() {
  it('Wont have nodes and edges when the doc is empty', function() {
    var doc = {};
    var data = collectData(doc);
    expect(data.nodes.length).toBe(0);
    expect(data.edges.length).toBe(0);
  });
  it('Will have a node when there is a resource', function() {
    var doc = { 'Resources': { 'something': {'Type': 'something'}}};
    var data = collectData(doc);
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
      var data = collectData({ 'Resources': resources});
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
      var data = collectData({ 'Resources': resources});
      expect(data.edges.length).toBe(1);
    });
  });
});
describe('find_edges', function() {
  it('Wont find edges when the doc is empty', function() {
    var doc = {};
    var data = { edges: []};
    find_edges(doc, function (id, title){data.edges.push({'id': id, 'title': title})});
    expect(data.edges.length).toBe(0);
  });
  describe('IAM policies', function() {
    it('Should have an edge to another resource', function(done) {
      var resources = {
          'PolicyDocument': {
            'Statement': [ { 'Resource': [ { 'Ref': 'something' } ] } ]
        },
      };
      var data = { edges: []};
      find_edges(resources, function (id, title){data.edges.push({'id': id, 'title': title})});
      expect(data.edges.length).toBe(1);
      done();
    });
    it('Should have an edge to a role', function(done) {
      var resources = {
        'something': {'Type': 'something'},
        'policy': {
          'Type': 'AWS::IAM::Policy',
          'Properties': {
            'Roles': [ { 'Ref': 'something' } ] 
          }
        },
      };
      var data = { edges: []};
      find_edges({ 'Resources': resources}, function (id, title){data.edges.push({'id': id, 'title': title})});
      expect(data.edges.length).toBe(1);
      done();
    });
  });
});
