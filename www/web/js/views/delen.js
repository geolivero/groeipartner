var Delen,
    Backbone = require('backbone'),
    $ = require('jquery');

Delen = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 300);

    setTimeout(function () {
      self.$el.find('.circles').each(function (i) {
          var el = $(this);
          console.log(i);
          setTimeout(function () {
            el.addClass('show');
          }, i * 500);
      });
    }, 600);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Delen;