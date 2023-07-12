import './ProductCard.styles.scss';
import { useContext } from 'react';

import { Button } from '../Button/Button.component';

import { ProductCardProps } from '../../Types';

import { CartContext } from '../../context/cart.context';

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl, id } = product;
  const { addCartItem } = useContext(CartContext);

  function addIdProductToCart() {
    addCartItem(id);
  }

  return (
    <div className='product-card-container'>
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