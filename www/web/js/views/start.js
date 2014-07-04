var Start,
    Backbone = require('backbone'),
    $ = require('jquery');

Start = Backbone.View.extend({
  el: '#App',
  events: {
    'click h1 span, h2 span' : 'toggleInfo'
  },
  initialize: function () {
    $(document).on('click', function (e) {
        $('.info__block p').removeClass('open');
    });
  },
  showSpiralEls: function () {
    this.$el.find('.spiral__menu li').each(function (i) {
        var el = $(this);
        setTimeout(function () {
            el.addClass('show');
        }, i * 200);
    });
  },
  showSpiral: function () {
    var self = this;

    setTimeout(function () {
        self.$el.find('.spiral__menu').addClass('show');
        self.$el.find('.info__block').addClass('show');
        
        self.showSpiralEls();
    }, 100);
    
  },
  toggleInfo: function (e) {
    var info = $(e.currentTarget), p = info.closest('div').find('p');
    $('.info__block p').removeClass('open');
    p.addClass('open');
    e.stopPropagation();
  },
  render: function () {
    this.$el.html(this.model.attributes.content);
    Helpers.fixUrls(this.$el);
    this.showSpiral();
  }
});

module.exports = Start;