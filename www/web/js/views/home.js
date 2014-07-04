var Home,
    Backbone = require('backbone'),
    $ = require('jquery');

Home = Backbone.View.extend({
  el: '#App',
  animate_spans: function () {
    var spans = this.$el.find('h1 span'), self = this;
    spans.each(function (i) {
        var el = $(this);
        setTimeout(function () {
            el.addClass('show');
            if ((spans.length - 1) === i) {
                self.animate_start();
            }
        }, (i + 1)  * 500);
    });
  },
  animate_start: function () {
    var btn = this.$el.find('.start__btn');
    setTimeout(function() {
        btn.addClass('show');
    }, 500);
  },
  animate_8: function () {
    var eight = this.$el.find('.left__gr'), self = this;

    setTimeout(function () {
        eight.addClass('show_1');    
    }, 100);

    setTimeout(function () {
        eight.addClass('show_2');
        self.animate_spans();
    }, 1100);
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    Helpers.fixUrls(this.$el);
    this.animate_8();
  }
});

module.exports = Home;