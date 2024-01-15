import React from "react";
import { useLocation } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const { state } = location;
  return (
    <section className=' relative  w-full mt-20'>
      <div className=' flex flex-col justify-center items-center m-3'>
        <h3>product details</h3>
        <img
          src={state.imgurl}
          height={120}
          width={340}
          alt='details'
          className=' object-contain'
        />
        <h3 className=' bg-red-500'>{state.title}</h3>
        <p className=' bg-slate-100 mt-2 max-w-lg b px-2 py-1'> {state.desc}</p>
        <p>{state.price}</p>
        <button className=' px-5 py-3 bg-black text-white'>add to cart</button>
        <button className=' px-5 py-3 bg-black text-white'>
          continue shopping
        </button>
      </div>
    </section>
  );
};

export default ProductDetails;
