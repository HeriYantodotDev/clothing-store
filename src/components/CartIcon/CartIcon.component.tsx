/// <reference types="vite-plugin-svgr/client" />

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconProps } from '../../Types';

import './CartIcon.styles.scss';

export function CartIcon({ onClick }: CartIconProps) {
  return (
    <li onClick={onClick} className='cart-icon-container nav-item'>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>10</span>
    </li>
  );
}