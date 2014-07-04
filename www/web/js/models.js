var Models = {},
    Backbone = require('backbone'),
    $ = require('jquery');

Models.model = Backbone.Model.extend({});

Models.collection = Backbone.Collection.extend({
  model: Models.model
});

module.exports = Models;
