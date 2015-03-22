/* jshint devel:true */
'use strict';
var collectData, find_edges;
(function(){
  collectData = function(json) {
    var data = { nodes:[], edges:[] };
    var known_resources = [];
    var possible_edges = [];
    for (var r in json['Resources']) {
      known_resources.push(r);
      data.nodes.push({ id: r, label: r });
      var resource = json['Resources'][r];
      var props = resource['Properties'];
      find_edges(props, function(toId, title){
        //console.log('Pushing possible edge "' + title + '" going to ' + toId);
        possible_edges.push( {'from': r, 'to': toId, 'title': title } );
      });
    }
    data.edges = possible_edges.filter(function(edge) {
      return edge && known_resources.indexOf(edge.to) >= 0;
    });
    return data;
  };
  find_edges = function(start, make_edge, title) {
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
      else {
        for (var key in start) {
          find_edges(start[key], make_edge, key);
        }
      }
      }
      else {
        for (var key in start) {
          find_edges(start[key], make_edge, key);
        }
      }
    }
  };
})();
