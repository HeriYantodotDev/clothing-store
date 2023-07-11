import './ProductCard.styles.scss';

import { Button } from '../Button/Button.component';

import { ProductCardProps } from '../../Types';

export function ProductCard({ product }: ProductCardProps) {
  const { name, price, imageUrl } = product;
  return (
    <div className='product-card-container'>
      <img src={imageUrl} alt={name + price} />
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>

      <Button buttonType='inverted'>
        Add to cart
      </Button>


    </div>
  );
}