/* jshint devel:true */
/* global exports, require, URI */

exports.parser = function(url, callbacks) {
    if (url) {
        var queryMap = new URI(url).search(true);
        if (queryMap.CFTemplateURL && callbacks.onTemplate) {
            callbacks.onTemplate(queryMap.CFTemplateURL);
        }
    }
};