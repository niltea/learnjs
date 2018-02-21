let fixture = null;

function loadFixture(path) {
  let html = null;
  jQuery.ajax({
    url: '../index.html',
    success(result) {
      html = result;
    },
    async: false,
  });
  return $.parseHTML(html);
}

function resetFixture() {
  if (!fixture) {
    const index = $('<div>').append(loadFixture('/index.html'));
    const markup = index.find('div.markup');
    fixture = $('<div class="fixture" style="display: none">').append(markup);
    $('body').append(fixture.clone());
  } else {
    $('.fixture').replaceWith(fixture.clone());
  }
}

beforeEach(() => {
  resetFixture();
});
