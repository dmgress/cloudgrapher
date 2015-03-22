/* jshint devel:true */
var editor = {};
var graph = undefined;
(function(){
  var mainRow = document.getElementById('cfeditor');
  var errors = [];

  var graphcontainer = document.getElementById('graph-container');
  var graphOptions = {
    'edges': {
      'style' : 'arrow',
    }
  };

  editor = ace.edit('jsoneditor');
  editor.setTheme("ace/theme/tomorrow_night_eighties");
  editor.getSession().setMode("ace/mode/json");
  editor.setOption("maxLines", 80);
  editor.setOption("minLines", 80);
  var check_valid = function() {
    var templateStatus = document.getElementById('templateStatus');
    var statusTitle = document.getElementById('statusTitle');
    var errorlist = templateStatus.getElementsByTagName('ul');
    if (errorlist.length > 0) {
      templateStatus.removeChild(errorlist[0]);
    }
    if (errors.length > 0) {
      templateStatus.className = 'alert-box alert';
      statusTitle.innerHTML="Error(s): ";
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
      statusTitle.innerHTML="Valid";
    }
  };
  mainRow.addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  var updateGraph = function(json){
    var data = { nodes:[], edges:[] };
    var known_resources = [];
    var possible_edges = [];
    for (var r in json['Resources']) {
      known_resources.push(r);
      data.nodes.push({ id: r, label: r });
      var resource = json['Resources'][r];
      var props = resource['Properties'];
      find_edges(props, function(toId, title){
        console.log('Pushing possible edge "' + title + '" going to ' + toId);
        possible_edges.push( {'from': r, 'to': toId, 'title': title } );
      });
    }
    data.edges = possible_edges.filter(function(edge) {
      return edge && known_resources.indexOf(edge.to) >= 0;
    });
    if(graph == undefined){
      graph = new vis.Network(graphcontainer, data, graphOptions);
      graphcontainer.className = graphcontainer.className.replace(/(?:^|\s)callout(?!\S)/g , '');
    }
    else {
      graph.setData(data);
    }
  };
  var find_edges = function(start, make_edge, title) {
    if (start instanceof Array) {
      start.forEach(function(elem){
        find_edges(elem, make_edge, title || '');
      });
    }
    else if (typeof start === 'object') {
      if (Object.keys(start).length == 1) {
        var fn = Object.keys(start)[0];
        if (fn == 'Ref' && typeof start[fn] === 'string') {
          make_edge(start[fn], title || '');
        }
        else if (fn === 'Fn::Join' && start[fn] instanceof Array) {
          start[fn][1].forEach(function(elem) {
            find_edges(elem, make_edge, start[fn][1].join(start[fn][0]));
          });
        }
        else if (fn === 'Fn::GetAtt' && start[fn] instanceof Array) {
          make_edge(start[fn][0], start[fn][1]);
        }
      }
      else {
        for (key in start) {
          find_edges(start[key], make_edge, key);
        }
      }
    }
  };
  mainRow.addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function () {
      cfscript = reader.result;
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
    if (canvas && canvas.length == 1) {
      canvas[0].toBlob(function(blob){
        saveAs(blob, 'cloudformation_resources.png');
      });
    }
    else {
      console.log('Expected to find one canvas but got ' + canvas);
    }
  };
  var saveTemplate = function() {
    var prettyDoc = js_beautify(editor.getValue());
    var blob = new Blob([prettyDoc], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "cloudformation_template.json");
    console.log(prettyDoc);
  };
  $('#save_template').click(function(){ saveTemplate(); return false;});
  $('#save_graph').click(function(){ saveImage(); return false;});
  check_valid();
})();
