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
}

export type NavigationProps = {
  navigationArray?: NavigationItem[];
}

export interface FormFields {
  displayName: string;
  email: string;
  password: string;
  confirmPassword: string;
}