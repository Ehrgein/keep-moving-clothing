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
import {products} from './NewMenuData'



const testingitems =  [
    {
    
      "id": 1,
      "category": "Tops",
      "items": [
          {
            "id":1,
            "name": "Future Pattern Long Sleeve",
            "brand": "FSHNS Brand",
            "stock": 22,
            "prod_img": "https://cdn.shopify.com/s/files/1/0019/2672/5744/products/17dc8d89376447fbca520935d73457a3_360x.jpg?v=1665006517",
            "price": 47.99,
            
          }
        ]
    }
  ]


function Header() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  

  //sticky z-10 top-0//


  return (
    <div className="sticky z-50 top-0">
      <Sliderbar/>
       <div className="hidden md:flex justify-between items-center h-20 text-white bg-black w-full ">
        <div className="flex justify-center desktop:w-[15%] desktop:tracking-widest md:w-[20%] border-2 border-white 2xl:text-sm font-bold py-2 md:mt-1 md:ml-4 ml-10 mt-4">
          <h1 className="flex justify-center text-xl md:text-sm">K E E P M O V I N G</h1>
        </div>
        <div className="flex desktop:w-[40%] justify-center mt-1 ml-10" >
          <input className="w-full h-[40px] text-black text-xl "/>
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
    
    <div className="hidden w-full md:flex bg-black text-white justify-center h-16 font-semibold tracking-[2px] md:gap-3 gap-8 text-xs items-center">

        {products.map(menu => <HeaderDropdown  key={menu.id} category={menu.category} items={menu.items}/>)}
    
    </div>


    {/* className={subnav ? "fixed top-[11%] left-[0%] w-[100%] h-[40%] text-black bg-white ease-in-out duration-500" : "hidden"} */}













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
