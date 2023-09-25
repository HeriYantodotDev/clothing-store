/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { CheckoutItemProps } from '../../Types';

import './CheckoutItem.styles.scss';

import { findProductItem } from '../../context/cart.helper';

import { selectCategories } from '../../store/category/category.selector';
import { selectCartItems } from '../../store/cart/cart.selector';
import {
  addCartItem,
  subtractCartItem,
  removeCartItem,
} from '../../store/cart/cart.action';

export default function CheckoutItem({
  cartItems,
  index,
  category,
}: CheckoutItemProps) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const allCartItems = useSelector(selectCartItems);
  const { id, quantity } = cartItems;
  const productItem = findProductItem(categories, cartItems);
  const { name, price, imageUrl } = productItem ?? {};

  function addIdProductToCart() {
    dispatch(addCartItem(allCartItems, id, category));
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

  function subtractIdProductFromCart() {
    if (quantity === 1) {
      toast.warning(
        `The quantity of item "${name}" is already one.
      Click remove if you'd like to remove this item from the cart.`,
        {
          position: 'bottom-right',
          autoClose: 5000,
          theme: 'light',
          icon: '⚠️',
        }
      );
      return;
    }

    dispatch(subtractCartItem(allCartItems, id));
    toast.info(`One item "${name}" is subtracted from the cart.`, {
      position: 'bottom-right',
      autoClose: 5000,
      theme: 'light',
      icon: '🙏',
    });
  }

  function removeIdProductFromCart() {
    dispatch(removeCartItem(allCartItems, id));
    toast.warning(`The Item "${name}" has been removed from the cart.`, {
      position: 'bottom-right',
      autoClose: 5000,
      theme: 'light',
      icon: '📝',
    });
  }

  return (
    <tr>
      <th className="centered-td">{index || null}</th>
      <td className="centered-td">
        <img alt="product" src={imageUrl} />
      </td>
      <td className="centered-td">{name}</td>
      <td className="centered-td">
        <span className="change-quantity" onClick={subtractIdProductFromCart}>
          &#10094;
        </span>
        <span className="ml-2 mr-2">{quantity}</span>
        <span className="change-quantity" onClick={addIdProductToCart}>
          &#10095;
        </span>
      </td>
      <td className="centered-td">
        <span>{price}</span>
      </td>
      <td className="centered-td remove-button">
        <span onClick={removeIdProductFromCart}>x</span>
      </td>
    </tr>
  );
}
