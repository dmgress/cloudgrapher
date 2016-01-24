/* global jasmine, expect, spyOn, URI */



var lib = require('../app/scripts/queryparser');

describe('queryparser', function() {
  describe('CFTemplateURL query parameter is set', function() {

    var test;

    beforeEach(function() {
      test = jasmine.createSpyObj('test', ['onTemplate']);
      URI = function() {
        return {
          search: function() {
            return {
              'CFTemplateURL': 'something'
            };
          }
        };
      };
    });
    it('will call back with URL', function() {
      lib.parser("...", {
        onTemplate: test.onTemplate
      });
      expect(test.onTemplate).toHaveBeenCalledWith('something');
    });
  });
  describe('CFTemplateURL query parameter is missing', function() {

    var test;

    beforeEach(function() {
      test = jasmine.createSpyObj('test', ['onTemplate']);
      URI = function() {
        return {
          search: function() {
            return {};
          }
        };
      };
    });
    it('won\'t call back with URL', function() {
      lib.parser("...", {
        onTemplate: test.onTemplate
      });
      expect(test.onTemplate).not.toHaveBeenCalled();
    });
  });
});