/* eslint-disable react/jsx-no-bind */
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Button from '../Button/Button.component';
import CartItem from '../CartItem/CartItem.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './CartDropDown.styles';

export default function CartDropDown() {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const navigate = useNavigate();
  function goToCheckoutHandler() {
    dispatch(setIsCartOpen(false));
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
