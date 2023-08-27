import { ReactNode } from 'react';
import { CartItemsType } from './context/cart.context';

import { ItemShopData, ShopData } from './__seedData__/shopData.ts';

export type CategoriesProps = {
  categoryList?: CategoryArray[];
  cta?: string;
  imageUrl?: string;
};

export type CategoryItemProps = {
  title: string;
  cta: string;
  imageUrl?: string;
};

export type CategoryArray = {
  id: number;
  title: string;
  imageUrl: string;
};

export type NavigationItem = {
  path: string;
  label: string;
  onClick?: () => void;
};

export type NavigationProps = {
  navigationArray?: NavigationItem[];
};

export interface FormFieldsSignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string;
}

export interface ErrorMessageSignUp {
  displayName: string | null;
  email: string | null;
  password: string | null;
  confirmPassword: string | null;
  [key: string]: string | null;
}

export interface FormFieldsSignIn {
  email: string;
  password: string;
  [key: string]: string;
}

export interface ErrorMessageAuth {
  email: string | null;
  password: string | null;
}

export interface FormInputTypes {
  label: string;
  errorMessage: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ButtonType {
  google: string;
  inverted: string;
  default: string;
  [key: string]: string;
}

export const BUTTON_TYPE_CLASSES: ButtonType = {
  google: 'google',
  inverted: 'inverted',
  default: 'default',
};

export interface ButtonProps {
  children: string | ReactNode;
  buttonType: string;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface ProductCardProps {
  product: ItemShopData;
  category: string;
}

export type CartIconProps = {
  onClick?: () => void;
  countItems: number;
};

export interface CartItemsProps {
  cartItems: CartItemsType;
  index?: number;
}

export interface CheckoutItemProps {
  cartItems: CartItemsType;
  index?: number;
  category: string;
}

export interface CategoryPreviewProps {
  category: ShopData;
}
