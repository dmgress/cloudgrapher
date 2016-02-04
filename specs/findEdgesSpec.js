/*global expect, jasmine */
var lib = require('../app/scripts/findedges');
describe('findEdges', function() {
  'use strict';
  it('Wont find edges when the doc is empty', function() {
    var found = lib.findEdges({});
    expect(found.length).toBe(0);
  });
  describe('IAM policies', function() {
    it('Should have an edge to another resource', function(done) {
      var resources = {
        'PolicyDocument': {
          'Statement': [ { 'Resource': [ { 'Ref': 'something' } ] } ]
        },
      };
      var found = lib.findEdges(resources);
      expect(found.length).toBe(1);
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'something', 'label': 'Resource'}));
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
      var found = lib.findEdges({ 'Resources': resources});
      expect(found.length).toBe(1);
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'something', 'label': 'Roles'}));
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
      var found = lib.findEdges({ 'Resources': resources});
      expect(found.length).toBe(2);
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'something', 'label': 'Resource'}));
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'something', 'label': 'Roles'}));
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
      var found = lib.findEdges({ 'Resources': resources});
      expect(found.length).toBe(2);
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'SG', 'toProperty': 'GroupId', 'label': 'GroupId'}));
      expect(found).toContain(jasmine.objectContaining({ 'toResource': 'SG2', 'toProperty': 'GroupId', 'label': 'SourceSecurityGroupId'}));
      done();
    });
  });
});
