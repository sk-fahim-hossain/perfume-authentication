import logo from './logo.svg';
import './App.css';
import Header from './conponent/Shared/Header/Header';
import Home from './conponent/Pages/Home/Home';
import Footer from './conponent/Shared/Footer/Footer';
import {Routes ,Route} from 'react-router-dom';
import Product from './conponent/Product/Product';
import Login from './conponent/Login/Login';
import Registration from './conponent/Registration/Registration';
import RequireAuth from './conponent/Login/RequireAuth';
import Cart from './conponent/Pages/Cart/Cart';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/registration" element={<Registration></Registration>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/cart" element={<RequireAuth>
          <Cart></Cart>
        </RequireAuth>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
