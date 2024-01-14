import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { PRODUCTS } from "../constants/Product";
import { Shopcontext } from "../context/shopcontext";
import Product from "../components/Product";
import banner from "../assets/images/products/banner.webp";
// import banner from "/assets/images/products/banner.webp";
import hero2 from "../assets/heroImages/hero-2.jpg";
import ImageSlider from "../components/ImageSlider";
import ImageCard from "../components/ImageCard";
import hero3 from "../assets/heroImages/hero-3.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Sales from "./Sales";
import Footer from "./Footer";
import Hero from "../components/Hero";

const Home = () => {
  const { addtocart, cartitems } = useContext(Shopcontext);

  const [imgurl, setimgurl] = useState(banner);
  const [productname, setproductname] = useState("");
  const [price, setprice] = useState("");
  const [togglebanner, settogglebanner] = useState(true);

  const navigate = useNavigate();

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
        text-8xl max-sm:text-4xl font-extrabold font-montesrrat text-center'
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
      <section>
        <Footer />
      </section>
      <div className=' fixed right-0 top-[20%]'>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart
            style={{ width: 43, height: 43, background: "red" }}
          />
        </Link>
      </div>
    </main>
  );
};

export default Home;
