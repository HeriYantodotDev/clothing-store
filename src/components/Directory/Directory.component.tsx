import {
  defaultCategories,
  defaultCTA,
} from '../DirectoryItem/defaultValue';

import { CategoriesProps } from '../../Types';

import { DirectoryItem } from '../DirectoryItem/DirectoryItem.component';

import './Directory.styles.scss';

export function Directory({
  categoryList = defaultCategories,
  cta = defaultCTA,
}: CategoriesProps) {
  return (
    <div className='directory-container'>
      {categoryList.map(({ title, id, imageUrl }) => (
        <DirectoryItem key={id} title={title} cta={cta} imageUrl={imageUrl} />
      ))}
    </div>
  );
}
