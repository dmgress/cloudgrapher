/* jshint devel:true */
/* global saveAs, require, CodeMirror, alertify */

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
  var template = require('./template').template(myCodeMirror, $('#graph_area'));
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

  var loadURL = function() {
    template.fromURLInput(remoteInput,
      function(url) {
        alertify.success('Loaded URL "' + url + '" successfully');
      },
      function(url, message) {
        alertify.error('Error while loading URL "' + url + '" :' + message);
      }
    );
  };
  var loadFile = function(file) {
    template.load(
      file,
      function(name) {
        alertify.success('Loaded file "' + name + '"');
      },
      function(name, reason) {
        alertify.error('Unable to load file "' + name + '" because of ' + reason);
      }
    );
  };

  var saveImage = function() {
    var saveWindow = window.open('savegraph.html');
    saveWindow.onload = function() {
      saveWindow.document.getElementById('graphPNG').src = template.base64Image();
    };
  };
  var saveTemplate = function() {
    var blob = new Blob([template.text(2)], {
      type: 'text/plain;charset=utf-8'
    });
    saveAs(blob, template.description() + '.json');
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
    loadFile(evt.dataTransfer.files[0]);
  }, false);
  $('#graph_area').css('background-image', 'url("images/aws-cloudformation-template.svg")');
  $('#open_template').click(function(event) {
    event.preventDefault();
    $('#template_input').click();
  });
  $('#open_url').click(function(event) {
    event.preventDefault();
    if (remoteInput.is(':visible')) {
      loadURL();
    }
    else {
      remoteInput.show();
    }
  });
  $('#template_input').change(function(event) {
    loadFile(event.target.files[0]);
  });
  $('#save_template').click(function(event) {
    event.preventDefault();
    saveTemplate();
    return false;
  });
  $('#save_graph').click(function(event) {
    event.preventDefault();
    saveImage();
    return false;
  });
  $('#graph_layout').change(function() {
    template.setLayout($('#graph_layout').val());
  });

  $('#remote_input').keypress(function(e) {
    if (e.which === 13) {
      loadURL();
      return false;
    }
  });
  var container = $('#container'),
    left = $('#graph_area'),
    right = $('#editor_pane'),
    handle = $('#border');

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

    left.css('right', offsetRight);
    right.css('width', offsetRight);
  }).on('mouseup', function() {
    if (isResizing) {
      template.graph.fit();
    }
    // stop resizing
    isResizing = false;
  });
})();
