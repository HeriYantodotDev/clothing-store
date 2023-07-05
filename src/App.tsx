import Home from './routes/home/Home.component';
import { SignIn } from './routes/signIn/SignIn.component';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation.component';
import { NavigationItem } from './Types';


const Shop = () => {
  return (
    <div>
      <h1>I'm a shop page</h1>
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
  {
    path: 'signin',
    label: 'SignIn',
  },
];

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation navigationArray={navigationArray} />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}