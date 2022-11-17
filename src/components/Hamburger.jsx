import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import HamburgerMenuList from "./HamburgerMenuList";



function Hamburger({ nav, handleNav }) {


  return (
    <div className="laptopL:hidden">
      <div onClick={handleNav} className="flex ">
        <AiOutlineMenu aria-label="Menu" className="mobileL:h-6 mobileL:w-6 mobilexs:w-5 mobilexs:h-5 ml-1" />
      </div>
      <div  className={nav ? " cartshadow fixed left-0 top-0 mobilexs:w-[70%] mobilexs:text-lg tablet:w-[32%] h-[100%] text-black bg-white ease-in-out duration-500"
       : 
       "fixed h-[100%] mobilexs:w-[70%] mobilexs:text-lg tablet:w-[32%] ease-in-out duration-500 left-[-100%]  top-0"}>
        <HamburgerMenuList handleNav={handleNav}/>
      </div>
    </div>
  );
}

export default Hamburger;
