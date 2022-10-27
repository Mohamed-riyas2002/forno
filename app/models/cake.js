import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class CakeModel extends Model {
  @attr title;
  @attr bakery;
  @attr city;
  @attr location;
  @attr category;
  @attr image;
  @attr price;
  @attr description;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
