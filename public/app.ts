'use strict';
const learnjs = new class Learnjs {
  constructor () {}

  problemView (hash) {
    return $('<div class="problem-view">').text('Coming soon!');
  }

  showView (hash) {
    const routes = {
      '#problem-1': learnjs.problemView,
    };
    const viewFn = routes[hash];

    if(viewFn) {
      $('.view-container').empty().append(viewFn());
    }

  }
};
