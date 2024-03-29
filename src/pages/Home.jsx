import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../constants/Product";
import { Shopcontext } from "../context/shopcontext";
import Product from "../components/Product";

import ImageSlider from "../components/ImageSlider";

import { AiOutlineShoppingCart } from "react-icons/ai";
import Sales from "./Sales";

import Hero from "../components/Hero";

const Home = () => {
  const { counter } = useContext(Shopcontext);

  return (
    <main className=' w-full   relative'>
      <section>
        <Hero />
      </section>
      <section className=' mt-10 w-full  max-h-screen'>
        <div className=' flex max-lg:flex-col justify-center items-center'>
          <div
            className=' bg-gradient-to-tl from-slate-400 to bg-slate-700
           rounded lg:w-2/5 border py-2 max-lg:hidden'
          >
            <h1 className=' text-4xl text-wrap lg:text-8xl'>
              CHECK OUT THE <br />
              <span className=' text-white lg:text-8xl font-montesrrat rounded px-3 py-1 relative z-20'>
                BEST HEADPHONES
              </span>{" "}
              FOR A GREAT EXPERIENCE
            </h1>
          </div>
          <div className=' flex '>
            <ImageSlider />
          </div>
        </div>
      </section>
      <div className=' mt-10 '>
        <h1
          className=' 
           bg-gradient-to-tr from-red-800  to-red-300  text-transparent  bg-clip-text 
        text-8xl max-sm:text-4xl font-extrabold font-montesrrat text-center max-lg:text-6xl'
        >
          SEE MORE <span className='bg-black text-white px-3'>PRODUCTS</span>
        </h1>
      </div>{" "}
      <section
        className=' w-full grid grid-cols-2 lg:grid-cols-4
        items-center gap-2 '
      >
        {PRODUCTS.map(product => (
          <Product key={product.id} data={product} />
        ))}
      </section>
      <section>
        <Sales />
      </section>
      <div className=' fixed right-0 top-[20%] z-20 flex justify-end items-start'>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart
            style={{ width: 43, height: 43, background: "red" }}
          />
        </Link>
        <p className=' bg-black rounded-full px-1 text-white'>{counter}</p>
      </div>
    </main>
  );
};

export default Home;
