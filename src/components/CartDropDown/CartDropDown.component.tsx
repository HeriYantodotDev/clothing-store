import { useContext } from 'react';
import { Button } from '../Button/Button.component';
import { CartItem } from '../CartItem/CartItem.component';
import { CartContext } from '../../context/cart.context';
import { useNavigate } from 'react-router-dom';
import './CartDropDown.styles.scss';

export function CardDropDown() {
  const { cartItems, setCart } = useContext(CartContext);
  const navigate = useNavigate();
  function goToCheckoutHandler() {
    setCart({
      toogleOpen: false,
    });
    navigate('/checkout');
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {
          cartItems.map(item => <CartItem key={item.id} cartItems={item} />)
        }
      </div>
      <Button onClick={goToCheckoutHandler} buttonType={'default'}>GO TO CHECKOUT</Button>
    </div>
  );
}