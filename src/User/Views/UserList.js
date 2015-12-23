define([
    'text!User/Views/Template/user-list.html',
    'User/Views/UserItem',
    'marionette',
    'underscore'
], function(ListTemplate, UserItem, Marionette, _) {

    /**
     * Users List view
     */
    var List = Marionette.CompositeView.extend({
        childView: UserItem,
        childViewContainer: '#user-list',
        template: _.template(ListTemplate),
    });

    return List;
});
