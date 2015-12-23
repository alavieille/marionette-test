define([
    "marionette"
], function(Marionette){

    /**
     * Main App
     */
    var App = Marionette.Application.extend({
        regions: {
            header: "#app-header",
            content: "#app-content"
        },

        initialize: function (options) {
            console.log('start application with options', options);
        }

    });

    App = new App();

    /**
     * Init backbone history
     */
    App.on("start", function(options){
        if (Backbone.history){
            Backbone.history.start();
        }
    });

    return App;
});
