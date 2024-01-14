import React, { createContext, useState } from "react";
import { PRODUCTS } from "../constants/Product";

export const Shopcontext = createContext();

export const ShopContextProvider = ({ children }) => {
  const getItems = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

  const [cartitems, setcartitems] = useState(getItems());

  const addtocart = itemid => {
    setcartitems(prev => ({ ...prev, [itemid]: prev[itemid] + 1 }));
  };
  const removefromcart = itemid => {
    setcartitems(prev => ({ ...prev, [itemid]: prev[itemid] - 1 }));
  };

  const updatecart = (amount, itemid) => {
    setcartitems(prev => ({ ...prev, [itemid]: amount }));
  };

  const subtotal = () => {
    let totalamount = 0;
    for (const item in cartitems) {
      if (cartitems[item] > 0) {
        let iteminfo = PRODUCTS.find(product => product.id === Number(item));
        totalamount += cartitems[item] * iteminfo.price;
      }
    }
    return totalamount;
  };
  const contextValue = {
    subtotal,
    updatecart,
    addtocart,
    cartitems,
    removefromcart,
  };

  return (
    <Shopcontext.Provider value={contextValue}>{children}</Shopcontext.Provider>
  );
};
