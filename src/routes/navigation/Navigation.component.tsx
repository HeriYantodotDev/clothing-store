import {
  Fragment,
  useContext,
} from 'react';
import { Link, Outlet } from 'react-router-dom';

import { NavigationItem, NavigationProps } from '../../Types';

import { defaultNavigationArray } from './defaultValue';

import shopLogo from '../../assets/loud.jpg';

import { UserContext } from '../../context/user.context';
import { CartContext } from '../../context/cart.context';

import { signOutUser } from '../../services/firebase/firebase.auth';

import { CartIcon } from '../../components/CartIcon/CartIcon.component';
import { CartDropDown } from '../../components/CartDropDown/CartDropDown.component';

import {
  NavigationContainer,
  LinkContainer,
  Logocontainer,
  LogoText,
} from './Navigation.styles';

const brandName = 'Cool Store';

export function NavLink({
  path,
  label,
  onClick,
}: NavigationItem) {
  return (
    <li onClick={onClick} className='nav-item ml-5' data-testid='navlink'>
      <Link className='nav-link text-light' to={path}>
        {label}
      </Link>
    </li>
  );
}

export function Navigation({
  navigationArray = defaultNavigationArray,
}: NavigationProps) {

  const { currentUser } = useContext(UserContext);
  const { cart, setCart, countItems } = useContext(CartContext);

  function handleCartIconClick() {
    setCart({
      ...cart,
      toogleOpen: !cart.toogleOpen,
    });
  }

  return (
    <Fragment>
      <NavigationContainer data-testid='navigation'>
        <LinkContainer to='/'>
          <Logocontainer src={shopLogo} alt='shopLogo' data-testid='logo' />
          <LogoText>{brandName}</LogoText>
        </LinkContainer>

        <button className='navbar-toggler'
          type='button' data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul id='navBar' className='navbar-nav mr-auto' data-testid='navGroup'>
            {navigationArray.map(({ path, label }) => (
              <NavLink key={path} path={path} label={label} />
            ))}
          </ul>

          <ul id='authNavBar' className='navbar-nav ml-auto' data-testid='authNavGroup'>
            {
              currentUser ? (
                <NavLink onClick={signOutUser} key='signout' path='/' label='Sign Out' />
              ) : (
                <NavLink key='signin' path='auth' label='Sign In' />
              )
            }
            <CartIcon onClick={handleCartIconClick} countItems={countItems} />
          </ul>
          {
            cart.toogleOpen && (
              <CartDropDown />
            )
          }
        </div>

      </NavigationContainer>

      <Outlet data-testid='outlet' />

    </Fragment>
  );
}