define([
    'text!User/Views/Template/user-item.html',
    'marionette',
    'underscore'
], function(ItemTemplate, Marionette, _) {

    /**
     * User Item view
     */
    var Item = Marionette.ItemView.extend({
        className: 'list-group-item',
        template: _.template(ItemTemplate)
    });

    return Item;
});
