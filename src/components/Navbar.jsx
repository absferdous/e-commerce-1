import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav
      className='px-1  fixed top-0 z-20 w-full  shadow-2xl 
    flex justify-between bg-black items-center text-white'
    >
      <div>
        <Link to={"/"}>
          <h3 className=' font-montesrrat text-lg'>UNREAL</h3>
        </Link>
      </div>
      <div className=' flex items-center gap-4'>
        <Link to={"/shop"}>SHOP</Link>
        <Link to={"/cart"}>
          <AiOutlineShoppingCart style={{ width: 43, height: 43 }} />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
