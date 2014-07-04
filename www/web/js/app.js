var App = {};
    $ = require('jquery'),
    Helpers = require('./helpers'),
    Router = require('./router'),
    Backbone = require('backbone');

pages = [
    'start', 'dromen', 'denken', 'delen', 'durven',
    'doen', 'doorzetten', 'dupliceren', 'danken', 'einde'
];

App.init = function () {
    App.nav = $('.site-footer'), index = 0;

    var R = new Router();

    Backbone.$ = $;
    
    Helpers.fixUrls($('body'));
    Backbone.history.start();
    
    $(document).keyup(function (e) {
        $.each(pages, function (i, page) {
            var url = document.location.toString().split('#')[1];
            if (page === url) {
                if (e.keyCode === 39) {
                    index = (index >= pages.length - 1) ? pages.length - 1 : index + 1;
                } else {
                    index = (index <= 1) ? 0 : index - 1;
                }
        
            }
        });
        if (e.keyCode === 39 || e.keyCode === 37) {
            R.navigate(pages[index], { trigger: true });
        }
    });

};

window.App = App;

$(App.init);