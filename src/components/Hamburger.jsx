import React from "react";
import { AiOutlineMenu} from "react-icons/ai";
import HamburgerMenuList from "./HamburgerMenuList";



function Hamburger({ nav, handleNav }) {


  return (
    <div className="md:hidden">
      <div onClick={handleNav} className="flex ">
        <AiOutlineMenu size={20} />
      </div>
      <div  className={nav ? "fixed left-0 top-0 w-[75%] h-[100%] text-black bg-white ease-in-out duration-500" : "fixed h-[100%] w-[75%] ease-in-out duration-500 left-[-100%]  top-0"}>
        <HamburgerMenuList handleNav={handleNav}/>
      </div>
    </div>
  );
}

export default Hamburger;

// DO LIST RENDERING TOMORROW