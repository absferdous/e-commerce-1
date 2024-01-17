import React, { useContext } from "react";
import { Shopcontext } from "../context/shopcontext";

const CartItems = props => {
  const { addtocart, removefromcart, cartitems, updatecart } =
    useContext(Shopcontext);
  const { id, productName, price, productImage } = props.data;
  return (
    <div className=' flex flex-col justify-center items-center'>
      <div>
        <img src={productImage} alt={productName} width={330} height={300} />
      </div>
      <div>
        <p className=' font-montesrrat text-lg '>{productName}</p>
        <p className=' font-mono'>Price :{price}</p>
      </div>
      <div className=''>
        <button
          className=' mt-2 mb-4 border shadow-2xl rounded px-4  bg-[#FF0000] text-white '
          onClick={() => addtocart(id)}
        >
          +
        </button>
        <input
          value={cartitems[id]}
          onChange={e => updatecart(Number(e.target.value), id)}
          className=' border border-black text-center'
        />
        <button
          className=' mt-2 mb-4 border shadow-2xl rounded px-4  bg-black text-white '
          onClick={() => removefromcart(id)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default CartItems;
