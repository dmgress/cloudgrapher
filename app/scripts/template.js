/* jshint devel:true */
/* global exports, require, cytoscape */

exports.template = function(options) {
  'use strict';

  var myCodeMirror = options.editor;
  var collector = require('./collectdata');
  var defaultContainer = options.graphContainer;
  var jsonproxy = options.jsonproxy;
  var graph;
  var style;
  var cyto = options.cytolib || cytoscape;
  var initialData;

  if (!myCodeMirror || !myCodeMirror.getDoc) {
    throw 'editor unavailable or doesn\'t support getDoc';
  }
  if (!cyto) {
    throw 'graphing library Cytoscape unavailable';
  }

  var changeStyle = function(data) {
    style = data;
    if (graph) {
      graph.style(style);
    }
  };

  var fromFile = function(file, success, fail) {
    var reader = new FileReader();
    reader.onload = function() {
      setData(reader.result, function() {
        if (success) {
          success(file.name);
        }
      }, function(e) {
        if (fail) {
          fail(file.name, e);
        }
      });

    };
    try {
      reader.readAsText(file);
    }
    catch (e) {
      if (fail) {
        fail(file.name, e);
      }
    }
  };

  var setData = function(data, onSuccess, onError) {
    if (data) {
      try {
        var dataString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        var dataObject = typeof data === 'object' ? data : JSON.parse(data);

        myCodeMirror.getDoc().setValue(dataString);
        initialData = text();
        show(collector.collectCyData(dataObject));

        if (onSuccess) {
          onSuccess();
        }
      }
      catch (e) {
        if (onError) {
          onError('Error processing data as JSON', e);
        }
      }
    }
    else {
      if (onError) {
        onError('No data');
      }
    }
  };

  var refreshGraph = function(){
    show(collector.collectCyData(json()));
  };

  var show = function(data, container) {
    if (!container && !defaultContainer) {
      throw 'No container available to show data';
    }
    graph = cyto({
      container: container || defaultContainer,
      elements: data,
      style: style,
      layout: {
        name: 'cose',
        padding: 5
      }
    });
    graph.boxSelectionEnabled(true);
  };

  var description = function() {
    var description = 'template';
    try {
      description = json().Description;
    }
    catch (e) {}
    return description;
  };

  var base64Image = function() {
    if (!graph) {
      return;
    }
    graph.center();
    graph.fit();
    return graph.png({
      full: false
    });
  };

  var json = function() {
    return JSON.parse(myCodeMirror.getDoc().getValue());
  };

  var setLayout = function(name) {
    if (graph) {
      graph.layout({
        'name': name
      });
    }
  };

  var fromURL = function(url, success, onError) {
    if (!jsonproxy) {
      throw 'No jsonproxy available to request URLs';
    }
    if (url) {
      jsonproxy({
        url: url,
        corsSupport: true,
        success: function(data) {
          setData(data);
          if (success) {
            success(url);
          }
        },
        error: function(data, textStatus) {
            var message;
            if (textStatus === 'parsererror') {
              myCodeMirror.getDoc().setValue(data.responseText);
              message = 'Unable to parse the result as valid JSON';
            }
            else {
              message = 'Unable to load: status ' + data.status + ' ' + data.statusText;
            }
            if (onError) {
              onError(url, message, data, textStatus);
            }
          }
          // error, etc.
      });
    }
  };

  var text = function(indent) {
    return indent ? JSON.stringify(json(), null, indent) : myCodeMirror.getDoc().getValue();
  };

  var fitGraph= function (){
    if (graph) {
      graph.fit();
    }
  };

  var hasChanged = function() {
    var changed = initialData === text();
    return !changed;
  };

  return {
    setData: setData,
    fromFile: fromFile,
    fromURL: fromURL,
    refreshGraph: refreshGraph,
    setLayout: setLayout,
    base64Image: base64Image,
    description: description,
    changeStyle: changeStyle,
    fitGraph: fitGraph,
    text: text,
    json: json,
    hasChanged: hasChanged,
    initialData: initialData
  };
};
