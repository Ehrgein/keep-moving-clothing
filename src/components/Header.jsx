import React, { useState } from "react";
import {
  AiOutlineShoppingCart,  AiOutlineSearch 
} from "react-icons/ai";
import { MdOutlineKeyboardArrowDown} from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import Hamburger from "./Hamburger";
import {IconContext} from "react-icons"
import HeaderDropdown from "./HeaderDropdown";
import Sliderbar from "./Sliderbar";









function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  



  //sticky z-10 top-0//



  return (
    <div className="sticky z-50 top-0">
      <Sliderbar/>
       <div className="hidden md:flex justify-between items-center h-16 text-white bg-black w-full">
        <div className="flex justify-center w-[15%] border-2 border-white 2xl:text-sm font-bold py-2 ml-10 mt-4">
          <h1 className="flex justify-center text-xl tracking-wider">K E E P M O V I N G</h1>
        </div>
        <div className="flex w-[40%] justify-center mt-4 ml-10" >
          <input className="w-full h-[40px] text-black text-xl"/>
              <div>
                <AiOutlineSearch size={30} className="bg-orange-500 flex justify-center h-[40px]"/>
              </div>
        </div>


      <div className="flex ml-6 justify-end w-[20%] items-center mt-4 font-semibold tracking-[2px] pr-4 mr-4 text-xs">
        <h1 className="mr-4"> LOGIN </h1> 
        <h1 className="mr-4"> WISHLIST (0) </h1> 
        <h1 className="mr-4"> CART (0) </h1> 
      </div>
    </div>
    
    <div className="hidden w-full md:flex bg-black text-white justify-center h-16 font-semibold tracking-[2px] gap-8 text-xs items-center">
          <HeaderDropdown text={"new arrivals"}/>
          <HeaderDropdown text={"sizes"}/>
          <HeaderDropdown text={"brands"}/>
          <HeaderDropdown text={"outerwear"}/>
          <HeaderDropdown text={"bottoms"}/>
          <HeaderDropdown text={"sneakers"}/>
          <HeaderDropdown text={"accesories"}/>
          <HeaderDropdown text={"sale"}/>
    </div>






    <div className="md:hidden flex justify-between items-center h-16 text-white bg-black mx-auto px-4 sticky z-10 top-0">
      <Hamburger className='hidden' nav={nav} handleNav={handleNav}/>
      <div className="flex">
        <h1 className="w-full text-sm font-bold text-center border-2 border-white-500 px-4 py-1 ml-4">
          {" "}
          K E E P M O V I N G
        </h1>
      </div>
      <div className="text-sm flex">
        <AiOutlineShoppingCart className="mx-2" size={20} />
        <VscAccount className="mx-2" size={20} />
      </div>
    </div>
    </div>
  );
}

export default Header;
