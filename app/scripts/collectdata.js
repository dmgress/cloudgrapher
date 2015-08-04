/* jshint devel:true */
/* global exports, require */
var findEdges = require('./findedges').findEdges;
exports.graphOptions = {
  'nodes': {
    'brokenImage': 'images/unknown.png'
  },
  'edges': {
    'style' : 'arrow',
    'color.highlight': 'red'
  },
  'stabilize': true,
  'zoomExtentOnStabilize': true
};
exports.collectData = function(json) {
  'use strict';
  var data = { nodes:[], edges:[] };
  var knownResources = [];
  var possibleEdges = [];
  var addEdge = function (toId, title){
    possibleEdges.push( {'from': resourceKey, 'to': toId, 'title': title } );
  };
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
    findEdges(props, addEdge);
  }
  data.edges = possibleEdges.filter(function(edge) {
    return edge && knownResources.indexOf(edge.to) >= 0;
  });
  return data;
};
