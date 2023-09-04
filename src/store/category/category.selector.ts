import { store } from '../store';

export function selectCategories(state: ReturnType<typeof store.getState>) {
  return state.categories.categories;
}

export function placeHolder() {
  return 'justPlaceHolder';
}
