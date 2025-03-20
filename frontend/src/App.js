import './App.css';
import Navbar from "./components/Navbar/navbar.jsx"; // ✅ Ensure correct capitalization
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/LoginSignup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/PS4' element={<ShopCategory category="PS4" />} />
        <Route path='/Xbox' element={<ShopCategory category="Xbox" />} />
        <Route path='/Accessories' element={<ShopCategory category="Accessories" />} />
        <Route path="/product/:productID" element={<Product />} /> {/* ✅ Fixed dynamic route */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
