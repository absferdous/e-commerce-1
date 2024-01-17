import React from "react";

import { motion } from "framer-motion";

import banner from "../assets/images/products/banner.webp";

const Hero = () => {
  return (
    <section className=' w-full relative mt-6'>
      <div className='  flex max-lg:flex-col justify-center items-center bg-gradient-to-tr from-[#221e1e] to-red-50'>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{
            duration: 0.75,
          }}
        >
          <img
            src={banner}
            alt='hero banner'
            className='object-contain relative z-10'
          />
        </motion.div>
        <div className=' '>
          <h1 className=' max-lg:pl-3 text-6xl max-lg:text-4xl font-montesrrat absolute top-[10%] right-0'>
            Elevate your{" "}
            <span className=' relative z-20 text-white font-bold'>audio</span>{" "}
            <span className=' relative z-20 text-white font-bold'>
              experience{" "}
            </span>
            with our{" "}
            <span className='relative z-20 text-white font-bold'>curated</span>
            collection of cutting-edge{" "}
            <span className='relative z-20 text-white font-bold'>
              headphones
            </span>{" "}
            at UNREAL
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
