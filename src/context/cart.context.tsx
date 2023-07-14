import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
  useContext,
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
  setCart: Dispatch<SetStateAction<CartType>>,
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



export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartType>(defaultCartValue);
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);
  const [countItems, setCountItems] = useState<number>(0);
  const [totalPrice, settotalPrice] = useState<number>(0);
  const { categories } = useContext(CategoriesContext);


  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setCountItems(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice = cartItems.reduce((acc, curr) => {
      // const category = categories?.find(item => item.title === curr.category);
      // const productItem = category?.items.find(item => item.id == curr.id);

      const productItem = findProductItem(categories, curr);

      if (!productItem) {
        return 0;
      }
      return acc + (curr.quantity * productItem.price);
    }, 0);
    settotalPrice(newTotalPrice);
  }, [cartItems, categories]);

  function addCartItem(idProduct: number, category: string) {
    setCartItems(generateAddCartItemArray(idProduct, cartItems, category));
  }

  function subtractCartItem(idProduct: number) {
    setCartItems(generateSubtractCartItemArray(idProduct, cartItems));
  }

  function removeCartItem(idProduct: number) {
    setCartItems(generateRemoveCartItemArray(idProduct, cartItems));
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

