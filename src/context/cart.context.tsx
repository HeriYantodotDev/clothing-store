import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
  useContext,
} from 'react';

import { ProductContext } from './product.context';

export type CartType = {
  toogleOpen: boolean,
}

const defaultCartValue: CartType = {
  toogleOpen: false,
};

export type CartItemsType = {
  id: number,
  quantity: number,
}

type CartProviderProps = {
  children: ReactNode
}

type CartContextType = {
  cart: CartType,
  setCart: Dispatch<SetStateAction<CartType>>,
  cartItems: CartItemsType[],
  addCartItem: (idProduct: number) => void,
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
) {
  const index = cartItems.findIndex(item => item ? item.id === idProductToAdd : false);

  if (index === -1) {
    return [
      ...cartItems,
      {
        id: idProductToAdd,
        quantity: 1,
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
  const { product } = useContext(ProductContext);


  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setCountItems(newCartCount);
  }, [cartItems]);

  useEffect(() => {

    const newTotalPrice = cartItems.reduce((acc, curr) => {
      const productItem = product?.filter(item => item.id === curr.id);
      if (!productItem) {
        return 0;
      }
      return acc + (curr.quantity * productItem[0].price);
    }, 0);
    settotalPrice(newTotalPrice);
  }, [cartItems, product]);

  function addCartItem(idProduct: number) {
    setCartItems(generateAddCartItemArray(idProduct, cartItems));
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

