import './App.css';
import Navbar from "./components/Navbar/navbar.jsx"; // ✅ Ensure correct capitalization
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop.jsx';
import ShopCategory from './pages/ShopCategory.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import Login from './pages/LoginSignup.jsx';
import Footer from './components/Footer/Footer.jsx';
import PS4_Banner from '../src/components/Assets/PS4-Banner.jpg';
import Xbox from '../src/components/Assets/xBox_banner.jpg';
import AccessoriesBanner from '../src/components/Assets/Accessories-Banner.jpg';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/PS4' element={<ShopCategory banner={PS4_Banner} category="PS4" />} />
        <Route path='/Xbox' element={<ShopCategory banner={Xbox} category="Xbox" />} />
        <Route path='/Accessories' element={<ShopCategory banner={AccessoriesBanner} category="Accessories" />} />
        <Route path="/product/:productID" element={<Product />} /> {/* ✅ Fixed dynamic route */}
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
