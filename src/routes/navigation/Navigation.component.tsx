import { Fragment } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as LogoShop } from '../../assets/shopLogo.svg';

import './Navigation.styles.scss';
import { NavigationItem, NavigationProps } from '../../Types';

import { defaultNavigationArray } from './defaultValue';

export function NavLink({
  path,
  label,
}: NavigationItem) {
  return (
    <div className='nav-links-container'>
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
      <div className='navigation'>
        <Link to='/' className='logo-container'>
          <LogoShop className='logo' />
        </Link>

        {navigationArray.map(({ path, label }) => (
          <NavLink key={path} path={path} label={label} />
        ))}

      </div>
      <Outlet />
    </Fragment>
  );
}