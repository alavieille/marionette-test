define([
    'backbone'
], function(Backbone){

    /**
     * User Model
     */
    var Model = Backbone.Model.extend({
        defaults: {
            username: ''
        }
    });

    return Model;
});