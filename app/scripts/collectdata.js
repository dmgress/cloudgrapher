/* jshint devel:true */
var findedges_lib = require('./findedges')
exports.graphOptions = {
  'nodes': {
    'brokenImage': 'images/unknown.png'
  },
  'edges': {
    'style' : 'arrow',
    'color.highlight': 'red'
  }
};
exports.collectData = function(json) {
  'use strict';
  var data = { nodes:[], edges:[] };
  var knownResources = [];
  var possibleEdges = [];
  for (var resourceKey in json.Resources) {
    var resource = json.Resources[resourceKey];
    var props = resource.Properties;
    var group = resource.Type.toLowerCase().replace(/::/g,'-');
    knownResources.push(resourceKey);
    data.nodes.push({
      'id'   : resourceKey,
      'label': resourceKey,
      'group': group,
      'shape': 'image',
      'image': 'images/' + group + '.png'
    });
    findedges_lib.findEdges(props, function (toId, title){
      possibleEdges.push( {'from': resourceKey, 'to': toId, 'title': title } );
    });
  }
  data.edges = possibleEdges.filter(function(edge) {
    return edge && knownResources.indexOf(edge.to) >= 0;
  });
  return data;
};
