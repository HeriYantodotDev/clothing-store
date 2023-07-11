import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Route, MemoryRouter, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { Navigation, NavLink } from '../routes/navigation/Navigation.component';
import { defaultNavigationArray } from '../routes/navigation/defaultValue';

import { NavigationProps, NavigationItem } from '../Types';

function setup(jsx: JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('Navigation & NavLink Component', () => {
  const customNavigationArray: NavigationItem[] = [
    {
      path: 'home',
      label: 'Home',
    },
    {
      path: 'okay',
      label: 'Okay',
    },
    {
      path: 'simple',
      label: 'Simple',
    },
    {
      path: 'phone',
      label: 'Phone',
    },
    {
      path: 'business',
      label: 'Business',
    },
  ];

  const NavigationTest = ({ navigationArray }: NavigationProps) => {
    return (
      <BrowserRouter>
        <Navigation navigationArray={navigationArray} />
      </BrowserRouter>
    );
  };

  const NavLinkTest = ({ path, label }: NavigationItem) => {
    return (
      <BrowserRouter>
        <NavLink path={path} label={label} />
      </BrowserRouter>
    );
  };

  describe('NavLink Component', () => {
    test('returns Nav-Link component without error', () => {
      render(
        <NavLinkTest
          path={defaultNavigationArray[0].path}
          label={defaultNavigationArray[0].label}
        />);

      const navLinkElement = screen.getByTestId('navlink');
      expect(navLinkElement).toBeInTheDocument();
    });

    test('returns label conrrectly', () => {
      render(
        <NavLinkTest
          path={defaultNavigationArray[0].path}
          label={defaultNavigationArray[0].label}
        />);

      const labelElement = screen.getByText(defaultNavigationArray[0].label);
      expect(labelElement).toBeInTheDocument();
    });

    test('redirects to the correct path', async () => {
      const { user } = setup(
        <NavLinkTest
          path={defaultNavigationArray[0].path}
          label={defaultNavigationArray[0].label}
        />,
      );

      await user.click(screen.getByText(defaultNavigationArray[0].label));
      expect(window.location.pathname).toBe(`/${defaultNavigationArray[0].path}`);
    });
  });

  describe('Navigation Component Without Argument', () => {
    test('renders Navigation component without error', () => {
      render(<NavigationTest />);
      const navigationElement = screen.getByTestId('navigation');
      expect(navigationElement).toBeInTheDocument();
    });

    test('renders the correct label & redirects to the correct path for all NavLink component', async () => {
      const { user } = setup(<NavigationTest />);
      const navGroup = screen.getByTestId('navGroup');
      const navigationElement = within(navGroup).getAllByTestId('navlink');

      for (const [index, nav] of navigationElement.entries()) {
        await user.click(nav.children[0]);
        expect(window.location.pathname).toBe(`/${defaultNavigationArray[index].path}`);
      }
    });
  });

  describe('Navigation Component With Argument', () => {
    test('renders Navigation component without error', () => {
      render(<NavigationTest navigationArray={customNavigationArray} />);
      const navigationElement = screen.getByTestId('navigation');
      expect(navigationElement).toBeInTheDocument();
    });

    test('renders the correct label & redirects to the correct path for all NavLink component', async () => {
      const { user } = setup(<NavigationTest navigationArray={customNavigationArray} />);
      const navGroup = screen.getByTestId('navGroup');
      const navigationElement = within(navGroup).getAllByTestId('navlink');

      for (const [index, nav] of navigationElement.entries()) {
        await user.click(nav.children[0]);
        expect(window.location.pathname).toBe(`/${customNavigationArray[index].path}`);
      }
    });
  });
});


/* To do: OutLet
*  Test that the correct navigation links are being rendered based on the navigationArray prop.
*/

describe('Navigation & Outlet', () => {
  const Home = () => {
    return (
      <div data-testid='home'>
        <h1>I'm a home page</h1>
      </div>
    );
  };

  const Shop = () => {
    return (
      <div data-testid='shop'>
        <h1>I'm a shop page</h1>
      </div>
    );
  };

  const Contact = () => {
    return (
      <div data-testid='contact'>
        <h1>I'm a contact page</h1>
      </div>
    );
  };

  const AppComponentExample = () => {
    return (
      <MemoryRouter initialEntries={['/']}>
        <Routes>
          <Route path='/' element={<Navigation />} >
            <Route index element={<Home />} />
            <Route path='shop' element={<Shop />} />
            <Route path='contact' element={<Contact />} />
          </Route>
        </Routes>
      </MemoryRouter>

    );
  };

  test('renders outlet when the root navLink is clicked', async () => {
    render(<AppComponentExample />);

    const outletElement = screen.getByTestId('home');

    expect(outletElement).toBeInTheDocument();
  });

  test('renders outlet in each routes when the navLink is clicked', async () => {
    const { user } = setup(<AppComponentExample />);

    const navGroup = screen.getByTestId('navGroup');
    const navigationElement = within(navGroup).getAllByTestId('navlink');

    for (const [index, nav] of navigationElement.entries()) {
      await user.click(nav.children[0]);
      //the data-testid is the same with the path for the default
      const outletElement = screen.getByTestId(defaultNavigationArray[index].path);
      expect(outletElement).toBeInTheDocument();
    }
  });
});

