/* global jasmine, expect, spyOn */

var lib = require('../app/scripts/template');
var cytoscape;
var cytograph;

describe('template', function() {
  var codemirror, codemirrorDoc, graphArea;

  beforeEach(function() {
    codemirror = jasmine.createSpyObj('codemirror', ['getDoc']);
    codemirrorDoc = jasmine.createSpyObj('codemirrorDoc', ['setValue']);
    codemirror.getDoc.and.returnValue(codemirrorDoc);
    graphArea = jasmine.createSpyObj('graphArea', ['css']);
    cytoscape = jasmine.createSpy('cytoscape');
    cytograph = jasmine.createSpyObj('graph', ['boxSelectionEnabled']);
    cytoscape.and.returnValue(cytograph);
  });

  describe('template.setData', function() {
    var test, template;

    beforeEach(function() {
      test = jasmine.createSpyObj('test', ['success', 'failure']);
      template = lib.template({
        'editor': codemirror,
        'graphContainer': graphArea,
        'cytolib': cytoscape
      });
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
    var codemirror, codemirrorDoc, template;
    beforeEach(function() {
      codemirror = jasmine.createSpyObj('codemirror', ['getDoc']);
      codemirrorDoc = jasmine.createSpyObj('codemirrorDoc', ['getValue']);
      codemirror.getDoc.and.returnValue(codemirrorDoc);
      template = lib.template({
        'editor': codemirror,
        'graphContainer': graphArea,
        'cytolib': cytoscape
      });
      spyOn(template, 'json');
    });
    it('will retrieve directly from codemirror without indent', function() {
      template.text();
      expect(codemirrorDoc.getValue).toHaveBeenCalled();
    });
    it('will call json() if there is an indent', function() {
      codemirrorDoc.getValue.and.returnValue('{}');
      spyOn(JSON, 'stringify');
      spyOn(JSON, 'parse');
      template.text(2);
      expect(JSON.parse).toHaveBeenCalled();
      expect(JSON.stringify).toHaveBeenCalled();
    });
  });

  describe('template.fromURL', function() {
    var input, template, jsonproxy, callbacks, fromURL, url;

    beforeEach(function() {
      url = 'http://www.example.com';
      jsonproxy = jasmine.createSpy('jsonp');
      template = lib.template({
        'editor': codemirror,
        'graphContainer': graphArea,
        'cytolib': cytoscape,
        'jsonproxy': jsonproxy
      });
      callbacks = jasmine.createSpyObj('callbacks', ['s', 'f']);
      fromURL = function(){
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
        options.error({status: 404, statusText: 'TEST - Not Found'},'error');
      });
      fromURL();
      expect(callbacks.f).toHaveBeenCalledWith(url, 'Unable to load: status 404 TEST - Not Found', jasmine.any(Object), jasmine.any(String));
    });

    it('calls failure function on parsererror', function() {
      jsonproxy.and.callFake(function(options) {
        options.error({},'parsererror');
      });
      fromURL();
      expect(callbacks.f).toHaveBeenCalledWith(url, 'Unable to parse the result as valid JSON', jasmine.any(Object), jasmine.any(String));
      expect(codemirrorDoc.setValue).toHaveBeenCalled();
    });
  });
});