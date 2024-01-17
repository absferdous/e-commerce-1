import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";

import About from "../pages/About";
import Navbar from "../components/Navbar";
import { ShopContextProvider } from "../context/shopcontext";
import Cart from "../components/Cart";
import Checkout from "../pages/Checkout";
import Footer from "../pages/Footer";
import ProductDetails from "../pages/ProductDetails";

import Shop from "../pages/Shop";

export const Index = () => {
  return (
    <div>
      <ShopContextProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/shop' element={<Shop />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/check-out' element={<Checkout />}></Route>
            <Route path='/details' element={<ProductDetails />}></Route>
            {/* <Route path='/shop' element={<Product />}></Route> */}
          </Routes>
          <Footer />
        </HashRouter>
      </ShopContextProvider>
    </div>
  );
};

export default Index;
