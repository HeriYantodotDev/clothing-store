import {
  CategoryItemProps,
} from '../../Types';

import './CategoryItem.styles.scss';

export function CategoryItem({
  title,
  cta,
  imageUrl,
}: CategoryItemProps) {
  return (
    <div className='category-container' data-testid='category'>
      <div className='opacity-layer'></div>
      <div
        className='background-image'
        style={
          { backgroundImage: `url(${imageUrl})` }
        }
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>{cta}</p>
      </div>
    </div>
  );
}


// ### Aguan


// ### Budi