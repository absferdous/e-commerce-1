import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Signin from "../pages/Signin";
import About from "../pages/About";
import Navbar from "../components/Navbar";
import { ShopContextProvider } from "../context/shopcontext";
import Cart from "../components/Cart";
import Checkout from "../pages/Checkout";
import Footer from "../pages/Footer";
import ProductDetails from "../pages/ProductDetails";
import Product from "../components/Product";

export const Index = () => {
  return (
    <div>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/sign-in' element={<Signin />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/check-out' element={<Checkout />}></Route>
            <Route path='/details' element={<ProductDetails />}></Route>
            {/* <Route path='/shop' element={<Product />}></Route> */}
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShopContextProvider>
    </div>
  );
};

export default Index;
