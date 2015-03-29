/* jshint devel:true */
/* global ace, vis, collectData, js_beautify, saveAs */

var editor;
var graph_lib = require('./collectdata');
var graph;
(function(){'use strict';
  editor = ace.edit('jsoneditor');
  editor.setTheme('ace/theme/tomorrow_night_eighties');
  editor.getSession().setMode('ace/mode/json');
  editor.setOption('maxLines', 80);
  editor.setOption('minLines', 80);

  var graphcontainer = document.getElementById('graph-container');
  var graphOptions = {
    'edges': {
      'style' : 'arrow',
      'color.highlight': 'red'
    }
  };

  var updateGraph = function(json){
    var data = graph_lib.collectData(json);
    if(!graph){
      graph = new vis.Network(graphcontainer, data, graphOptions);
      graphcontainer.className = graphcontainer.className.replace(/(?:^|\s)callout(?!\S)/g , '');
    }
    else {
      graph.setData(data);
    }
  };
  var errors = [];
  var checkValid = function() {
    var templateStatus = document.getElementById('templateStatus');
    var statusTitle = document.getElementById('statusTitle');
    var errorlist = templateStatus.getElementsByTagName('ul');
    if (errorlist.length > 0) {
      templateStatus.removeChild(errorlist[0]);
    }
    if (errors.length > 0) {
      templateStatus.className = 'alert-box alert';
      statusTitle.innerHTML='Error(s): ';
      errorlist = document.createElement('ul');
      errors.forEach(function(err){
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(err.path + ' [' + err.property + '] ' + err.message));
        errorlist.appendChild(li);
      });
      templateStatus.appendChild(errorlist);
    }
    else {
      templateStatus.className = 'alert-box success';
      statusTitle.innerHTML='Valid';
    }
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

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function () {
      var cfscript = reader.result;
      if (cfscript) {
        editor.setValue(cfscript);
        updateGraph(JSON.parse(cfscript));
      }
      editor.resize();
    };
    reader.readAsText(files[0]);
  }, false);
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
  $('#save_graph').click(function(){ saveImage(); return false;});
  checkValid();
})();
