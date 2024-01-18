import React, { useState } from "react";
import { PRODUCTS } from "../constants/Product";
// import { FcNext, FcPrevious } from "react-icons/fc";
import arrow from "../assets/icons/right-arrow.png";

const ImageSlider = () => {
  const [index, setindex] = useState(0);

  const handleNext = () => {
    setindex(prev => (prev + 1) % PRODUCTS.length);
  };

  const handlePrev = () => {
    setindex(prev => (prev === 0 ? PRODUCTS.length - 1 : prev - 1));
  };
  return (
    <div
      className='  
      bg-gradient-to-tr from-slate-800
     rounded-lg 
    to-red-200 
    flex flex-col justify-center 
     px-1 items-center border border-t-4'
    >
      <div className='flex flex-col justify-center items-center relative'>
        <div className=' flex flex-col  px-3 py-4'>
          <img
            src={PRODUCTS[index].productImage}
            alt={PRODUCTS[index].productName}
            className=' z-10 object-contain h-72 w-96'
          />
          <div className='flex  items-end justify-end  gap-5'>
            <button
              onClick={handlePrev}
              className=' px-4 bg-black rounded-full text-white'
            >
              Prev
            </button>
            <button
              className='  px-8 bg-white rounded-full text-black '
              onClick={handleNext}
            >
              next
            </button>
          </div>
        </div>
        <h2 className='  bg-gradient-to-bl from-red-600 to bg-red-700 shadow-2xl px-3 py-2 rounded-xl font-bold text-4xl absolute left-2 top-4 z-10  text-white'>
          ${PRODUCTS[index].price}
        </h2>
      </div>

      <div className=' relative flex justify-between gap-6 items-center'>
        <h3
          className=' text-white z-10 relative mb-4 
         text-wrap font-montserrat text-center max-lg:text-4xl text-6xl   '
        >
          {PRODUCTS[index].productName.toUpperCase()}
        </h3>
      </div>
    </div>
  );
};

export default ImageSlider;
