var Helpers = {},
    $ = require('jquery');

Helpers.fixUrls = function (parent) {
    var Parent = parent || '', as;
    as = Parent.find('a');

    as.each(function () {
        var el = $(this), href = el.attr('href');
        if (href.indexOf('#') > -1) {
            el.attr('href', '#' + href.split('#')[1]);
        }
    });
};

module.exports = Helpers;