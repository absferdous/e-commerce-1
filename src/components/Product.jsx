import React, { useState, useContext } from "react";
import { Shopcontext } from "../context/shopcontext";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import banner from "../assets/images/products/banner.webp";
import ProductDetails from "../pages/ProductDetails";

const Product = props => {
  const [imgurl, setimgurl] = useState(banner);

  const [title, setTitle] = useState("");

  const [productPrice, setProductPrice] = useState("");
  const { addtocart, cartitems } = useContext(Shopcontext);
  const [desc, setdesc] = useState("");
  const [show, setshow] = useState(false);
  const [productid, setproductid] = useState(null);

  const { id, productName, price, productImage, productDesc } = props.data;
  const itemquantity = cartitems[id];

  const navigate = useNavigate();

  const handleCLick = () => {
    setimgurl(productImage);
    setTitle(productName);
    setdesc(productDesc);
    setProductPrice(price);
    setproductid(id);
    setshow(true);
  };

  return (
    <section className='flex mb-8  ' id='shop'>
      <div
        className='max-sm:mx-2 mt-4 flex flex-col flex-wrap
      rounded  w-full'
      >
        <div
          className='mt-2 mb-2
          bg-gradient-to-tr from-[#221e1e] to-red-50
          rounded shadow-2xl
            justify-center items-center'
        >
          <img
            onClick={handleCLick}
            className=' object-contain h-40 w-80'
            src={productImage}
            alt={productName}
          />
          <div className=''>
            {/* <button
              onClick={() => setshow(!show)}
              className=' shadow-2xl mb-4 border border-black rounded px-4 bg-black text-white
            mt-2'
            >
              {show ? "show less" : "Descripton"}
            </button> */}
            <button
              onClick={() => addtocart(id)}
              className=' mt-2 mb-4 border shadow-2xl rounded px-4  bg-[#100f0f]
               text-white '
            >
              Add to cart {itemquantity > 0 && <>({itemquantity})</>}
            </button>
          </div>

          {show &&
            navigate("/details", {
              state: {
                imgurl,
                title,
                productPrice,
                desc,
                productid,
              },
            })}
        </div>
        <div
          className='ml-4
         
           rounded-lg  mb-0  '
        >
          <h3 className='  text-center font-montserrat max-lg:text-lg font-semibold  max-lg:ml-2'>
            {productName.toUpperCase()}
          </h3>
          <p className='font-bebas text-xl font-semibold  text-center'>
            Price: ${price}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Product;
