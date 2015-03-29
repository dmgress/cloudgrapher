/* jshint devel:true */
exports.findEdges = function findIn (start, makeEdge, title) {
  'use strict';
  var self = this;
  if (start instanceof Array) {
    start.forEach(function(elem){
      findIn(elem, makeEdge, title || '');
    });
  }
  else if (typeof start === 'object') {
    if (Object.keys(start).length === 1) {
      var fn = Object.keys(start)[0];
      if (fn === 'Ref' && typeof start[fn] === 'string') {
        makeEdge(start[fn], title || '');
      }
      else if (fn === 'Fn::Join' && start[fn] instanceof Array) {
        start[fn][1].forEach(function(elem) {
          findIn(elem, makeEdge, start[fn][1].join(start[fn][0]));
        });
      }
      else if (fn === 'Fn::GetAtt' && start[fn] instanceof Array) {
        makeEdge(start[fn][0], start[fn][1]);
      }
      else {
        for (var key in start) {
          findIn(start[key], makeEdge, key);
        }
      }
    }
    else {
      for (var k in start) {
        findIn(start[k], makeEdge, k);
      }
    }
  }
};
