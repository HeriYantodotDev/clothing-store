import { useSelector } from 'react-redux';
import CheckoutItem from '../../components/CheckoutItem/CheckoutItem.component';
import {
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';
import './Checkout.styles.scss';

export default function Checkout() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotal);

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped-columns text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
              <th scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, index) => (
              <CheckoutItem
                key={item.id}
                cartItems={item}
                index={index + 1}
                category={item.category}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="total">Total: ${totalPrice}</div>
    </div>
  );
}
