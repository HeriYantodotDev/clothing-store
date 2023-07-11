import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';

import SHOP_DATA from '../__seedData__/shopData.json';

export type ProductType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

type ProductContextType = {
  product: ProductType[] | null,
  setProduct: Dispatch<SetStateAction<ProductType[] | null>>
}

type ProductProviderProps = {
  children: ReactNode
}

export const ProductContext = createContext<ProductContextType>({
  product: null,
  setProduct: () => null,
});

export function ProductProvider({ children }: ProductProviderProps) {
  const [product, setProduct] = useState<ProductType[] | null>(null);

  useEffect(() => {
    console.log(SHOP_DATA);
    setProduct(SHOP_DATA);
  }, []);

  const value = {
    product,
    setProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );

}
