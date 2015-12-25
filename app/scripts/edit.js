/* jshint devel:true */
/* global saveAs, require, CodeMirror, alertify, cytoscape */

(function() {
  'use strict';

  var myCodeMirror = new CodeMirror(document.getElementById('editor'), {
    value: '{}',
    lineNumbers: true,
    mode: 'application/json',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    lint: {
      onUpdateLinting: function(annotations) {
        if (template && (!annotations || annotations.length === 0)) {
          template.refreshGraph();
        }
      }
    }
  });
  myCodeMirror.setSize('100%', '800px');

  var graphArea = $('#graph_area');

  graphArea.css('background-image', 'url("images/aws-cloudformation-template.svg")');
  graphArea[0].addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  graphArea[0].addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    loadTemplate(template.load, evt.dataTransfer.files[0]);
  }, false);

  var template = require('./template').template({
    'editor': myCodeMirror,
    'cytolib': cytoscape,
    'graphContainer': graphArea[0],
    'jsonproxy': $.jsonp
  });
  $.ajax({
    url: 'styles/main.cycss',
    type: 'GET',
    dataType: 'text',
    success: function(responseText) {
      template.changeStyle(responseText);
    }
  });
  var isResizing = false,
    lastDownX = 0;

  var remoteInput = $('#remote_input');

  $('#remote_input').keypress(function(e) {
    if (e.which === 13) {
      loadTemplate(template.fromURL, getTemplateUrl());
      return false;
    }
  });

  var getTemplateUrl = function (argument) {
    var url = remoteInput.val();
    if (remoteInput[0].checkValidity()){
      remoteInput.hide();
      return url;
    }
    return undefined;
  }

  var loadTemplate = function(loadFn, arg) {
    if (!arg) {
      return;
    }
    loadFn(
      arg,
      function(templateLocation) {
        graphArea.css('background-image', '');
        alertify.success('Loaded template "' + templateLocation + '" successfully');
      },
      function(templateLocation, reason) {
        alertify.error('Unable to load template "' + templateLocation + '" because of ' + reason);
      }
    );
  };

  $('#open_template').click(function(event) {
    event.preventDefault();
    $('#template_input').click();
  });
  $('#open_url').click(function(event) {
    event.preventDefault();
    if (remoteInput.is(':visible')) {
      loadTemplate(template.fromURL, getTemplateUrl());
    }
    else {
      remoteInput.show();
    }
  });
  $('#template_input').change(function(event) {
    loadTemplate(template.load, event.target.files[0]);
  });
  $('#save_template').click(function(event) {
    event.preventDefault();
    var blob = new Blob([template.text(2)], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, template.description() + '.json');
    return false;
  });
  $('#save_graph').click(function(event) {
    event.preventDefault();
    var saveWindow = window.open('savegraph.html');
    saveWindow.onload = function() {
      saveWindow.document.getElementById('graphPNG').src = template.base64Image();
    };
    return false;
  });
  $('#graph_layout').change(function() {
    template.setLayout($('#graph_layout').val());
  });

  var container = $('#container'),
    handle = $('#border');
    editorPane = $('#editor_pane');

  handle.on('mousedown', function(e) {
    isResizing = true;
    lastDownX = e.clientX;
  });

  $(document).on('mousemove', function(e) {
    // we don't want to do anything if we aren't resizing.
    if (!isResizing) {
      return;
    }

    var offsetRight = container.width() - (e.clientX - container.offset().left);

    graphArea.css('right', offsetRight);
    editorPane.css('width', offsetRight);
  }).on('mouseup', function() {
    if (isResizing) {
      template.fitGraph();
    }
    // stop resizing
    isResizing = false;
  });
})();
