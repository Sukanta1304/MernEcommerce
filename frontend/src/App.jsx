import './App.css';
import UserNavbar from './components/UserNavbar';
import { Route, Routes } from 'react-router-dom';
import Register from './routes/Register';
import Home from './routes/Home';
import Login from './routes/Login';
import Mens from './routes/Mens';
import Womens from './routes/Womens';
import Kids from './routes/Kids';
import SingleProduct from './routes/SingleProduct';
import Cart from './routes/Cart';
import PrivateRoute from './hoc/PrivateRoute';
import Checkout from './routes/Checkout';
import MyProfile from './routes/myProfile';
import Seller from './routes/seller/Seller';
import SellerLogin from './routes/seller/SellerLogin';
import SellerRegister from './routes/seller/SellerRegister';

function App() {
  return (
    <div>
      <UserNavbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/mens' element={<Mens/>}/>
        <Route path='/womens' element={<Womens/>}/>
        <Route path='/kids' element={<Kids/>}/>
        <Route path="/product/:id" element={<SingleProduct/>}/>
        <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>}/>
        <Route path="/checkout" element={<PrivateRoute><Checkout/></PrivateRoute>}/>
        <Route path="/myprofile" element={<PrivateRoute><MyProfile/></PrivateRoute>}/>
        <Route path='/seller' element={<Seller/>}/>
        <Route path='/sellerSignin' element={<SellerLogin/>}/>
        <Route path='/sellerSignup' element={<SellerRegister/>}/>
      </Routes>
    </div>
  );
}

export default App;
