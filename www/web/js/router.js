var Router,
    Models = require('./models'),
    Home = require('./views/home'),
    Start = require('./views/start'),
    Dromen = require('./views/dromen'),
    Denken = require('./views/denken'),
    Delen = require('./views/delen'),
    Durven = require('./views/durven'),
    Doen = require('./views/doen'),
    Doorzetten = require('./views/doorzetten'),
    Dupliceren = require('./views/dupliceren'),
    Danken = require('./views/danken'),
    Einde = require('./views/einde'),
    Backbone = require('backbone');


Router = Backbone.Router.extend({
    routes: {
        '' : 'init',
        'start': 'start',
        'dromen': 'dromen',
        'denken': 'denken',
        'delen': 'delen',
        'doen': 'doen',
        'doorzetten': 'doorzetten',
        'dupliceren': 'dupliceren',
        'danken': 'danken',
        'einde': 'einde',
        'durven': 'durven'
    },
    changeTheme: function (theme) {
        var Theme = theme || '';
        window.App.nav.removeClass('theme__orange').removeClass('theme__dark');
        window.App.nav.addClass(Theme);
    },
    setToActive: function (index) {
        $('footer li').removeClass('active');
        $('footer li').eq(index).addClass('active');
    },
    initialize: function () {
        this.collection = new Models.collection(window.Data);
    },
    showNav: function () {
        setTimeout(function () {
            window.App.nav.addClass('show');
        }, 2000);
    },
    init: function () {
        var home = new Home({ 
            model: this.collection.get('home')
        }).render();
        Helpers.fixUrls($('#App'));

        window.App.nav.removeClass('show');
        this.changeTheme();
    },
    dromen: function () {
        new Dromen({ 
            model: this.collection.get('dromen')
        }).render();
        Helpers.fixUrls($('#App'));
        this.setToActive(1);
        this.showNav();
        this.changeTheme('theme__orange');
    },
    denken: function () {
        new Denken({ 
            model: this.collection.get('denken')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(2);
        this.showNav();
        this.changeTheme('theme__orange');
    },
    delen: function () {
        new Delen({ 
            model: this.collection.get('delen')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(3);
        this.showNav();
        this.changeTheme('theme__orange');
    },
    durven: function () {
        new Durven({ 
            model: this.collection.get('durven')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(4);
        this.showNav();
        this.changeTheme('theme__orange');
    },
    doen: function () {
        new Doen({ 
            model: this.collection.get('doen')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(5);
        this.showNav();
        this.changeTheme('theme__dark');
    },
    doorzetten: function () {
        new Doen({ 
            model: this.collection.get('doorzetten')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(6);
        this.showNav();
        this.changeTheme('theme__dark');
    },
    dupliceren: function () {
        new Dupliceren({ 
            model: this.collection.get('dupliceren')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(7);
        this.showNav();
        this.changeTheme('theme__dark');
    },
    danken: function () {
        new Danken({ 
            model: this.collection.get('danken')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(8);
        this.showNav();
        this.changeTheme('theme__dark');
    },
    einde: function () {
        console.log('einde');
        new Einde({ 
            model: this.collection.get('einde')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(9);
        this.showNav();
        this.changeTheme('theme__dark');
    },
    start: function () {
        new Start({ 
            model: this.collection.get('start')
        }).render();
        Helpers.fixUrls($('#App'));

        this.setToActive(0);
        this.showNav();
        this.changeTheme();
    }
});

module.exports = Router;