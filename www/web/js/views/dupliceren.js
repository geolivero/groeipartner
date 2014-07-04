var Dupliceren,
    Backbone = require('backbone'),
    $ = require('jquery');

Dupliceren = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 300);

    setTimeout(function () {
      self.$el.find('.circles').each(function (i) {
        var el = $(this);
        setTimeout(function () {
          el.addClass('show');
        }, i * 600);
      });
    }, 600);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Dupliceren;