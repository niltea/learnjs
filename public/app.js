'use strict';
var learnjs = new /** @class */ (function () {
    function Learnjs() {
    }
    Learnjs.prototype.problemView = function (hash) {
        return $('<div class="problem-view">').text('Coming soon!');
    };
    Learnjs.prototype.showView = function (hash) {
        var routes = {
            '#problem-1': learnjs.problemView,
        };
        var viewFn = routes[hash];
        if (viewFn) {
            $('.view-container').empty().append(viewFn());
        }
    };
    return Learnjs;
}());
