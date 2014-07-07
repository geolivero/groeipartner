var Danken,
    Backbone = require('backbone'),
    $ = require('jquery');

Danken = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 800);

    setTimeout(function () {
      self.$el.find('.circles').each(function (i) {
          var el = $(this);
          setTimeout(function () {
            el.addClass('show');
          }, i * 1000);
      });
    }, 1200);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Danken;