import CATEGORY_ACTION_TYPES from './category.actionTypes';
import { ShopData } from '../../__seedData__/shopData.ts';

export function setCategories(categories: ShopData[]) {
  return {
    type: CATEGORY_ACTION_TYPES.SET_CATEGORIES,
    payload: categories,
  };
}

export function placeholder() {
  return 'just Place holder';
}
