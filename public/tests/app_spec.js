describe('LearnJS', () => {
  it('invokes the router when loaded', () => {
    spyOn(Learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.constructor.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', () => {
    spyOn(Learnjs, 'showView');
    learnjs.appOnReady();
    $(window).trigger('hashchange');
    expect(learnjs.constructor.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('can show a problem view', () => {
    learnjs.constructor.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });
  it('shows the landing page view when there is no hash', () => {
    learnjs.constructor.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
  it('passes the hash view parameter to the view function', () => {
    spyOn(Learnjs, 'problemView');
    learnjs.constructor.showView('#problem-42');
    expect(learnjs.constructor.problemView).toHaveBeenCalledWith('42');
  });
});

describe('problem view', () => {
  it('has a title that includes the problem number', () => {
    const view = learnjs.constructor.problemView('1');
    expect(view.text()).toEqual('Problem #1 Coming soon!');
  });
});
