export type CategoriesProps = {
  categoryList?: CategoryArray[];
  cta?: string;
  imageUrl?: string;
};

export type CategoryItemProps = {
  title: string;
  cta: string;
  imageUrl?: string;
}

export type CategoryArray = {
  id: number;
  title: string;
  imageUrl: string;
};

export type NavigationItem = {
  path: string;
  label: string;
  onClick?: () => void;
}

export type NavigationProps = {
  navigationArray?: NavigationItem[];
}

export interface FormFieldsSignUp {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
  [key: string]: string
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

export interface FormInput {
  label: string;
  errorMessage: string | null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

import { ReactNode } from 'react';

export const BUTTON_TYPE_CLASSES: { [key: string]: string } = {
  google: 'google-sign-in',
  inverted: 'inverted',
  default: '',
};

export interface ButtonProps {
  children: string | ReactNode;
  buttonType: keyof typeof BUTTON_TYPE_CLASSES;
  onClick?: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

