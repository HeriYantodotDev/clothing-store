import CART_ACTIONS_TYPES from './cart.actionTypes';
import { CartItemsType } from './cart.reducer';

function generateAddCartItemArray(
  idProductToAdd: number,
  cartItems: CartItemsType[],
  category: string
) {
  const index = cartItems.findIndex((item) =>
    item ? item.id === idProductToAdd : false
  );

  if (index === -1) {
    return [
      ...cartItems,
      {
        id: idProductToAdd,
        quantity: 1,
        category,
      },
    ];
  }

  const updatedCartItems = [...cartItems];
  updatedCartItems[index] = {
    ...updatedCartItems[index],
    quantity: updatedCartItems[index].quantity + 1,
  };

  return updatedCartItems;
}

function generateSubtractCartItemArray(
  idProductToSubtract: number,
  cartItems: CartItemsType[]
) {
  const index = cartItems.findIndex((item) =>
    item ? item.id === idProductToSubtract : false
  );

  if (index === -1 || cartItems[index].quantity <= 1) {
    return cartItems;
  }

  const updatedCartItems = [...cartItems];
  updatedCartItems[index] = {
    ...updatedCartItems[index],
    quantity: updatedCartItems[index].quantity - 1,
  };

  return updatedCartItems;
}

function generateRemoveCartItemArray(
  idProductToRemove: number,
  cartItems: CartItemsType[]
) {
  const updatedCartItems = cartItems.filter(
    (item) => item.id !== idProductToRemove
  );
  return updatedCartItems;
}

export function setIsCartOpen(toogleOpen: boolean) {
  return {
    type: CART_ACTIONS_TYPES.SET_CART_TOOGLE,
    payload: toogleOpen,
  };
}

export function addCartItem(
  cartItems: CartItemsType[],
  idProduct: number,
  category: string
) {
  const newCartItems = generateAddCartItemArray(idProduct, cartItems, category);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
}

export function subtractCartItem(
  cartItems: CartItemsType[],
  idProduct: number
) {
  const newCartItems = generateSubtractCartItemArray(idProduct, cartItems);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
}

export function removeCartItem(cartItems: CartItemsType[], idProduct: number) {
  const newCartItems = generateRemoveCartItemArray(idProduct, cartItems);
  return {
    type: CART_ACTIONS_TYPES.SET_CART_ITEMS,
    payload: newCartItems,
  };
}
