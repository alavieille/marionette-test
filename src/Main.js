require.config({
    paths: {
        'jquery': '../bower_components/jquery/dist/jquery',
        'underscore': '../bower_components/underscore/underscore',
        'backbone': '../bower_components/backbone/backbone',
        'backbone.babysitter': '../bower_components/backbone.babysitter/lib/backbone.babysitter',
        'backbone.wreqr': '../bower_components/backbone.wreqr/lib/backbone.wreqr',
        'marionette': '../bower_components/marionette/lib/backbone.marionette',
        'bootstrap': '../bower_components/bootstrap/dist/js/bootstrap',
        'text': '../bower_components/requirejs-text/text'
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        underscore: {
            exports: '_'
        },
        backbone: {
            exports: 'Backbone',
            deps: ['jquery', 'underscore']
        },
        marionette: {
            exports: 'Marionette',
            deps: ['backbone']
        }
    }
});

require(['App', 'backbone', 'User/UserModule'], function(App) {
    App.start();
});