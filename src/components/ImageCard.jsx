import React from "react";

const ImageCard = ({
  data,
  imgurl,
  setimgurl,
  settogglebanner,
  togglebanner,
  setproductname,
  setprice,
}) => {
  const handleclick = () => {
    setimgurl(data.productImage);
    setproductname(data.productName);
    settogglebanner(false);
    setprice(data.price);
  };
  return (
    <div
      className=' flex justify-center
      hover:bg-slate-50 hover:border-black 
      border-2 border-slate-50 rounded-lg  
     bg-gradient-to-tl from-slate-400 to bg-slate-700'
    >
      <img
        src={data.productImage}
        alt={data.productName}
        className=' h-28 w-46 object-contain'
        onClick={handleclick}
      />
    </div>
  );
};

export default ImageCard;
