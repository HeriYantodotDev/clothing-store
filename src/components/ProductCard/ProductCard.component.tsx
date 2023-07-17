import './ProductCard.styles.scss';
import { useContext } from 'react';

import { Button } from '../Button/Button.component';

import { ProductCardProps } from '../../Types';

import { toast } from 'react-toastify';

import { CartContext } from '../../context/cart.context';

export function ProductCard({ product, category }: ProductCardProps) {
  const { name, price, imageUrl, id } = product;
  const { addCartItem } = useContext(CartContext);

  function addIdProductToCart() {
    addCartItem(id, category);
    toast(`Congratulations! One item "${name}" is successfully added to the cart.`, {
      position: 'bottom-right',
      autoClose: 5000,
      theme: 'light',
      icon: '🛒',
    });
  }

  return (
    <div className='product-card-container' >
      <img src={imageUrl} alt={name + price} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <Button onClick={addIdProductToCart} buttonType='inverted'>
        Add to cart
      </Button>


    </div>
  );
}