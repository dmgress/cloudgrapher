/* jshint devel:true */
/* global exports, require */

var findEdges = require('./findedges').findEdges;

exports.collectCyData = function(json) {
  'use strict';

  var knownResources = {};
  var possibleEdges = [];
  var edgeFilters = {
    'AWS::EC2::SecurityGroupIngress': function(edge /*, source, target*/ ) {
      if (edge.data.title === 'GroupId') {
        // NOOP the direction is good
      }
      else if (edge.data.title === 'SourceSecurityGroupId') {
        var newTarget = edge.data.source;
        edge.data.source = edge.data.target;
        edge.data.target = newTarget;
      }
      return true;
    },
    'AWS::EC2::SecurityGroupEgress': function(edge /*, source, target*/ ) {
      if (edge.data.title === 'DestinationSecurityGroupId') {
        // NOOP the direction is good
      }
      else if (edge.data.title === 'GroupId') {
        var newTarget = edge.data.source;
        edge.data.source = edge.data.target;
        edge.data.target = newTarget;
      }
      return true;
    },
    'default': function(edge, source, target) {
      if (target && target.type === 'AWS::EC2::SecurityGroup' && source.type !== 'AWS::EC2::SecurityGroup') {
        knownResources[edge.data.source].data.parent = edge.data.target;
        return false;
      }
      return true;
    },
    'get': function(awsType) {
      return this[awsType] || this['default'];
    }
  };
  var data = {
    nodes: [],
    edges: []
  };
  var edgeIndex = 0;
  var addEdge = function(edge) {
    possibleEdges.push({
      data: {
        id: 'e' + (edgeIndex++),
        source: this,
        target: edge.toResource,
        title: edge.label,
        targetProperty: edge.toProperty
      }
    });
  };

  for (var resourceKey in json.Resources) {
    var resource = json.Resources[resourceKey];
    var resourceClass = resource.Type.toLowerCase().replace(/::/g, '-');
    var r = {
      data: {
        id: resourceKey,
        CFType: resource.Type,
        nodeClass: resourceClass,
      },
      classes: resourceClass,
      type: resource.Type
    };
    findEdges(resource.Properties).forEach(addEdge, resourceKey);
    knownResources[resourceKey] = r;
    data.nodes.push(r);
  }

  data.edges = possibleEdges.filter(function(edge) {
    var source = knownResources[edge.data.source];
    var target = knownResources[edge.data.target];
    var filter = edgeFilters.get(source.type);
    return edge && source && target && filter(edge, source, target);
  });

  return data;
};
