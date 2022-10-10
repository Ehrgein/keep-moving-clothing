import React, { useEffect, useState, useRef } from "react";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import {
  MdKeyboardArrowUp,
  MdKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { VscAccount } from "react-icons/vsc";
import HamburgerMenuList from "./HamburgerMenuList";



function Hamburger({ nav, handleNav }) {





  return (
    <div className="md:hidden">
      <div onClick={handleNav} className="flex ">
        <AiOutlineMenu size={20} />
      </div>
      <div  className={nav ? "fixed left-0 top-0 w-[75%] h-[100%] border-r text-black bg-white ease-in-out duration-500": "fixed ease-in-out duration-500 left-[-100%] h-[100%] top-0"}>
        <HamburgerMenuList nav={nav} handleNav={handleNav} />
      </div>

    </div>
  );
}

export default Hamburger;

// DO LIST RENDERING TOMORROW