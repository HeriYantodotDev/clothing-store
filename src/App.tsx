import Home from './routes/home/Home.component';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { NavigationItem } from './Types';
import { Authentication } from './routes/authentication/Authentication.component';
import { Navigation } from './routes/navigation/Navigation.component';
import { Footer } from './components/Footer/Footer.component';
import { Shop } from './routes/shop/Shop.component';
import { Checkout } from './routes/checkout/Checkout.component';

import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  return (
    <div className='text-center mt-4'>
      <h1>Working In Progress 😎 </h1>
      <p>@HeriYantoDotDev</p>
    </div>
  );
};

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

  return (
    <div>
      <div className='content'>
        <Routes >
          <Route path='/' element={<Navigation navigationArray={navigationArray} />} >
            <Route index element={<Home />} />
            <Route path='shop/*' element={<Shop />} />
            <Route path='contact' element={<Contact />} />
            <Route path='auth' element={<Authentication />} />
            <Route path='checkout' element={<Checkout />} />
          </Route>
        </Routes>
      </div>
      <ToastContainer />
      <Footer />
    </div>
  );
}