import React from "react";

import { motion } from "framer-motion";

import { PRODUCTS } from "../constants/Product";
import Product from "../components/Product";

const Shop = () => {
  return (
    <div>
      <motion.div
        animate={{ rotate: [0, 10, 10, 0] }}
        transition={{
          duration: 0.15,
          repeat: 5,
        }}
        className='  mt-10 text-center max-lg:text-5xl text-8xl'
      >
        <h1>BEST SELLER PRODUCTS</h1>
      </motion.div>
      <section
        className=' w-full grid grid-cols-2 lg:grid-cols-4
        items-center gap-2 '
      >
        {PRODUCTS.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </section>
    </div>
  );
};

export default Shop;
