'use strict';
interface Problem {
  description: string;
  code       : string;
}
class Learnjs {
  public template: HTMLElement = null;
  public problems: Problem[] = [
    {
      description: 'What is truth?',
      code: 'function problem() { return __; }',
    },
    {
      description: 'Simple Math',
      code: 'function problem() { return 42 === 6 * __; }',
    },
  ];

  constructor() {
  }

  // data binding
  static applyObject (obj, elem) {
    Object.keys(obj).forEach((key) => {
      elem.querySelector(`[data-name="${key}"]`).textContent = obj[key];
    })
  }

  problemView(data): Node {
    const problemNumber = parseInt(data, 10);

    const view: Node = this.template.querySelector('.problem-view').cloneNode(true);
    (<HTMLElement>view).querySelector('.title').textContent = `Problem #${problemNumber} Coming soon!`;
    Learnjs.applyObject(this.problems[problemNumber - 1], view);
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
