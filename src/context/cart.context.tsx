import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export type CartType = {
  toogleOpen: boolean,
}

const defaultCartValue: CartType = {
  toogleOpen: false,
};

type CartContextType = {
  cart: CartType,
  setCart: Dispatch<SetStateAction<CartType>>,
}

type CartProviderProps = {
  children: ReactNode
}

export const CartContext = createContext<CartContextType>({
  cart: defaultCartValue,
  setCart: () => defaultCartValue,
});

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<CartType>(defaultCartValue);

  const value = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={value}>{children}</CartContext.Provider>
  );
}

