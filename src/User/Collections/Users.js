define([
    'backbone',
    'User/Models/User'
], function(Backbone, User) {

    /**
     * Users collection
     */
    var Collection = Backbone.Collection.extend({
        model: User,
        url: 'api/users.json',

        /**
         * @param {object} response
         *
         * @returns {Object[]}
         */
        parse: function(response){
            var collectionName = response.collection_name;

            return response[collectionName];
        }
    });

    return Collection;
});
