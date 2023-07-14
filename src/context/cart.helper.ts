import { ShopData } from '../__seedData__/shopData';

export type CartItemsType = {
  id: number,
  category: string,
  quantity: number,
}

export function findProductItem(categories: ShopData[] | null, cartItem: CartItemsType) {
  const category = categories?.find(item => item.title.toLowerCase() === cartItem.category.toLowerCase());
  const productItem = category?.items.find(item => item.id == cartItem.id);
  return productItem;
}