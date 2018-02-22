'use strict';
class Learnjs {
  constructor() {
  }

  public static problemView(problemNumber):JQuery {
    return $('<div class="problem-view">').text(`Problem #${problemNumber} Coming soon!`);
  }

  public static showView(hash) {
    const routes = {
      '#problem': Learnjs.problemView,
    };
    const hashParts = hash.split('-');
    const viewFn = routes[hashParts[0]];

    if (viewFn) {
      $('.view-container').empty().append(viewFn(hashParts[1]));
    }
  }

  appOnReady() {
    Learnjs.showView(window.location.hash);

    window.addEventListener('hashchange', (e) => {
      e.preventDefault();
      Learnjs.showView(window.location.hash);
    });
  }
}

const learnjs = new Learnjs();
