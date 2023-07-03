import Home from './routes/home/Home.component';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './routes/navigation/Navigation.component';


const Shop = () => {
  return (
    <div>
      <h1>I'm a shop page</h1>
    </div>
  );
};

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}