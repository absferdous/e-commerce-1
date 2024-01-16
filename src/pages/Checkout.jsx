import React from "react";
import { useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col justify-center items-center'>
      <h1 className=' mt-10 max-sm:text-7xl text-[100px] text-center'>
        Not <br />
        <br />
        <span className='text-wrap px-4 mt-2 bg-red-600 text-white font-extrabold'>
          Built YET
        </span>
      </h1>
      <div>
        <button
          onClick={() => navigate("/cart")}
          className=' mt-5 bottom-7 rounded-xl px-5 py-1 bg-black text-white '
        >
          go to cart
        </button>
      </div>
    </div>
  );
};

export default Checkout;
