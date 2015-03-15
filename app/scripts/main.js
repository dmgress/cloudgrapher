/* jshint devel:true */
var cfeditor = {};
(function(){
JSONEditor.defaults.options.theme = 'foundation5';
JSONEditor.defaults.options.iconlib = 'fontawesome4';
var mainRow = document.getElementById('cfeditor');
var errors = [];
var graph = undefined;
var graphcontainer = document.getElementById('graph-container');
var graphOptions = {}

var editor = new JSONEditor(document.getElementById('jsoneditor'), {
    schema: schema
});
cfeditor.template = editor;
var check_valid = function() {
    errors = editor.validate();
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
editor.on('change', check_valid);
editor.getEditor('root').canHaveAdditionalProperties = function() { return false};
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
        cfscript = JSON.parse(reader.result);
        if (cfscript) {
            editor.off('change', check_valid);
            editor.setValue(cfscript);
            var data = { nodes:[], edges:[] };
            for (var r in cfscript['Resources']) {
                data.nodes.push({
                    id: r,
                    label: r
                });
            }
            if(graph == undefined){
                graph = new vis.Network(graphcontainer, data, graphOptions);
                graphcontainer.className = graphcontainer.className.replace(/(?:^|\s)callout(?!\S)/g , '');
            }
            else {
                graph.setData(data);
            }
            editor.on('change', check_valid);
        }
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
    var prettyDoc = js_beautify(JSON.stringify(editor.getValue(), function(k,v){return v == null ? "" : v;}));
    var blob = new Blob([prettyDoc], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "cloudformation_template.json");
    console.log(prettyDoc);
};
$('#save_template').click(function(){ saveTemplate(); return false;});
$('#save_graph').click(function(){ saveImage(); return false;});
check_valid();
})();
