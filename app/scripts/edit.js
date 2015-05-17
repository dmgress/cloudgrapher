/* jshint devel:true */
/* global ace, vis, collectData, js_beautify, saveAs */

(function(){'use strict';
  var editor;
  var graph_lib = require('./collectdata');
  var graph;
  var graph_pane;
  editor = ace.edit('jsoneditor');
  editor.setTheme('ace/theme/tomorrow_night_eighties');
  editor.getSession().setMode('ace/mode/json');
  editor.setOption('maxLines', 60);
  editor.setOption('minLines', 40);
  editor.getSession().on('changeAnnotation', function(o) {
    var annotations = editor.getSession().getAnnotations();
    $('#statusbar').toggleClass('failure', annotations.length !== 0);
    if (annotations.length == 0) {
      var message = editor.getSession().getLength() < 2 && editor.getSession().getLine(0).length === 0 ? 'No content' : 'Valid';
      $('div.status-message').text(message);
    }
    else {
      var firstAnnotation = annotations[0];
      $('div.status-message').text(firstAnnotation.text + ' at '+ firstAnnotation.row + ':'+ firstAnnotation.column);
    }
  });
  var StatusBar = ace.require("ace/ext/statusbar").StatusBar;
  // create a simple selection status indicator
  var statusBar = new StatusBar(editor, document.getElementById("statusbar"));
  editor.commands.addCommand({
    name: "showKeyboardShortcuts",
    bindKey: {win: "Ctrl-Alt-h", mac: "Command-Alt-h"},
    exec: function(editor) {
      ace.config.loadModule("ace/ext/keybinding_menu", function(module) {
        module.init(editor);
        editor.showKeyboardShortcuts()
      })
    }
  });

  var mainRow = document.getElementById('cfeditor');
  mainRow.addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  mainRow.addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function () {
      var cfscript = reader.result;
      if (cfscript) {
        editor.setValue(cfscript);
        editor.navigateTo(0,0);
      }
      editor.resize();
    };
    reader.readAsText(files[0]);
  }, false);
  var showGraph = function() {
    var data;
    try {
      data = graph_lib.collectData(JSON.parse(editor.getValue()));
    }
    catch (e) {
      data = {};
    }
    var graphOptions = {
      'edges': {
        'style' : 'arrow',
        'color.highlight': 'red'
      }
    };
    if (!graph_pane) {
      graph_pane = $('div.graph_overlay');
      graph = new vis.Network($('#graph_area').get(0), { options: graphOptions});
      graph_pane.resize(function() {
        graph.redraw();
        graph.zoomExtent();
      });
    }
    graph_pane.fadeIn(300, function(){
      graph.setData(data);
      graph.redraw();
      graph.zoomExtent({easingFunction: 'linear'});
    });
  };
  };
  var saveImage = function() {
    var canvas = graphcontainer.getElementsByTagName('canvas');
    if (canvas && canvas.length === 1) {
      canvas[0].toBlob(function(blob){
        saveAs(blob, 'cloudformation_resources.png');
      });
    }
    else {
      console.log('Expected to find one canvas but got ' + canvas);
    }
  };
  var saveTemplate = function() {
    var prettyDoc = JSON.stringify(JSON.parse(editor.getValue()), null, 2);
    var blob = new Blob([prettyDoc], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, 'cloudformation_template.json');
    console.log(prettyDoc);
  };
  $('#save_template').click(function(){ saveTemplate(); return false;});
  $('#show_graph').click(function(event){ event.preventDefault(); showGraph(); return false;});
  $('#close_graph').click(function(event){ event.preventDefault(); graph_pane.fadeOut(500); return false;});
})();
