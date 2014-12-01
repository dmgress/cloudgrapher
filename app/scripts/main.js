/* jshint devel:true */

var container = document.getElementById('cfeditor');

var onContentChange = function() {
    // TODO start/postpone updating name + validating against AWS
};

var onEditableCheck = function(node) { // node is an object {field: string, value: string, path: string[]}
    return { field: true, value: boolean};
};
var options = {
    modes: ['tree', 'code','view'],
    name: 'CloudFormation template'
};
var editor = new JSONEditor(document.getElementById('jsoneditor'), options);

container.addEventListener('dragover', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy';
}, false);
container.addEventListener('drop', function(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var files = evt.dataTransfer.files;
    var reader = new FileReader();
    reader.onload = function () {
        editor.setText(reader.result);
        var json = editor.get();
        editor.setName(json['Description'] || 'CloudFormation template');
    };
    reader.readAsText(files[0]);
}, false);

