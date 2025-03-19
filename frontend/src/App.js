import './App.css';
import Navbar from "./components/Navbar/Navbar.jsx"; // ✅ Ensure correct capitalization
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import shop from './pages/Shop.jsx';
import shopCategory from './pages/ShopCategory.jsx';
import product from './pages/Product.jsx';
import cart from './pages/Cart.jsx';
import login from './pages/LoginSignup.jsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<shop />} />
        <Route path='/PS4' element={<shopCategory category="PS4" />} />
        <Route path='/Xbox' element={<shopCategory category="Xbox" />} />
        <Route path='/Accessories' element={<shopCategory category="Accessories" />} />
        <Route path="/product/:productID" element={<product />} /> {/* ✅ Fixed dynamic route */}
        <Route path="/login" element={<login />} />
        <Route path="/cart" element={<cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
