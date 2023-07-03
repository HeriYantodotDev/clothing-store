import {
  defaultCategories,
  defaultCTA,
} from '../CategoryItem/defaultValue';

import { CategoriesProps } from '../../Types';

import { CategoryItem } from '../CategoryItem/CategoryItem.component';

import './Directory.styles.scss';

export function Directory({
  categoryList = defaultCategories,
  cta = defaultCTA,
}: CategoriesProps) {
  return (
    <div className='directory-container'>
      {categoryList.map(({ title, id, imageUrl }) => (
        <CategoryItem key={id} title={title} cta={cta} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
