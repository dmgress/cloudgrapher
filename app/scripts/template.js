/* jshint devel:true */
/* global exports, require, cytoscape */

exports.template = function(codemirror, graphArea) {
  'use strict';

  var myCodeMirror = codemirror;
  var collector = require('./collectdata');
  var graph;
  var style;

  var changeStyle = function(data) {
    style = data;
    if (graph) {
      graph.style(style);
    }
  };
  var load = function(file, success, fail) {
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
    reader.readAsText(file);
  };

  var setData = function(data, onSuccess, onError) {
    if (data) {
      try {
        var dataString = typeof data === 'string' ? data : JSON.stringify(data, null, 2);
        var dataObject = typeof data === 'object' ? data : JSON.parse(data);

        myCodeMirror.getDoc().setValue(dataString);
        show(collector.collectCyData(dataObject));
        graphArea.css('background-image', '');
        if (onSuccess) {
          onSuccess();
        }
      }
      catch (e) {
        console.log('ERROR processing data as JSON - ' + e);
        if (onError) {
          onError(e);
        }
      }
    }
  };

  var show = function(data) {
    graph = cytoscape({
      container: graphArea[0],
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
      description = JSON.parse(content()).Description;
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

  var content = function() {
    return myCodeMirror.getDoc().getValue();
  };
  var setLayout = function(name) {
    if (graph) {
      graph.layout({
        'name': name
      });
    }
  };
  var fromURL = function(url, success, onError) {
    if (url) {
      $.jsonp({
        url: url,
        corsSupport: true,
        success: function(data) {
          setData(data);
          if (success) {
            success(url);
          }
        },
        error: function(data, textStatus) {
            console.log(textStatus);
            console.log(data);
            var message;
            if (textStatus === 'parsererror') {
              myCodeMirror.getDoc().setValue(data.responseText);
              message = 'Unable to parse the result as valid JSON';
            }
            else {
              message = 'Unable to load: status ' + data.status + ' ' + data.statusText;
            }
            if (onError) {
              onError(url, message);
            }
          }
          // error, etc.
      });
    }
  };

  var fromURLInput = function(input, onSuccess, onError) {
    var url = input.val();
    if (input[0].checkValidity()) {
      input.hide();
      fromURL(url, onSuccess, onError);
    }
    else {
      return false;
    }
  };

  return {
    load: load,
    setData: setData,
    fromURLInput: fromURLInput,
    fromURL: fromURL,
    content: content,
    show: show,
    setLayout: setLayout,
    base64Image: base64Image,
    description: description,
    changeStyle: changeStyle,
    graph: graph
  };
};
