/* jshint devel:true */
var findedges_lib = require('./findedges')
exports.collectData = function(json) {
  'use strict';
  var data = { nodes:[], edges:[] };
  var knownResources = [];
  var possibleEdges = [];
  function addEdge(toId, title){
      //console.log('Pushing possible edge "' + title + '" going to ' + toId);
      possibleEdges.push( {'from': r, 'to': toId, 'title': title } );
    }
  for (var r in json.Resources) {
    knownResources.push(r);
    data.nodes.push({ id: r, label: r });
    var resource = json.Resources[r];
    var props = resource.Properties;
    findedges_lib.findEdges(props, addEdge);
  }
  data.edges = possibleEdges.filter(function(edge) {
    return edge && knownResources.indexOf(edge.to) >= 0;
  });
  return data;
};
