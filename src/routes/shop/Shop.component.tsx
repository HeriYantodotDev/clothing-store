import { useContext } from 'react';
import { ProductContext } from '../../context/product.context';

import { ProductCard } from '../../components/ProductCard/ProductCard.component';

import './Shop.styles.scss';

export function Shop() {
  const { product } = useContext(ProductContext);
  if (!product) {
    return;
  }

  return (
    <div className='products-container'>
      {
        product.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      }
    </div>

  );
}