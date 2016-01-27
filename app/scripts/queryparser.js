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

exports.createEmbedUrl = function(host, target) {
    'use strict';
    return new URI(host).search(function(data) {
        data.CFTemplateURL = target;
    });
};