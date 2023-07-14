import {
  CategoryItemProps,
} from '../../Types';

import {
  DirectoryItemContainer,
  BackgroundImage,
  DirectoryItemBody,
  LinkContainer,
  OpacityLayer,
} from './DirectoryItem.styles';

export function DirectoryItem({
  title,
  cta,
  imageUrl,
}: CategoryItemProps) {
  return (
    <DirectoryItemContainer data-testid='category'>
      <OpacityLayer />
      <BackgroundImage $imageurl={imageUrl || ''} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <LinkContainer to={`shop/${title}`}>
          <p>{cta}</p>
        </LinkContainer>
      </DirectoryItemBody>
    </DirectoryItemContainer>

  );
}
