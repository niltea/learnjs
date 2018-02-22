describe('LearnJS', () => {
  it('invokes the router when loaded', () => {
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('subscribes to the hash change event', () => {
    spyOn(learnjs, 'showView');
    learnjs.appOnReady();
    $(window).trigger('hashchange');
    expect(learnjs.showView).toHaveBeenCalledWith(window.location.hash);
  });

  it('can show a problem view', () => {
    learnjs.showView('#problem-1');
    expect($('.view-container .problem-view').length).toEqual(1);
  });
  it('shows the landing page view when there is no hash', () => {
    learnjs.showView('');
    expect($('.view-container .landing-view').length).toEqual(1);
  });
  it('passes the hash view parameter to the view function', () => {
    spyOn(learnjs, 'problemView');
    learnjs.showView('#problem-42');
    expect(learnjs.problemView).toHaveBeenCalledWith('42');
  });
});

describe('problem view', () => {
  let view = null;
  beforeEach(() => {
    view = $(learnjs.problemView('1'));
  });
  it('has a title that includes the problem number', () => {
    expect(view.find('.title').text()).toEqual('Problem #1 Coming soon!');
  });
  it('shows the description', () => {
    expect(view.find('[data-name="description"]').text()).toEqual('What is truth?');
  });
  it('shows the problem code', () => {
    expect(view.find('[data-name="code"]').text()).toEqual('function problem() { return __; }');
  });
});
