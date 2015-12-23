define([
    "marionette"
], function(Marionette){

    /**
     * User Router
     */
    var Router = Marionette.AppRouter.extend({
        appRoutes:{
            'list': 'userList'
        }
    });

    return Router;
});