import React from "react";

import { PRODUCTS } from "../constants/Product";
import Product from "../components/Product";

const Shop = () => {
  return (
    <div>
      <div className=' mt-10 text-center max-lg:text-5xl text-8xl'>
        <h1>BEST SELLER PRODUCTS</h1>
      </div>
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
