import React, { useState, useEffect } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";

function Header() {
  const [nav, setNav] = useState(false);
  const [count, setCount] = useState(0);

  const handleNav = () => {
    setNav(!nav);
  };

  console.log(count);

  return (
    <div className="md:bg-white md:h-32 h-25 border-b md:w-full mx-auto text-white top-0 z-10 sticky">
      <div className="hidden md:flex justify-center flex-col columns-3 bg-black overflow-x-hidden ">
        <div className="md:flex columns justify-center text-center my-10 ml-2 self-stretch overflow-x-hidden">
          <div className="flex space-between items-start">
            <h1 className="flex md:text-sm justify-center border-4 py-2 self-center px-4 lg:tracking-widest mb-20 md:w-[25%] w-[10%] 2xl:mr-20 mr-20">
              K E E P M O V I N G
            </h1>
            <ul className="md:flex items-end tracking-wider 2xl:mr-36 mb-10">
              <il className="hidden  py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Latest</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Men</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Women</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Brands</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Clothing</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Footwear</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a href="/">Headwear</a>
              </il>
              <il className="hidden: py-4 2xl:text-2xl text-xl tracking-wider mr-5">
                <a className="text-red" href="/">
                  Sale
                </a>
              </il>
            </ul>
          </div>
        </div>
      </div>
      {/* Here mobile starts */}
      <IconContext.Provider value={{ color: "white" }}>
        <div className="md:hidden bg-black w-full">
          <div className="w-full flex justify-center items-center">
            <div
              onClick={handleNav}
              className="w-[10%] ml-2 flex my-3 content-center md:hidden"
            >
              {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <div className="flex justify-center h-[30px] items-center mx-auto ml-10">
              <h1 className="md:hidden text-xs border-2 w-[100%] text-center py-1 px-1 ml-4">
                K E E P M O V I N G
              </h1>
            </div>
            <div className="w-[20%] flex mr-2">
              <ul className="p-4 flex">
                <il className="mr-2">
                  {" "}
                  <VscAccount size={20} />{" "}
                </il>
                <il className="mr-2">
                  {" "}
                  <AiOutlineShoppingCart size={20} />
                </il>
              </ul>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </div>
  );
}

export default Header;
