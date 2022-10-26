import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cakes', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders information about a rental property', async function (assert) {
    await render(hbs`<Cakes />`);
    assert.dom('article').hasClass('cakes');
    assert.dom('article h3').hasText('Birthday Cake');
    assert.dom('.bakery').hasText('Bakery : Forno');
    assert.dom('.bakery-location').hasText('Chennai');
    assert.dom('.cake-price').hasText('Rs.2000');
  });
});
