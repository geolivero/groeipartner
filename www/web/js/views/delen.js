var Delen,
    Backbone = require('backbone'),
    $ = require('jquery');

Delen = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 600);

    setTimeout(function () {
      var circ = self.$el.find('.circles');
      circ.each(function (i) {
          var el = $(this);
          setTimeout(function () {
            if (i === circ.length - 1) {
              self.animateKaarten();
            }
            el.addClass('show');
          }, i * 800);
      });
    }, 1400);
  },
  animateKaarten: function () {
    var el = this.$el.find('.gr__3');
    setTimeout(function () {
      el.addClass('second');
    }, 1200);
    setTimeout(function () {
      el.addClass('third');
    }, 2200);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Delen;