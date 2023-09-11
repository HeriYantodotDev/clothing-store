import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ItemShopData } from '../../__seedData__/shopData.ts';

import ProductCard from '../../components/ProductCard/ProductCard.component';

import './Category.styles.scss';
import { selectCategories } from '../../store/category/category.selector';

export default function Category() {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const [products, setProducts] = useState<ItemShopData[]>([]);
  console.log('render/re-rendering category component');

  useEffect(() => {
    console.log('effect firing calling setProducts');
    const productList = categories?.find(
      (item) => item.title.toLowerCase() === category?.toLocaleLowerCase()
    );
    if (!productList) {
      return;
    }
    setProducts(productList.items);
  }, [category, categories]);

  return (
    <div className="category-outer-container">
      <h2 className="text-center title">{category?.toLowerCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category || ''}
            />
          ))}
      </div>
    </div>
  );
}
