import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';

import { ItemShopData } from '../../__seedData__/shopData.ts';

import ProductCard from '../../components/ProductCard/ProductCard.component';

import './Category.styles.scss';

export default function Category() {
  const { category } = useParams();
  const { categories } = useContext(CategoriesContext);
  const [products, setProducts] = useState<ItemShopData[]>([]);

  useEffect(() => {
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
