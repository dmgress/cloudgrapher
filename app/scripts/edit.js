/* jshint devel:true */
/* global ace, cytoscape, saveAs, require */

(function(){'use strict';
  var editor;
  var collector = require('./collectdata');
  var graph;
  var graphPane;
  editor = ace.edit('jsoneditor');
  editor.setTheme('ace/theme/tomorrow_night_eighties');
  editor.getSession().setMode('ace/mode/json');
  editor.setOption('maxLines', 60);
  editor.setOption('minLines', 40);
  editor.getSession().on('changeAnnotation', function() {
    var annotations = editor.getSession().getAnnotations();
    $('#statusbar').toggleClass('failure', annotations.length !== 0);
    if (annotations.length === 0) {
      var message = editor.getSession().getLength() < 2 && editor.getSession().getLine(0).length === 0 ? 'No content' : 'Valid';
      $('div.status-message').text(message);
    }
    else {
      var firstAnnotation = annotations[0];
      $('div.status-message').text(firstAnnotation.text + ' at '+ firstAnnotation.row + ':'+ firstAnnotation.column);
    }
  });
  var StatusBar = ace.require('ace/ext/statusbar').StatusBar;
  // create a simple selection status indicator
  new StatusBar(editor, document.getElementById('statusbar'));
  editor.commands.addCommand({
    name: 'showKeyboardShortcuts',
    bindKey: {win: 'Ctrl-Alt-h', mac: 'Command-Alt-h'},
    exec: function(editor) {
      ace.config.loadModule('ace/ext/keybinding_menu', function(module) {
        module.init(editor);
        editor.showKeyboardShortcuts();
      });
    }
  });

  var loadTemplate = function(file){
    var reader = new FileReader();
    reader.onload = function () {
      var data = reader.result;
      if(data) {
        editor.setValue(data);
        editor.navigateTo(0, 0);
      }
      editor.resize();
    };
    reader.readAsText(file);
  };
  var showCyGraph = function() {
    var data;
    try {
      data = collector.collectCyData(JSON.parse(editor.getValue()));
    }
    catch (e) {
      data = {};
    }
    console.log(data);
    if (!graphPane) {
      graphPane = $('div.graph_overlay');
    }
    graph = cytoscape({
      container: document.getElementById('graph_area'),
      elements: data,

      style: [
      {
        selector: 'node',
        css: {
          'content': 'data(id)',
          'text-valign': 'center',
          'text-halign': 'center'
        }
      },
      {
        selector: '$node > node',
        css: {
          'padding-top': '10px',
          'padding-left': '10px',
          'padding-bottom': '10px',
            'padding-right': '10px',
            'text-valign': 'top',
              'text-halign': 'center'
        }
      },
        {
          selector: 'edge',
          css: {
            'target-arrow-shape': 'triangle'
          }
        },
        {
          selector: ':selected',
          css: {
            'background-color': 'black',
            'line-color': 'black',
            'target-arrow-color': 'black',
              'source-arrow-color': 'black'
          }
        }
      ],

      layout: {
        name: 'cose',
        padding: 5
      }
    });
    graphPane.fadeIn(300);
  };
  var getTemplateDescription = function() {
    var description = 'template';
    try {
      description = JSON.parse(editor.getValue(editor.getValue())).Description;
    } catch (e) {}
    return description;
  };
  var saveImage = function() {
    var canvas = graphPane.find('canvas');
    if (canvas && canvas.length === 1) {
      canvas[0].toBlob(function(blob){
        saveAs(blob, getTemplateDescription() + '.png');
      });
    }
    else {
      console.error('Expected to find one canvas but got ' + canvas);
    }
  };
  var saveTemplate = function() {
    var prettyDoc = JSON.stringify(JSON.parse(editor.getValue()), null, 2);
    var blob = new Blob([prettyDoc], {type: 'text/plain;charset=utf-8'});
    saveAs(blob, getTemplateDescription() + '.json');
  };
  var mainRow = document.getElementById('cfeditor');
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
  $('#open_template').change(function(event){ loadTemplate(event.target.files[0]); });
  $('#save_template').click(function(event){ event.preventDefault(); saveTemplate(); return false;});
  $('#save_graph').click(function(event){ event.preventDefault(); saveImage(); return false;});
  $('#show_graph').click(function(event){ event.preventDefault(); showCyGraph(); return false;});
  $('#close_graph').click(function(event){ event.preventDefault(); graphPane.fadeOut(500); return false;});
})();
