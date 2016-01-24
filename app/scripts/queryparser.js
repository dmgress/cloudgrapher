/* jshint devel:true */
/* global exports, URI */

exports.parser = function(url, callbacks) {
    'use strict';
    if (url) {
        var queryMap = new URI(url).search(true);
        if (queryMap.CFTemplateURL && callbacks.onTemplate) {
            callbacks.onTemplate(queryMap.CFTemplateURL);
        }
    }
};