/* jshint devel:true */
/* global exports, require, cytoscape */

exports.template = function(options) {
  'use strict';

  var editor = options.editor;
  var collector = require('./collectdata');
  var defaultContainer = options.graphContainer;
  var jsonproxy = options.jsonproxy;
  var graph;
  var style;
  var cyto = options.cytolib || cytoscape;
  var initialData;
  var layoutName = 'grid';

  if (!editor || !editor.getValue) {
    throw 'editor unavailable or doesn\'t support getValue';
  }
  if (!cyto) {
    throw 'graphing library Cytoscape unavailable';
  }

  var json = function() {
    return JSON.parse(editor.getValue());
  };

  var text = function(indent) {
    return indent ? JSON.stringify(json(), null, indent) : editor.getValue();
  };

  var changeStyle = function(data) {
    style = data;
    if (graph) {
      graph.style(style);
    }
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
        name: layoutName,
        padding: 5
      }
    });
    graph.boxSelectionEnabled(true);
    graph.on('style', 'node', function(event){
      var cyTarget = event.cyTarget;
      var nodeClass = cyTarget.data('nodeClass');
      if (cyTarget.css('background-image').match(/unknown\.png/)) {
        console.log('WARN using unknown.png, because no image available for ' + cyTarget.data('CFType'));
      }
    });
  };

  var setData = function(data, onSuccess, onError) {
    if (data) {
      try {
        var dataString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        var dataObject = typeof data === 'object' ? data : JSON.parse(data);

        editor.setValue(dataString);
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

  var fromFile = function(file, success, fail) {
    var reader = new FileReader();
    reader.onload = function() {
      setData(reader.result, function() {
        if (success) {
          success(file.name);
        }
      }, function(reason, e) {
        if (fail) {
          fail(file.name, reason, e);
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

  var refreshGraph = function() {
    show(collector.collectCyData(json()));
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

  var setLayout = function(name) {
    layoutName = name;
    if (graph) {
      graph.layout({
        'name': name,
        'fit': true,
        'animate': false
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
              editor.setValue(data.responseText);
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

  var fitGraph = function() {
    if (graph) {
      graph.fit();
    }
  };

  var hasChanged = function() {
    var changed = initialData === text();
    return initialData ? ! changed : false;
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
    getGraph: function() { return graph; },
    text: text,
    json: json,
    hasChanged: hasChanged,
    initialData: initialData
  };
};
