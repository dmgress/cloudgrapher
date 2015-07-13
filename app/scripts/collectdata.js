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

exports.collectCyData = function(json) {
  var data = { nodes:[], edges:[] };
  var edgeIndex = 0;

  var addEdge = function (toId, title) {
    data.edges.push({ data: { id: 'e'+ (edgeIndex++), source: resourceKey, target: toId }});
  };

  var knownResources = {};
  for (var resourceKey in json.Resources) {
    var resource = json.Resources[resourceKey];
    var r = {
      data: {
        id: resourceKey
      },
      classes: resource.Type.toLowerCase().replace(/::/g,'-'),
      type: resource.Type
    };
    findEdges(resource.Properties, addEdge);
    knownResources[resourceKey] = r;
    data.nodes.push(r);
  };

  data.edges = data.edges.filter(function(edge) {
    var target = knownResources[edge.data.target];
    if (target && target.type === 'AWS::EC2::SecurityGroup'){
      knownResources[edge.data.source].data['parent'] = edge.data.target;
      return false;
    }
    return edge && target;
  });

  return data;
};
