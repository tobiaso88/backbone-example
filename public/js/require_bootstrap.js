/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
    paths: {
        jquery: 'jquery-3.2.1',
        underscore: 'underscore',
        backbone: 'backbone',
        text: 'text'
    }
});

require([
    'backbone',
    'views/app'
], function (Backbone, AppView) {
    // start Backbone.history()
    Backbone.history.start();

    var oldSync = Backbone.sync;
    Backbone.sync = function(method, model, options){
        options.beforeSend = function(xhr){
            xhr.setRequestHeader('x-csrf-token', CSRF_TOKEN);
        };
        return oldSync(method, model, options);
    };

    // Initialize the application view
    new AppView();
});
