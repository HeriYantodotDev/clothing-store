import { useSelector } from 'react-redux';
import { CartItemsProps } from '../../Types';
import { selectCategories } from '../../store/category/category.selector';
import './CartItem.styles.scss';

import { findProductItem } from '../../context/cart.helper';

export default function CartItem({ cartItems }: CartItemsProps) {
  const { quantity } = cartItems;
  const categories = useSelector(selectCategories);
  const productItem = findProductItem(categories, cartItems);

  if (!productItem) {
    return null;
  }
  const { name = '', price = 0, imageUrl = '' } = productItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={name} />
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
}
