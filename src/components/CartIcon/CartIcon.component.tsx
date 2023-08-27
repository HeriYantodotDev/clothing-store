import { CartIconProps } from '../../Types';

import { CartIconContainer, ShoppingIcon, ItemCount } from './CartIcon.styles';

export default function CartIcon({ onClick, countItems }: CartIconProps) {
  return (
    <CartIconContainer onClick={onClick}>
      <ShoppingIcon />
      <ItemCount> {countItems}</ItemCount>
    </CartIconContainer>
  );
}
