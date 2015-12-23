define([
    'User/Router',
    'User/Controller'
], function(Router, Controller, App) {

    /**
     * User Module
     */
    var UserModule = {
        router : new Router({
            controller : new Controller()
        })
    };

    return UserModule;
});