import { createSelector } from 'reselect';
import { store } from '../store';
import { findProductItem } from '../../context/cart.helper';

export function selectCartReducer(state: ReturnType<typeof store.getState>) {
  return state.cart;
}

export const selectCartItems = createSelector([selectCartReducer], (cart) => {
  return cart.cartItems;
});

export const selectIsCartOpen = createSelector([selectCartReducer], (cart) => {
  return cart.cart.toogleOpen;
});

export const selectCartCount = createSelector(
  [selectCartItems],
  (cartItems) => {
    return cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => {
    const { categories } = store.getState();
    return cartItems.reduce((acc, curr) => {
      const productItem = findProductItem(categories.categories, curr);
      if (!productItem) {
        return 0;
      }
      return acc + curr.quantity * productItem.price;
    }, 0);
  }
);
