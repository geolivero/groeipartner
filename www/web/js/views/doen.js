var Doen,
    Backbone = require('backbone'),
    $ = require('jquery');

Doen = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 600);

    setTimeout(function () {
      self.$el.find('.circles').each(function (i) {
        var el = $(this);
        console.log(i);
        setTimeout(function () {
          el.addClass('show');
        }, i * 800);
      });
    }, 1200);
  },
  render: function () {
    console.log("logthis");
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Doen;