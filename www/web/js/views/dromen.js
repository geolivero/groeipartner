var Dromen,
    Backbone = require('backbone'),
    $ = require('jquery');

Dromen = Backbone.View.extend({
  el: '#App',
  showCircles: function () {
    var self = this;
    this.$el.find('.circles').each(function (i) {
        var el = $(this);
        setTimeout(function () {
            el.addClass('show');
        }, (i + 1) * 500);
    });
    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 300);
    
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showCircles();
  }
});

module.exports = Dromen;