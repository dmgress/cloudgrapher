/* jshint devel:true */
/* global saveAs, require, CodeMirror, alertify, cytoscape */

(function() {
  'use strict';

  var graphArea = $('#graph_area');
  var refreshTimeoutID;

  var queryTools = require('./queryparser');

  var remoteInput = $('#remote_input');

  var showGraphBackGround = function (hidden) {
    graphArea.css('background-image', !hidden ? 'url("images/aws-cloudformation-template.svg")' : '');
  };

  var myCodeMirror = new CodeMirror(document.getElementById('editor'), {
    value: '{}',
    lineNumbers: true,
    mode: 'application/json',
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],

  });
  myCodeMirror.setSize('100%', '800px');

  var template = require('./template').template({
    'editor': {
      setValue: function(value) { myCodeMirror.getDoc().setValue(value); },
      getValue: function() { return myCodeMirror.getDoc().getValue(); }
    },
    'cytolib': cytoscape,
    'graphContainer': graphArea[0],
    'jsonproxy': $.jsonp
  });

  window.getTemplate = function() { return template; };

  var myConfirmation = function(event) {
    if (!template.hasChanged()) {
      return undefined;
    }
    if (event && event.type === 'beforeunload') {
      event.returnValue = 'The current template has unsaved changes.';
      return 'The current template has unsaved changes.';
    }
    return window.confirm('The current template has unsaved changes. Continue loading?');
  };

  var loadTemplate = function(loadFn, url) {
    if (!url || (template.hasChanged() && !myConfirmation())) {
      return;
    }
    loadFn(
      url,
      function(templateLocation) {
        showGraphBackGround(true);
        if (typeof url === 'string') {
          if (remoteInput.val() !== url) {
            remoteInput.val(url);
          }
          var embedUrl = queryTools.createEmbedUrl(window.location, url);
          $('#embed_link').html('Use <a href="' + embedUrl + '">' + embedUrl + '</a> to open directly');
        }
        else {
          remoteInput.val('');
          $('#embed_link').html('');
        }
        alertify.success('Loaded template "' + templateLocation + '" successfully');
      },
      function(templateLocation, reason, e) {
        template.setData('{"Error": "Unable to load template ' + templateLocation + ' because of ' + reason + '" }', showGraphBackGround);
        alertify.error('Unable to load template "' + templateLocation + '" because of ' + reason);
        console.log(e);
      }
    );
  };

  $.ajax({
    url: 'styles/main.cycss',
    type: 'GET',
    dataType: 'text',
    success: function(responseText) {
      template.changeStyle(responseText);
    }
  });

  var delayedRefresh = function() {
    template.refreshGraph();
    $('#embed_link').toggle(!template.hasChanged());
    refreshTimeoutID = undefined;
  };

  myCodeMirror.setOption('lint', {
    onUpdateLinting: function(annotations) {
      if (template && (!annotations || annotations.length === 0)) {
        if (refreshTimeoutID) {
          window.clearTimeout(refreshTimeoutID);
        }
        refreshTimeoutID = window.setTimeout(delayedRefresh, 300);
      }
    }
  });

  graphArea[0].addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  graphArea[0].addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    loadTemplate(template.fromFile, evt.dataTransfer.files[0]);
  }, false);


  var isResizing = false,
    lastDownX = 0;


  var getTemplateUrl = function () {
    var url = remoteInput.val();
    if (remoteInput[0].checkValidity()){
      remoteInput.hide();
      return url;
    }
    return undefined;
  };


  $('#remote_input').keypress(function(e) {
    if (e.which === 13) {
      loadTemplate(template.fromURL, getTemplateUrl());
      return false;
    }
  });

  $('#open_template').click(function(event) {
    event.preventDefault();
    $('#template_input').click();
  });
  $('#template_input').change(function(event) {
    loadTemplate(template.fromFile, event.target.files[0]);
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

  $('#save_template').click(function(event) {
    event.preventDefault();
    saveAs(
      new Blob( [template.text(2)], { type: 'text/plain;charset=utf-8' }),
      template.description() + '.json'
    );
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
    editorPane = $('#editor_pane');

  $('#border').on('mousedown', function(e) {
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

  $(document).ready(function() {
    showGraphBackGround();
    //----- Parse Query -----//
    queryTools.parser(window.location.search, {
      onTemplate: function(url) {
        loadTemplate(template.fromURL, url);
      }
    });
    //----- Parse Query -----//

    window.addEventListener('beforeunload', myConfirmation);
  });
})();
