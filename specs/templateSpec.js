/* global jasmine, expect, spyOn */

var lib = require('../app/scripts/template');
var cytoscape;
var cytograph;

describe('template', function() {
  var codemirror, graphArea, template, jsonproxy;

  beforeEach(function() {
    codemirror = jasmine.createSpyObj('codemirror', ['setValue', 'getValue']);
    graphArea = jasmine.createSpyObj('graphArea', ['css']);
    cytoscape = jasmine.createSpy('cytoscape');
    cytograph = jasmine.createSpyObj('graph', ['boxSelectionEnabled']);
    cytoscape.and.returnValue(cytograph);
    jsonproxy = jasmine.createSpy('jsonp');
    template = lib.template({
      'editor': codemirror,
      'graphContainer': graphArea,
      'cytolib': cytoscape,
      'jsonproxy': jsonproxy
    });
  });

  describe('template.setData', function() {
    var test;

    beforeEach(function() {
      test = jasmine.createSpyObj('test', ['success', 'failure']);

    });

    it('will call the success function on success', function() {
      template.setData('{}', test.success, test.failure);
      expect(test.success).toHaveBeenCalled();
      expect(cytoscape).toHaveBeenCalled();
    });
    it('will call the failure function on failure', function() {
      template.setData('{', test.success, test.failure);
      expect(test.failure).toHaveBeenCalled();
    });
    it('will call the failure function if there is no data', function() {
      template.setData(null, test.success, test.failure);
      expect(test.failure).toHaveBeenCalled();
    });
  });

  describe('template.text', function() {
    beforeEach(function() {
      spyOn(template, 'json');
    });
    it('will retrieve directly from codemirror without indent', function() {
      template.text();
      expect(codemirror.getValue).toHaveBeenCalled();
    });
    it('will call json() if there is an indent', function() {
      codemirror.getValue.and.returnValue('{}');
      spyOn(JSON, 'stringify');
      spyOn(JSON, 'parse');
      template.text(2);
      expect(JSON.parse).toHaveBeenCalled();
      expect(JSON.stringify).toHaveBeenCalled();
    });
  });

  describe('template.fromFile', function() {
    var callbacks;
    var mockReader = {
      readAsText: function() {}
    };
    FileReader = function() {
      return mockReader;
    };

    beforeEach(function() {
      callbacks = jasmine.createSpyObj('callbacks', ['s', 'f']);
    });

    it('calls success function on success', function() {

      spyOn(mockReader, 'readAsText').and.callFake(function() {
        mockReader.result = {};
        mockReader.onload();
      });
      template.fromFile({
        name: 'test.txt'
      }, callbacks.s, callbacks.f);
      expect(callbacks.s).toHaveBeenCalled();
    });

    it('calls failure function on data failure', function() {

      spyOn(mockReader, 'readAsText').and.callFake(function() {
        mockReader.result = 'O_o';
        mockReader.onload();
      });
      template.fromFile({
        name: 'test.txt'
      }, callbacks.s, callbacks.f);
      expect(callbacks.f).toHaveBeenCalled();
    });

    it('calls failure function on read failure', function() {

      spyOn(mockReader, 'readAsText').and.throwError('O_o');
      template.fromFile({
        name: 'test.txt'
      }, callbacks.s, callbacks.f);
      expect(callbacks.f).toHaveBeenCalled();
    });
  });

  describe('template.fromURL', function() {
    var callbacks, fromURL, url;

    beforeEach(function() {
      url = 'http://www.example.com';
      callbacks = jasmine.createSpyObj('callbacks', ['s', 'f']);
      fromURL = function() {
        return template.fromURL(url, callbacks.s, callbacks.f);
      };
    });

    it('calls success function on success', function() {
      jsonproxy.and.callFake(function(options) {
        options.success('{}');
      });
      fromURL();
      expect(callbacks.s).toHaveBeenCalled();
    });

    it('calls failure function on failure', function() {
      jsonproxy.and.callFake(function(options) {
        options.error({
          status: 404,
          statusText: 'TEST - Not Found'
        }, 'error');
      });
      fromURL();
      expect(callbacks.f).toHaveBeenCalledWith(url, 'Unable to load: status 404 TEST - Not Found', jasmine.any(Object), jasmine.any(String));
    });

    it('calls failure function on parsererror', function() {
      jsonproxy.and.callFake(function(options) {
        options.error({}, 'parsererror');
      });
      fromURL();
      expect(callbacks.f).toHaveBeenCalledWith(url, 'Unable to parse the result as valid JSON', jasmine.any(Object), jasmine.any(String));
      expect(codemirror.setValue).toHaveBeenCalled();
    });
  });

  describe('template.refreshGraph', function() {
    beforeEach(function() {
      codemirror.getValue.and.returnValue('{}');
    });
    it('uses the cose layout by default', function() {
      template.refreshGraph();
      expect(cytoscape.calls.count()).toBe(1);
      expect(cytoscape.calls.first().args[0].layout).toEqual(jasmine.objectContaining({name: 'cose'}));
    });
    it('uses the current template layout', function() {
      template.setLayout('cola');
      template.refreshGraph();
      expect(cytoscape.calls.count()).toBe(1);
      expect(cytoscape.calls.first().args[0].layout).toEqual(jasmine.objectContaining({name: 'cola'}));
    });
  });
});