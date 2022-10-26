import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | index-main', function (hooks) {
  setupRenderingTest(hooks);

  test('test index main component', async function (assert) {
    await render(hbs`<IndexMain></IndexMain>`);
    assert.dom('.main-div').exists();
    assert.dom('.main-div-img').exists();
    assert.dom('#main-img').exists();
    assert.dom('.main-div-text').exists();
    assert.dom('h2').hasText('Welcometo FORNO');
    assert.dom('p').hasText('Love At First Bite');
    assert.dom('.read-more-btn').exists();
  });
});
