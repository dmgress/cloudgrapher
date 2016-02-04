/* jshint devel:true */
/* global exports */

// findEdges/findIn
//  - startElement element to traverse through
//  - makeEdge     call back which expects a reference resource name and
//                   title of the resource reference
//  - title        resource title to push to callback function
//
exports.findEdges = function findIn (start, makeEdge, title) {
  'use strict';
  var found = [];
  // If start is an array then let's loop through all elements to find edges
  //
  if (start instanceof Array) {
    start.forEach(function(elem){
      found.push( findIn(elem, makeEdge, title || '') );
    });
  }
  // Else if we hit some object and we should delve into it
  //
  else if (typeof start === 'object') {
    // When we only have one key then it's probably some CloudFormation function
    // we can use to make an make edge with
    //
    if (Object.keys(start).length === 1) {
      var fn = Object.keys(start)[0];
      // If we hit a Ref, it's definitely a reference of some sorts
      // usually we only hit this option deep and the title should be available
      // otherwise give an empty title
      //
      if (fn === 'Ref' && typeof start[fn] === 'string') {
        found.push({label: title || '', toResource: start[fn], toProperty: title || ''});
        makeEdge(start[fn], title || '', title);
      }
      // An Fn::Join is trickier, we might find edges recursively
      //
      else if (fn === 'Fn::Join' && start[fn] instanceof Array) {
        start[fn][1].forEach(function(elem) {
          found.push( findIn(elem, makeEdge, start[fn][1].join(start[fn][0])) );
        });
      }
      // If we see an Fn::GetAtt then make an edge with the reference,
      // not the attribute
      //
      else if (fn === 'Fn::GetAtt' && start[fn] instanceof Array) {
        found.push({label: title, toResource: start[fn][0], toProperty: start[fn][1]});
        makeEdge(start[fn][0], start[fn][1], title);
      }
      // Ok, forgot why this path is necessary, I guess it's when we didn't find
      //  something to easily pull references from and we probably need to keep
      //  searching anyway
      //
      else {
        for (var key in start) {
          found.push( findIn(start[key], makeEdge, key) );
        }
      }
    }
    // if we have more than one key we have to delve deeper to find edges
    //
    else {
      for (var k in start) {
        found.push( findIn(start[k], makeEdge, k) );
      }
    }
  }
  return [].concat.apply([], found); // return a flattened array http://stackoverflow.com/a/10865042/60201
};
