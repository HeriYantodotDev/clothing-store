import { ShopData } from '../../__seedData__/shopData.ts';
import CATEGORY_ACTION_TYPES from './category.actionTypes';

type CategoryStateType = {
  categories: ShopData[] | null;
};

type CategoryActionType = {
  type: CATEGORY_ACTION_TYPES;
  payload: ShopData[];
};

export const CATEGORY_INITIAL_STATE: CategoryStateType = {
  categories: null,
};

export function categoryReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CategoryStateType = CATEGORY_INITIAL_STATE,
  action: CategoryActionType
) {
  const { type, payload } = action;
  switch (type) {
    case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
}
