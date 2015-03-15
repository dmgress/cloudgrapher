/* jshint devel:true */
var editor = {};
var graph = undefined;
(function(){
  //JSONEditor.defaults.options.theme = 'foundation5';
  //JSONEditor.defaults.options.iconlib = 'fontawesome4';
  var mainRow = document.getElementById('cfeditor');
  var errors = [];

  var graphcontainer = document.getElementById('graph-container');
  var graphOptions = {}

  editor = ace.edit('jsoneditor');
  editor.setTheme("ace/theme/tomorrow_night_eighties");
  editor.getSession().setMode("ace/mode/json");
  //editor.setAutoScrollEditorIntoView(true);
  editor.setOption("maxLines", 80);
  editor.setOption("minLines", 80);
  var check_valid = function() {
    //    errors = editor.validate();
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
  // editor.on('change', check_valid);
  // editor.getEditor('root').canHaveAdditionalProperties = function() { return false};
  mainRow.addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
  }, false);
  var get_edge = function(value, callback) {
    //   IF the object has a key Ref THEN
    if (value instanceof Array) {
      value.forEach(function(v){
        if (v instanceof Object) {
          for (field in v) {
            get_edge(v[field], callback);
          }
        }
      });
    }
    else if (value['Ref']) {
      callback( value['Ref'] );
    } else if (value['Fn::GetAtt']) {
      callback( value['Fn::GetAtt'][0] );
    } else if (value['Fn::Join']) {
      var join_pieces = value['Fn::Join'][1];
      if (join_pieces instanceof Array) {
        join_pieces.forEach(function(p) {
          if (p instanceof Object) {
            get_edge(p, callback);
          }
        });
      }
    }
  };
  var find_edges = function(some_array, c) {
  };
  mainRow.addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function () {
      cfscript = reader.result;
      if (cfscript) {
        //            editor.off('change', check_valid);
        editor.setValue(cfscript);
        json = JSON.parse(cfscript);
        var data = { nodes:[], edges:[] };
        var known_resources = [];
        var possible_edges = [];
        for (var r in json['Resources']) {
          known_resources.push(r);
          data.nodes.push({
            id: r,
            label: r
          });
          var resource = json['Resources'][r];
          if (resource['Type'] === 'AWS::IAM::Policy') {
            // for each statement in the policydocument collect the refs and fn:getatt
            var statements = resource['Properties']['PolicyDocument']['Statement'];
            statements.forEach (function(statement) {
              if (statement['Resource'] instanceof Array){
                statement['Resource'].forEach(function(rs) {
                  if (rs instanceof Object) {
                    get_edge(rs, function(toId) {
                      possible_edges.push( {'from': r, 'to': toId, 'title': 'Policy Resource' } );
                    });
                  }
                });
              }
            });
            if(resource['Properties']['Roles'] instanceof Array) {
              resource['Properties']['Roles'].forEach(function(role) {
                if (role instanceof Object) {
                  get_edge(role, function(toId) {
                    possible_edges.push( {'from': r, 'to': toId, 'title': 'Policy Role'} );
                  });
                }
              });
            }
          }
          else {
            var props = resource['Properties'];
            for (var key in props) {
              // IF the value is an object THEN it's interesting
              var prop_value = props[key];
              if (prop_value instanceof Array) {
                prop_value.forEach(function(e) {
                  if (e instanceof Object) {
                    get_edge(e, function(toId) {
                      possible_edges.push( {'from': r, 'to': toId, 'title': key} );
                    });
                  }
                });
              }
              else if (prop_value instanceof Object) {
                get_edge(prop_value, function(toId) {
                  possible_edges.push( {'from': r, 'to': toId, 'title': key} );
                });
              }
            }
          }
        }
        //console.log('possible:' + JSON.stringify(possible_edges));
        data.edges = possible_edges.filter(function(edge) {
          return edge && known_resources.indexOf(edge.to) >= 0;
        });
        //console.log('data:' + JSON.stringify(data));
        // Remove all edges where to starts with AWS::
        // Remove all edges where to is not an existing id in nodes
        if(graph == undefined){
          graph = new vis.Network(graphcontainer, data, graphOptions);
          graphcontainer.className = graphcontainer.className.replace(/(?:^|\s)callout(?!\S)/g , '');
        }
        else {
          graph.setData(data);
        }
        //            editor.on('change', check_valid);
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
    //    var prettyDoc = js_beautify(JSON.stringify(editor.getValue(), function(k,v){return v == null ? "" : v;}));
    var prettyDoc = js_beautify(editor.getValue());
    var blob = new Blob([prettyDoc], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "cloudformation_template.json");
    console.log(prettyDoc);
  };
  $('#save_template').click(function(){ saveTemplate(); return false;});
  $('#save_graph').click(function(){ saveImage(); return false;});
  check_valid();
})();
