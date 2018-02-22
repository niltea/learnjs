'use strict';

class Learnjs {
  public template: HTMLElement = null;

  constructor() {
  }

  problemView(problemNumber): Node {
    const view: Node = this.template.querySelector('.problem-view').cloneNode(true);
    (<HTMLElement>view).querySelector('.title').textContent = `Problem #${problemNumber} Coming soon!`;
    return view;
  }

  showView(hash): void {
    const routes = {
      '#problem': this.problemView,
    };
    const hashParts: string[] = hash.split('-');
    const viewFn = routes[hashParts[0]];

    if (viewFn) {
      $('.view-container').empty().append(viewFn.call(this, hashParts[1]));
    }
  }

  appOnReady() {
    const self = this;
    this.template = document.querySelector('.templates');
    this.showView(window.location.hash);
    // listen hash change event
    window.addEventListener('hashchange', (e) => {
      e.preventDefault();
      this.showView.call(self, window.location.hash);
    });
  }
}

const learnjs = new Learnjs();
