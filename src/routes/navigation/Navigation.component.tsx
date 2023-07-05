import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';

import './Navigation.styles.scss';
import { NavigationItem, NavigationProps } from '../../Types';

import { defaultNavigationArray } from './defaultValue';

import shopLogo from '../../assets/shopLogo.png';

export function NavLink({
  path,
  label,
}: NavigationItem) {
  return (
    <div className='nav-links-container' data-testid='navlink' >
      <Link to={path} className='nav-link'>
        {label}
      </Link>
    </div>
  );
}

export function Navigation({
  navigationArray = defaultNavigationArray,
}: NavigationProps) {
  return (
    <Fragment>
      <div className='navigation' data-testid='navigation'>
        <Link to='/' className='logo-container'>
          <img className='logo' src={shopLogo} alt='shopLogo' data-testid='logo' />
        </Link>

        {navigationArray.map(({ path, label }) => (
          <NavLink key={path} path={path} label={label} />
        ))}

      </div>
      <Outlet data-testid='outlet' />
    </Fragment>
  );
}