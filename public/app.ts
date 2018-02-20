'use strict';
const learnjs = new class Learnjs {
  constructor () {}
  showView () {
    const problemView = $('<div class="problem-view">').text('Coming soon!');
    $('.view-container').empty().append(problemView);
  }
};
