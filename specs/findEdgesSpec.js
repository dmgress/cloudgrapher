var lib = require('../app/scripts/findedges');
describe('findEdges', function() {
  it('Wont find edges when the doc is empty', function() {
    var doc = {};
    var data = { edges: []};
    lib.findEdges(doc, function (id, title){data.edges.push({'id': id, 'title': title})});
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
      lib.findEdges(resources, function (id, title){data.edges.push({'id': id, 'title': title})});
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
      lib.findEdges({ 'Resources': resources}, function (id, title){data.edges.push({'id': id, 'title': title})});
      expect(data.edges.length).toBe(1);
      done();
    });
  });
});
