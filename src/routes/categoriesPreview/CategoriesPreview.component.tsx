import { useSelector } from 'react-redux';
import { selectCategories } from '../../store/category/category.selector';

import CategoryPreview from '../../components/CategoryPreview/CategoryPreview.component';

export default function CategoriesPreview() {
  const categories = useSelector(selectCategories);
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
