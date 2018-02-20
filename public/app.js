'use strict';
var learnjs = new /** @class */ (function () {
    function Learnjs() {
    }
    Learnjs.prototype.showView = function () {
        var problemView = $('<div class="problem-view">').text('Coming soon!');
        $('.view-container').empty().append(problemView);
    };
    return Learnjs;
}());
