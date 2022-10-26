import { module, test } from 'qunit';
import { click, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | forno', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.equal(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h2').hasText('Welcometo FORNO');

    assert.dom('.main-div-text button.read-more-btn').hasText('Read more');
    await click('.main-div-text button.read-more-btn');

    assert.equal(currentURL(), '/about');
  });
  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.equal(currentURL(), '/about');
    assert.dom('p').hasText('Riyas');
  });
  test('navigating using the nav-bar', async function (assert) {
    await visit('/');
    assert.dom('nav').exists();
    assert.dom('.logo .web-logo').exists();
    assert.dom('#ul-2 a.home').hasText('Home');
    assert.dom('#ul-2 a.about').hasText('About');
    assert.dom('#ul-2 a.contact').hasText('Contact');

    await click('nav #ul-2 a.about');
    assert.equal(currentURL(), '/about');

    await click('nav #ul-2 a.contact');
    assert.equal(currentURL(), '/contact');

    await click('nav #ul-2 a.home');
    assert.equal(currentURL(), '/');
  });
});
