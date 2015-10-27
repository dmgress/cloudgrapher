/* jshint devel:true */
/* global cytoscape, saveAs, require, CodeMirror, editor */

(function(){'use strict';
  var collector = require('./collectdata');
  var myCodeMirror = new CodeMirror(document.getElementById('editor'), {
    value: '{}',
    lineNumbers: true,
    mode: 'application/json',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    lint: {
      onUpdateLinting: function (annotations) {
        if (! annotations || annotations.length === 0) {
          showCyGraph( collector.collectCyData(JSON.parse (myCodeMirror.getDoc().getValue() )));
        }
      }
    }
  });
  myCodeMirror.setSize('100%','800px');
  var graph;
  var graphStyleP = $.ajax({ url: 'styles/main.cycss', type: 'GET', dataType: 'text' });
  var isResizing = false,
  lastDownX = 0;

  var loadTemplate = function(file){
    var reader = new FileReader();
    reader.onload = function () {
      var data = reader.result;
      console.log(data);
      if(data) {
        try {
          myCodeMirror.getDoc().setValue(data);
          showCyGraph( collector.collectCyData( JSON.parse(data) ) );
          $('#graph_area').css('background-image','');
        }
        catch (e) {
          console.log('ERR - ' + e );
        }
      }
    };
    reader.readAsText(file);
  };
  var showCyGraph = function(data) {
    graph = cytoscape({
      container: document.getElementById('graph_area'),
      elements: data,
      style: graphStyleP,
      layout: {
        name: 'cose',
        padding: 5
      }
    });
    graph.boxSelectionEnabled(true);
  };
  var getTemplateDescription = function() {
    var description = 'template';
    try {
      description = JSON.parse(editor.getValue(editor.getValue())).Description;
    } catch (e) {}
    return description;
  };
  var saveImage = function() {
    var saveWindow = window.open('savegraph.html');
    graph.center(); graph.fit();
    saveWindow.onload = function() {
      saveWindow.document.getElementById('graphPNG').src = graph.png({full: false});
    };
  };
  var saveTemplate = function() {
    var prettyDoc = JSON.stringify(JSON.parse(editor.getValue()), null, 2);
    var blob = new Blob([prettyDoc], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, getTemplateDescription() + '.json');
  };
  var mainRow = document.getElementById('graph_area');
  mainRow.addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  mainRow.addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    loadTemplate(evt.dataTransfer.files[0]);
  }, false);
  $('#graph_area').css('background-image','url("/images/aws-cloudformation-template.svg")');
  $('#open_template').change(function(event){ loadTemplate(event.target.files[0]); });
  $('#save_template').click(function(event){ event.preventDefault(); saveTemplate(); return false;});
  $('#save_graph').click(function(event){ event.preventDefault(); saveImage(); return false;});
  $('#graph_layout').change(function() { graph.layout( { 'name': $('#graph_layout').val() }); });
  var container = $('#container'),
  left = $('#graph_area'),
    right = $('#editor_pane'),
    handle = $('#border');

  handle.on('mousedown', function (e) {
    isResizing = true;
    lastDownX = e.clientX;
  });

  $(document).on('mousemove', function (e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
      return;
    }

    var offsetRight = container.width() - (e.clientX - container.offset().left);

    left.css('right', offsetRight);
    right.css('width', offsetRight);
  }).on('mouseup', function () {
    if (isResizing && graph) {
      graph.fit();
    }
    // stop resizing
    isResizing = false;
  });
})();
