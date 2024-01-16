import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import { PRODUCTS } from "../constants/Product";
import { useNavigate } from "react-router-dom";
import CartItems from "./CartItems";

const Cart = () => {
  const navigate = useNavigate();
  const { subtotal, cartitems } = useContext(Shopcontext);
  const totalamount = subtotal();
  return (
    <div>
      {totalamount > 0 ? (
        <h1 className=' mt-10  max-sm:text-7xl text-[100px] text-center'>
          YOUR <br />
          <span className=' text-wrap px-4 mt-2  text-black font-extrabold'>
            ITEMS
          </span>
        </h1>
      ) : (
        <h1 className=' mt-10 max-sm:text-7xl text-[100px] text-center'>
          YOUR CART <br />
          <span className=' animate-ping text-wrap px-4 mt-2 bg-red-600 text-white font-extrabold'>
            IS EMPTY
          </span>
        </h1>
      )}
      {PRODUCTS.map(product => {
        if (cartitems[product.id] !== 0) {
          return (
            <div>
              <CartItems data={product} key={product.id} />
            </div>
          );
        }
      })}

      {totalamount > 0 && (
        <div
          className='shadow-2xl  mt-14 mb-4  text-black flex flex-col justify-center items-center h-[200px] 
       '
        >
          <h3 className=' text-6xl text-black'>
            SUB <span className='text-wrap px-4 mt-2  text-black '>TOTAL</span>
          </h3>
          <p className=' text-3xl font-montesrrat mt-4 border border-white py-7 px-5'>
            ${totalamount}
          </p>
          <div className=' flex gap-6'>
            <button
              className=' mt-2 mb-4 border shadow-2xl rounded px-4  bg-white  text-black '
              onClick={() => navigate("/")}
            >
              Continue shopping
            </button>
            <button
              onClick={() => navigate("/check-out")}
              className='mt-2 mb-4 border shadow-2xl rounded px-4  bg-[#FF0000] text-white '
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
