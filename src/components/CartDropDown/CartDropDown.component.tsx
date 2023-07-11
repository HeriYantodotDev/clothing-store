import './CartDropDown.styles.scss';
import { Button } from '../Button/Button.component';

export function CardDropDown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button buttonType={'default'}>GO TO CHECKOUT</Button>
      </div>
    </div>
  );
}