/* eslint-disable react/jsx-no-bind */
import './ProductCard.styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import Button from '../Button/Button.component';

import { addCartItem } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { ProductCardProps } from '../../Types';

export default function ProductCard({ product, category }: ProductCardProps) {
  const dispatch = useDispatch();
  const { name, price, imageUrl, id } = product;
  const cartItems = useSelector(selectCartItems);

  function addIdProductToCart() {
    dispatch(addCartItem(cartItems, id, category));
    toast(
      `Congratulations! One item "${name}" is successfully added to the cart.`,
      {
        position: 'bottom-right',
        autoClose: 5000,
        theme: 'light',
        icon: '🛒',
      }
    );
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name + price} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

      <Button onClick={addIdProductToCart} buttonType="inverted">
        Add to cart
      </Button>
    </div>
  );
}
