import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | cakes/image', function (hooks) {
  setupRenderingTest(hooks);
  test('it renders the given image', async function (assert) {
    await render(hbs`
      <Cakes :: Image
        src="assets/images/chocolate-birthday-cake.jpg"
        alt="main-img"
      />
    `);
    assert
      .dom('.image img')
      .exists()
      .hasAttribute(
        'src',
        'https://www.fnp.com/images/pr/l/v20200707214916/chocolate-caramel-fudge-cake_1.jpg'
      )
      .hasAttribute('alt', 'image of birthday cake');
  });
  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
    <Cakes :: Image
      src="assets/images/chocolate-birthday-cake.jpg"
      alt="main-img"
    />
  `);
    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
