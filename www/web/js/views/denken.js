var Denken,
    Backbone = require('backbone'),
    $ = require('jquery');

Denken = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;
    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 300);
    setTimeout(function () {
        self.$el.find('.gr__1').addClass('show');
    }, 600);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Denken;