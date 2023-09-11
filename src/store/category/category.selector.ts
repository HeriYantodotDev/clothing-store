import { createSelector } from 'reselect';
import { store } from '../store';

export function selectCategoryReducer(
  state: ReturnType<typeof store.getState>
) {
  return state.categories;
}

export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => {
    return categoriesSlice.categories;
  }
);
