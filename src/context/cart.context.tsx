import {
  createContext,
  ReactNode,
  useContext,
  useReducer,
} from 'react';

import { CategoriesContext } from './categories.context';

import { findProductItem } from './cart.helper';

export type CartType = {
  toogleOpen: boolean,
}

const defaultCartValue: CartType = {
  toogleOpen: false,
};

export type CartItemsType = {
  id: number,
  category: string,
  quantity: number,
}

type CartProviderProps = {
  children: ReactNode
}

type CartContextType = {
  cart: CartType,
  setCart: (bool: boolean) => void,
  cartItems: CartItemsType[],
  addCartItem: (idProduct: number, category: string) => void,
  subtractCartItem: (idProduct: number) => void,
  removeCartItem: (idProduct: number) => void,
  countItems: number,
  totalPrice: number,
}

export const CartContext = createContext<CartContextType>({
  cart: defaultCartValue,
  setCart: () => defaultCartValue,
  cartItems: [],
  addCartItem: () => {
    //default implementation
  },
  subtractCartItem: () => {
    //default implementation
  },
  removeCartItem: () => {
    //default implementation
  },
  countItems: 0,
  totalPrice: 0,
});

function generateAddCartItemArray(
  idProductToAdd: number,
  cartItems: CartItemsType[],
  category: string,
) {
  const index = cartItems.findIndex(item => item ? item.id === idProductToAdd : false);

  if (index === -1) {
    return [
      ...cartItems,
      {
        id: idProductToAdd,
        quantity: 1,
        category: category,
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
  cartItems: CartItemsType[],
) {
  const index = cartItems.findIndex(item => item ? item.id === idProductToSubtract : false);

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
  cartItems: CartItemsType[],
) {
  const updatedCartItems = cartItems.filter(item => item.id !== idProductToRemove);
  return updatedCartItems;
}

type CartStateType = {
  cart: CartType;
  cartItems: CartItemsType[];
  countItems: number;
  totalPrice: number;
}

type CartStateTypeWithoutCartToogle = Omit<CartStateType, 'cart'>

enum CART_ACTIONS_ENUM {
  SET_CART_ITEMS = 'SET_CART_ITEMS',
  SET_CART_TOOGLE = 'SET_CART_TOOGLE',
}

type CartActionTypeWithoutCartToogle = {
  type: CART_ACTIONS_ENUM;
  payload: CartStateTypeWithoutCartToogle,
}

type CartActionTypeWithCartToogleOnly = {
  type: CART_ACTIONS_ENUM,
  payload: boolean,
}

const INITIAL_CART_STATE: CartStateType = {
  cart: { toogleOpen: false },
  cartItems: [],
  countItems: 0,
  totalPrice: 0,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isCartStateTypeWithoutCartToogle(variable: any): variable is CartStateTypeWithoutCartToogle {
  return variable.cart === undefined;
}

type CartActionType =
  | CartActionTypeWithoutCartToogle
  | CartActionTypeWithCartToogleOnly;

function cartReducer(
  state: CartStateType,
  action: CartActionType,
): CartStateType {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTIONS_ENUM.SET_CART_ITEMS:
      if (!isCartStateTypeWithoutCartToogle(payload)) {
        throw new Error('payload is not of type CartStateTypeWithoutCartToogle');
      }
      return {
        ...state,
        ...payload,
      };

    case CART_ACTIONS_ENUM.SET_CART_TOOGLE:
      if (typeof payload !== 'boolean') {
        throw new Error('payload is not of type boolean');
      }
      return {
        ...state,
        cart: { toogleOpen: payload },
      };

    default:
      throw new Error(`unhandled type of ${type} in cart reducer. (hya)`);
  }
}

export function CartProvider({ children }: CartProviderProps) {
  const { categories } = useContext(CategoriesContext);

  const [state, dispatch] = useReducer(cartReducer, INITIAL_CART_STATE);

  const {
    cart,
    cartItems,
    countItems,
    totalPrice,
  } = state;


  function updateCartItemReducer(newCartItems: CartItemsType[]) {
    const newCountItems = generateNewCountItems(newCartItems);
    const newTotalPrice = generateNewTotalPrice(newCartItems);

    const payload: CartStateTypeWithoutCartToogle = {
      cartItems: newCartItems,
      countItems: newCountItems,
      totalPrice: newTotalPrice,
    };

    dispatch({
      type: CART_ACTIONS_ENUM.SET_CART_ITEMS,
      payload,
    });
  }

  function generateNewCountItems(newCartItems: CartItemsType[]) {
    return newCartItems.reduce((acc, curr) => acc + curr.quantity, 0);
  }

  function generateNewTotalPrice(newCartItems: CartItemsType[]) {
    return newCartItems.reduce((acc, curr) => {
      const productItem = findProductItem(categories, curr);
      if (!productItem) {
        return 0;
      }
      return acc + (curr.quantity * productItem.price);
    }, 0);
  }

  function setCart(bool: boolean) {
    dispatch({
      type: CART_ACTIONS_ENUM.SET_CART_TOOGLE,
      payload: bool,
    });
  }

  function addCartItem(idProduct: number, category: string) {
    const newCartItems = generateAddCartItemArray(idProduct, cartItems, category);
    updateCartItemReducer(newCartItems);
  }

  function subtractCartItem(idProduct: number) {
    const newCartItems = generateSubtractCartItemArray(idProduct, cartItems);
    updateCartItemReducer(newCartItems);
  }

  function removeCartItem(idProduct: number) {
    const newCartItems = generateRemoveCartItemArray(idProduct, cartItems);
    updateCartItemReducer(newCartItems);
  }

  const value = {
    cart,
    setCart,
    cartItems,
    addCartItem,
    subtractCartItem,
    removeCartItem,
    countItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

