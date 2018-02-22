'use strict';
class Learnjs {
    constructor() {
        this.template = null;
    }
    problemView(problemNumber) {
        const view = this.template.querySelector('.problem-view').cloneNode(true);
        view.querySelector('.title').textContent = `Problem #${problemNumber} Coming soon!`;
        return view;
    }
    showView(hash) {
        const routes = {
            '#problem': this.problemView,
        };
        const hashParts = hash.split('-');
        const viewFn = routes[hashParts[0]];
        if (viewFn) {
            $('.view-container').empty().append(viewFn.call(this, hashParts[1]));
        }
    }
    appOnReady() {
        const self = this;
        this.template = document.querySelector('.templates');
        this.showView(window.location.hash);
        window.addEventListener('hashchange', (e) => {
            e.preventDefault();
            this.showView.call(self, window.location.hash);
        });
    }
}
const learnjs = new Learnjs();
