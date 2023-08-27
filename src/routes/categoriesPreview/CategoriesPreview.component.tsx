import { useContext } from 'react';
import { CategoriesContext } from '../../context/categories.context';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

export default function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);
  if (!categories) {
    return null;
  }

  return (
    <>
      {categories.map((category) => (
        <CategoryPreview key={`${category.title}1`} category={category} />
      ))}
    </>
  );
}
