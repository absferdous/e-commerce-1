import React from "react";
import { motion } from "framer-motion";

import banner from "../assets/images/products/banner.webp";

const Sales = () => {
  return (
    <div
      className=' relative min-h-screen  w-full flex justify-center
     items-center  bg-gradient-to-tr from-[#FF0000] to-red-50'
    >
      <motion.div
        animate={{ rotate: [0, 20, 20, 0] }}
        transition={{
          duration: 0.25,
          repeat: 5,
        }}
      >
        <img
          src={banner}
          alt='sales banner'
          className=' z-10 relative object-contain h-95'
        />
      </motion.div>
      <motion.div
        animate={{ rotate: [0, 10, 10, 0], x: [0, 10, 10, 0, -10, -10, 0] }}
        transition={{
          duration: 0.15,
          repeat: 5,
        }}
      >
        <h1 className=' font-bold max-sm:text-4xl text-8xl absolute top-0 left-10'>
          SUMMER <br /> <span className=' text-white'>SALES</span>
        </h1>
      </motion.div>
      <div className=' flex justify-center items-center relative'>
        <p className='  max-lg:hidden max-lg:mt-[30px] max-w-lg font-montesrrat text-2xl max-lg:text-lg'>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur,
          perferendis.
        </p>
      </div>

      <motion.div
        animate={{ y: 100 }}
        transition={{
          duration: 0.75,
          repeat: 5,
        }}
        className=' absolute bottom-[25%] font-bold text-8xl'
      >
        <h3>
          <span className=' text-white z-20 relative'>DONT</span> MISS OUT
        </h3>
      </motion.div>
    </div>
  );
};

export default Sales;
