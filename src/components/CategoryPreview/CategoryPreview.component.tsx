import { Link } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard.component';
import { CategoryPreviewProps } from '../../Types';

import './CategoryPreview.styles.scss';

export default function CategoryPreview({ category }: CategoryPreviewProps) {
  return (
    <div className="category-preview-container">
      <Link className="link-container" to={category.title}>
        <h2 className="title">{category.title.toLowerCase()}</h2>
      </Link>
      <div className="products-container">
        {category.items
          .filter((_, idx) => idx < 3)
          .map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              category={category.title}
            />
          ))}
      </div>
    </div>
  );
}
