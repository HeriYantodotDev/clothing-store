import { useContext } from 'react';
import { Button } from '../Button/Button.component';
import { CartItem } from '../CartItem/CartItem.component';
import { CartContext } from '../../context/cart.context';
import './CartDropDown.styles.scss';

export function CardDropDown() {
  const { cartItems } = useContext(CartContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} cartItems={item} />)
        }
      </div>
      <Button buttonType={'default'}>GO TO CHECKOUT</Button>
    </div>
  );
}