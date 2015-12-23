define([
    "marionette",
    "User/Collections/Users",
    "User/Models/User",
    "User/Views/UserList",
    "App"
], function(Marionette, Users, User, UserList, App) {

    /**
     * Controller User
     */
    var Controller = Marionette.Object.extend({
        users : new Users(),

        /**
         * Init list Users
         */
        initialize: function() {
            this.users.fetch();
        },

        /**
         * List action
         */
        userList: function () {
            var viewList = new UserList({
                collection: this.users
            });
            App.content.show(viewList);
        }
    });

    return Controller;
});