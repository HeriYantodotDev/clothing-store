import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react';

import { getCategoriesAndDocuments } from '../services/firebase/db/categories.db';

import { ShopData } from '../__seedData__/shopData';

export type CategoriesType = ShopData;

type CategoriesContextType = {
  categories: CategoriesType[] | null,
  setCategories: Dispatch<SetStateAction<CategoriesType[] | null>>
}

type CategoriesProviderProps = {
  children: ReactNode
}

export const CategoriesContext = createContext<CategoriesContextType>({
  categories: null,
  setCategories: () => null,
});

export function CategoriesProvider({ children }: CategoriesProviderProps) {
  const [categories, setCategories] = useState<CategoriesType[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const categoriesData = await getCategoriesAndDocuments();
      setCategories(categoriesData);
    }

    fetchData();
  }, []);

  const value = {
    categories,
    setCategories,
  };

  return (
    <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
  );

}
