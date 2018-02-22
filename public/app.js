'use strict';
class Learnjs {
    constructor() {
        this.template = null;
        this.problems = [
            {
                description: 'What is truth?',
                code: 'function problem() { return __; }',
            },
            {
                description: 'Simple Math',
                code: 'function problem() { return 42 === 6 * __; }',
            },
        ];
    }
    static applyObject(obj, elem) {
        Object.keys(obj).forEach((key) => {
            elem.querySelector(`[data-name="${key}"]`).textContent = obj[key];
        });
    }
    problemView(data) {
        const problemNumber = parseInt(data, 10);
        const view = this.template.querySelector('.problem-view').cloneNode(true);
        view.querySelector('.title').textContent = `Problem #${problemNumber} Coming soon!`;
        Learnjs.applyObject(this.problems[problemNumber - 1], view);
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
