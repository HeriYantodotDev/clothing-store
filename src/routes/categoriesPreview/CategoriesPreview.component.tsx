import { useContext, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';

import { CategoryPreview } from '../../components/CategoryPreview/CategoryPreview.component';

export function CategoriesPreview() {
  const { categories } = useContext(CategoriesContext);
  if (!categories) {
    return;
  }

  return (
    <Fragment>
      {
        categories.map((category) => (
          <CategoryPreview key={category.title + '1'} category={category} />
        ))
      }
    </Fragment>
  );
}
