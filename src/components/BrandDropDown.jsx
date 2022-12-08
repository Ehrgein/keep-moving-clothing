import React, { useState, useContext, useEffect, useRef } from "react";
import { BrandsContext } from "../App";
import { Link } from "react-router-dom";

function BrandDropDown() {
  
  const [brandnav, setBrandNav] = useState(false);

  const handleBrand = () => setBrandNav(!brandnav);

  const brands = useContext(BrandsContext);

  const handleSubFalse = () => setBrandNav(false);
  
  useEffect(() => {
    document.addEventListener("click", handleClickOutsideTwo, true);
  }, []);

  const refTWo = useRef(null);

  const handleClickOutsideTwo = (e) => {
    if (!refTWo.current?.contains(e.target)) {
      setBrandNav(false);
    } else {
      console.log("holi");
    }
  };



  return brandnav ? (
    <div>
      <div>
        <button onClick={handleBrand}>BRANDS</button>
      </div>
      <div
        ref={refTWo}
        onMouseLeave={handleSubFalse}
        className="fixed 4k:top-[10.5%] desktop:top-[11%]  laptopL:top-[12%] w-[100%]
       4k:h-[35%] laptopL:h-[37%] h-[50%] left-0 text-black bg-white fade-anim justify-start flex flex-col"
      >
        <div className="flex justify-center items-start">
          <h1 className="flex font-bold mt-4"> Most Popular Brands</h1>
        </div>
        <div className="flex flex-col h-[650px] w-[100%] justify-start items-center pr-32 desktop:pr-12">
          <div
            className="4k:h-[40%] desktop:h-[30%] laptopL:h-[30%] laptopL:w-[20%] 4k:text-lg laptop:text-sm
               desktop:text-sm md: text-xs flex flex-col justify-start items-start flex-wrap mt-6 mr-40 gap-1"
          >
            {brands.slice(0, 8).map((item) => (
              <div key={item.id} className="flex mx-6">
                <Link onClick={handleSubFalse} to={`/collection/${item.brand}`}>
                  <p className="flex">{item.brand}</p>
                </Link>
              </div>
            ))}
            {brands.slice(10, 18).map((item) => (
              <div key={item.id} className="flex mx-6">
                <Link onClick={handleSubFalse} to={`/collection/${item.brand}`}>
                  <p className="flex">{item.brand}</p>
                </Link>
              </div>
            ))}
            {brands.slice(20, 28).map((item) => (
              <div key={item.id} className="flex mx-6">
                <Link onClick={handleSubFalse} to={`/collection/${item.brand}`}>
                  <p className="flex">{item.brand}</p>
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-5 w-[40%] flex justify-center desktop:ml-16 ml-32">
            <button
              className="4k:h-10 desktop:h-8 laptopL:h-7 font-bold 4k:w-[25%] desktop:w-[25%] laptopL:w-[40%] desktop:text-lg 4k:text-xl laptopL:text-base
                  flex justify-center bg-black text-white items-center"
            >
              <Link to="/brands">VIEW ALL</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <button onClick={handleBrand}>BRANDS</button>
    </div>
  );
}

export default BrandDropDown;

// {brands.map(item =>
//   <div key={item.id}  className='w-[80%] flex justify-between mx-20 '>
//     <div className='flex ml-20'>
//       <p>{item.brand}</p>
//       </div>
//     <div className='flex'>
//     <p>{item.brand}</p>
//     </div>
//     <div className='flex'>
//     <p>{item.brand}</p>
//     </div>
//     <div className='flex ml-'>
//     <p>{item.brand}</p>
//     </div>
//   </div>
//   )}
