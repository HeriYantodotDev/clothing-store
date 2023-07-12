import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import { CartItemsProps } from '../../Types';
import './CartItem.styles.scss';

export function CartItem({ cartItems }: CartItemsProps) {
  const { id, quantity } = cartItems;
  const { product } = useContext(ProductContext);
  const productItem = product?.filter(item => item.id === id);
  if (!productItem) {
    return;
  }
  const { name, price, imageUrl } = productItem[0];
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