import React, { useContext } from "react";
import { useLocation, Link } from "react-router-dom";
import { Shopcontext } from "../context/shopcontext";
import { AiOutlineShoppingCart } from "react-icons/ai";

const ProductDetails = () => {
  const { addtocart, cartitems, subtotal, counter } = useContext(Shopcontext);

  const location = useLocation();
  const { state } = location;
  return (
    <section className=' relative  w-full mt-11 min-h-screen'>
      <div
        className='  py-6 w-full flex flex-col justify-center items-center m-3 relative
       '
      >
        <div
          className=' rounded-xl w-full lg:w-[70%] px-3
            py-11 flex justify-center items-center relative
        bg-gradient-to-tr from-[#0a0a0a] to-red-50'
        >
          <button
            onClick={() => addtocart(cartitems[id])}
            className=' absolute bottom-7 rounded-xl px-5 py-1 bg-black text-white '
          >
            add to cart
          </button>
          <h3
            className=' px-2  
            
            font-montesrrat 
                        text-5xl font-bold
                        absolute top-[4%] left-2'
          >
            {state.title}
          </h3>
          <img
            src={state.imgurl}
            height={120}
            width={340}
            alt='details'
            className=' object-contain'
          />
          <p
            className='  text-8xl font-semibold 
          absolute top-[25%] left-0'
          >
            ${state.productPrice}
          </p>
        </div>
        <div className=' flex flex-col justify-center items-center mt-8'>
          <p className='  mt-2  b px-2 py-1 w-full lg:w-[70%]'> {state.desc}</p>

          <div className=' flex gap-4'>
            <button
              className=' hover:bg-black hover:text-white
                          px-5 py-2 bg-white text-black border border-black rounded-xl mt-5'
            >
              checkout
            </button>
            <button className=' px-5 py-2 bg-black text-white rounded-xl mt-5'>
              continue shopping
            </button>
          </div>
          <div className=' fixed right-0 top-[20%] z-20 flex justify-end items-start '>
            <Link to={"/cart"}>
              <AiOutlineShoppingCart
                style={{ width: 43, height: 43, background: "red" }}
              />
            </Link>
            <p className=' bg-black rounded-full px-1 text-white absolute right-1 bottom-7'>
              {counter}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
