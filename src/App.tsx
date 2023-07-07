import Home from './routes/home/Home.component';
import { Authentication } from './routes/authentication/Authentication.component';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation.component';
import { NavigationItem } from './Types';
import { Footer } from './components/Footer/Footer.component';


const Shop = () => {
  return (
    <div>
      <h1>I'm a shop page</h1>
    </div>
  );
};

const Contact = () => {
  return (
    <div>
      <h1>I'm a Contact page</h1>
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
            <Route path='shop' element={<Shop />} />
            <Route path='contact' element={<Contact />} />
            <Route path='auth' element={<Authentication />} />
          </Route>
        </Routes>
      </div>

      <Footer />
    </div>
  );
}