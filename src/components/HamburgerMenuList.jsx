import React, { useState, useContext } from "react";
import {AiOutlineClose} from 'react-icons/ai'
import {CategoriesContext, productscontext} from '../App'
import {Link} from 'react-router-dom'

function HamburgerMenuList({key, nav, handleNav}) {
  

  const arrowcategories = useContext(CategoriesContext)
  const [menuarrow, setMenu] = useState(false)

  const handleMenu = () =>{
  setMenu(!menuarrow)
  }
  
  return (
    <div className="">
        <div className="flex justify-end text-xl">
          <div className="bg-[#1f2021] w-[300px]">
            <input className="ml-2 my-1 text-xl w-[260px] focus:outline-none bg-[#1f2021]" placeholder="Search"/>
          </div>
          <AiOutlineClose onClick={handleNav} className='mr-2 mt-1 pl-2 flex' size={35}/>
        </div>
        {arrowcategories.map(item =>
        <div key={item.id}>
          <div className="flex justify-between items-end">
            <Link to={`/products/${item.categories}`} onClick={handleNav} className='flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest' >{item.categories}</Link>
          </div>
        </div>
        ) }
    </div>  
  );
}

export default HamburgerMenuList;
