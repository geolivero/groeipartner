var Durven,
    Backbone = require('backbone'),
    $ = require('jquery');

Durven = Backbone.View.extend({
  el: '#App',
  showItems: function () {
    var self = this;
    setTimeout(function () {
        self.$el.find('.intro').addClass('show');
    }, 500);
    setTimeout(function () {
        self.$el.find('.circles').each(function (i) {
            var el = $(this);
            setTimeout(function () {
              el.addClass('show');
            }, i * 800);    
        });
        
    }, 1000);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    this.showItems();
  }
});

module.exports = Durven;