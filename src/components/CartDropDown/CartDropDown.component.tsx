/* eslint-disable react/jsx-no-bind */
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { CartContext } from '../../context/cart.context';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropDown.styles';

export default function CartDropDown() {
  const { cartItems, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckoutHandler() {
    setCart(false);
    navigate('/checkout');
  }
  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItems={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler} buttonType="default">
        GO TO CHECKOUT
      </Button>
    </CartDropdownContainer>
  );
}
