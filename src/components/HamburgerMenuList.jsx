import React, { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import SliderBarData from "./SliderBarData";
import {VscAccount} from 'react-icons/vsc'
import {AiOutlineClose} from 'react-icons/ai'
import {products} from './NewMenuData'
import NewCategoryList from "./NewCategoryList";

function HamburgerMenuList({nav, handleNav}) {



  
  return (
    <div className="">
        <div className="flex justify-end text-xl ml-2">
             <AiOutlineClose onClick={handleNav} className='ml-1 mt-1 pl-2 flex' size={30}/>
        </div>
        <NewCategoryList/>
    </div>  
  );
}

export default HamburgerMenuList;
