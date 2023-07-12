import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';

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
  addCartItem: (idProductToAdd: number) => void,
  countItems: number,
}

export const CartContext = createContext<CartContextType>({
  cart: defaultCartValue,
  setCart: () => defaultCartValue,
  cartItems: [],
  addCartItem: () => {
    //default implementation
  },
  countItems: 0,
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


export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartType>(defaultCartValue);
  const [cartItems, setCartItems] = useState<CartItemsType[]>([]);
  const [countItems, setCountItems] = useState<number>(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);
    setCountItems(newCartCount);
  }, [cartItems]);

  function addCartItem(idProductToAdd: number) {
    setCartItems(generateAddCartItemArray(idProductToAdd, cartItems));
  }

  const value = {
    cart,
    setCart,
    cartItems,
    addCartItem,
    countItems,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

