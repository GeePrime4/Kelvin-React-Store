import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Design from './Pages/Design'
import Home from './Pages/Home'
import Electronics from './Pages/Electronics'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Jewelery from './Pages/Jewelery'
import Cart from './Pages/Cart'
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from './Pages/Login';
import { UserProvider } from './components/userContext';
import { CartProvider } from './components/CartContext';
function App() {
  return (
    <CartProvider>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Design />}>
              <Route index element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/electronics" element={<Electronics />} />
              <Route path="/jewelery" element={<Jewelery />} />
              <Route path="/menscloth" element={<Mens />} />
              <Route path="/womenscloth" element={<Womens />} />
              <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </CartProvider>
  )
}

export default App
