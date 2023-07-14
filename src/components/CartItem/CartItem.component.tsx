import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import { CartItemsProps } from '../../Types';
import './CartItem.styles.scss';

import { findProductItem } from '../../context/cart.helper';

export function CartItem({ cartItems }: CartItemsProps) {
  const { quantity } = cartItems;
  const { categories } = useContext(CategoriesContext);
  const productItem = findProductItem(categories, cartItems);
  if (!productItem) {
    return;
  }
  const { name, price, imageUrl } = productItem;
  return (
    <div className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{quantity} x ${price}</span>
      </div>
    </div>
  );
}