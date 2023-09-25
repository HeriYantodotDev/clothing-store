import CART_ACTIONS_TYPES from './cart.actionTypes';

export type CartType = {
  toogleOpen: boolean;
};

export type CartItemsType = {
  id: number;
  category: string;
  quantity: number;
};

type CartStateType = {
  cart: CartType;
  cartItems: CartItemsType[];
};

export type CartStateTypeWithoutCartToogle = Omit<CartStateType, 'cart'>;

type CartActionTypeWithoutCartToogle = {
  type: CART_ACTIONS_TYPES;
  payload: CartItemsType[];
};

type CartActionTypeWithCartToogleOnly = {
  type: CART_ACTIONS_TYPES;
  payload: boolean;
};

function isCartItemsTypeArray(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  variable: any
): variable is CartItemsType[] {
  return variable.cart === undefined;
}

type CartActionType =
  | CartActionTypeWithoutCartToogle
  | CartActionTypeWithCartToogleOnly;

export const INITIAL_CART_STATE: CartStateType = {
  cart: { toogleOpen: false },
  cartItems: [],
};

export function cartReducer(
  // eslint-disable-next-line @typescript-eslint/default-param-last
  state: CartStateType = INITIAL_CART_STATE,
  action: CartActionType
): CartStateType {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_TYPES.SET_CART_ITEMS:
      if (!isCartItemsTypeArray(payload)) {
        throw new Error(
          '[HYA]payload is not of type CartStateTypeWithoutCartToogle'
        );
      }
      return {
        ...state,
        cartItems: payload,
      };

    case CART_ACTIONS_TYPES.SET_CART_TOOGLE:
      if (typeof payload !== 'boolean') {
        throw new Error('[HYA]payload is not of type boolean');
      }
      return {
        ...state,
        cart: { toogleOpen: payload },
      };

    default:
      return state;
  }
}
