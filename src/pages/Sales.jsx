import React from "react";

import banner from "../assets/images/products/banner.webp";

const Sales = () => {
  return (
    <div
      className=' relative min-h-screen  w-full flex justify-center
     items-center  bg-gradient-to-tr from-[#FF0000] to-red-50'
    >
      <div>
        <img
          src={banner}
          alt='sales banner'
          className=' z-10 relative object-contain h-95'
        />
      </div>
      <div>
        <h1 className=' font-bold max-sm:text-4xl text-8xl absolute top-0 left-10'>
          SUMMER <br /> <span className=' text-white'>SALES</span>
        </h1>
      </div>
      <div className=' flex justify-center items-center relative'>
        <p className='  max-lg:hidden max-lg:mt-[30px] max-w-lg font-montesrrat text-2xl max-lg:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          perferendis.
        </p>
      </div>

      <div className=' absolute bottom-[25%] font-bold text-8xl'>
        <h3>
          <span className=' text-white z-20 relative'>DONT</span> MISS OUT
        </h3>
      </div>
    </div>
  );
};

export default Sales;
