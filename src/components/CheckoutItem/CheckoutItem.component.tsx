import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';
import { CartContext } from '../../context/cart.context';
import {
  CheckoutItemProps,
} from '../../Types';

import './CheckoutItem.styles.scss';

export function CheckoutItem({ cartItems, index }: CheckoutItemProps) {
  const { product } = useContext(ProductContext);
  const { id, quantity } = cartItems;
  const productItem = product?.filter(item => item.id === id);
  const { addCartItem, subtractCartItem, removeCartItem } = useContext(CartContext);

  function addIdProductToCart() {
    addCartItem(id);
  }

  function subtractIdProductFromCart() {
    subtractCartItem(id);
  }

  function removeIdProductFromCart() {
    removeCartItem(id);
  }

  if (!productItem) {
    console.log('Product Item error');
    return;
  }

  const { name, price, imageUrl } = productItem[0];
  return (
    <tr>
      <th className='centered-td'>{index ? index : null}</th>
      <td className='centered-td'>
        <img src={imageUrl} />
      </td>
      <td className='centered-td'>
        {name}
      </td>
      <td className='centered-td'>
        <span className='change-quantity' onClick={subtractIdProductFromCart}>&#10094;</span>
        <span className='ml-2 mr-2'>{quantity}</span>
        <span className='change-quantity' onClick={addIdProductToCart}>&#10095;</span>
      </td>
      <td className='centered-td'>
        <span>{price}</span>
      </td>
      <td className='centered-td remove-button'>
        <span onClick={removeIdProductFromCart}>x</span>
      </td>
    </tr>
  );
}