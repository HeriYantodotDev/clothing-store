import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { onAuthStateChangedListener } from './services/firebase/firebase.auth';
import { userSnapshotExists } from './services/firebase/db/users.db';

import Home from './routes/home/Home.component';
import { NavigationItem } from './Types';
import Authentication from './routes/authentication/Authentication.component';
import Navigation from './routes/navigation/Navigation.component';
import Footer from './components/Footer/Footer.component';
import Shop from './routes/shop/Shop.component';
import Checkout from './routes/checkout/Checkout.component';

import { setCurrentUser } from './store/user/user.action';

import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  return (
    <div className="text-center mt-4">
      <h1>Working In Progress 😎 </h1>
      <p>@HeriYantoDotDev</p>
    </div>
  );
}

const navigationArray: NavigationItem[] = [
  {
    path: 'shop',
    label: 'Shop',
  },
  {
    path: 'contact',
    label: 'Contact',
  },
];

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(async (user) => {
      try {
        if (user) {
          const userExists = await userSnapshotExists(user);
          if (userExists) {
            dispatch(setCurrentUser(user));
          }
        }
        // This is just a note for updating the state after logout.
        // if (user === null) {
        //   dispatch(setCurrentUser(null));
        // }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.log(err);
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Navigation navigationArray={navigationArray} />}
          >
            <Route index element={<Home />} />
            <Route path="shop/*" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="auth" element={<Authentication />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}
