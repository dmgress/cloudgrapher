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
      expect(data.edges[0]).toEqual(jasmine.objectContaining({ 'id': 'something', 'title': 'Resource'}));
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
      expect(data.edges[0]).toEqual(jasmine.objectContaining({ 'id': 'something', 'title': 'Roles'}));
      done();
    });
    it('Should have edges to another resource and a role', function(done) {
      var resources = {
        'policy': {
          'Type': 'AWS::IAM::Policy',
          'Statement': [ { 'Resource': [ { 'Ref': 'something' } ] } ],
          'Properties': {
            'Roles': [ { 'Ref': 'something' } ]
          }
        },
      };
      var data = { edges: []};
      lib.findEdges({ 'Resources': resources}, function (id, title){data.edges.push({'id': id, 'title': title})});
      expect(data.edges[0]).toEqual(jasmine.objectContaining({ 'id': 'something', 'title': 'Resource'}));
      expect(data.edges[1]).toEqual(jasmine.objectContaining({ 'id': 'something', 'title': 'Roles'}));
      done();
    });
  });
  describe('', function(){
    it('It should give the correct title and resource name', function(done) {
      var resources = {
        "ingress": {
          "Type" : "AWS::EC2::SecurityGroupIngress",
          "Properties": {
            "GroupId": { "Fn::GetAtt": [ "SG", "GroupId" ] },
            "SourceSecurityGroupId": { "Fn::GetAtt": [ "SG2", "GroupId" ] },
          }
        },
      };
      var data = { edges: []};
      lib.findEdges({ 'Resources': resources}, function (id, title, resource){data.edges.push({'id': id, 'title': title, 'resource': resource})});
      expect(data.edges[0]).toEqual(jasmine.objectContaining({ 'id': 'SG', 'title': 'GroupId', 'resource': 'GroupId'}));
      expect(data.edges[1]).toEqual(jasmine.objectContaining({ 'id': 'SG2', 'title': 'GroupId', 'resource': 'SourceSecurityGroupId'}));
      done();
    });
  });
});
