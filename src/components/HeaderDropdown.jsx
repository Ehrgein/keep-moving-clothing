import React, { useState, useEffect, useRef, useContext } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";
import {Link } from "react-router-dom"
import {ProductsContext, CategoriesContext} from '../App'
import {CartContext} from './Cart/CartFunctionality'



function HeaderDropdown({categories}) {
  const [subnav, setSubNav] = useState(false);

  const productscontext = useContext(ProductsContext)
  const cartcontext = useContext(CartContext)



  const handleSubNav = () => {
    setSubNav(!subnav);
  };


  const handleSubFalse = () => setSubNav(false)

  const closecartdrop = () => {
    handleSubFalse()
    cartcontext.closeCart()
  }


  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);


  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current?.contains(e.target)) {
      setSubNav(false);
    } else {
      console.log("holi");
    }

  };          

  

  return subnav ? (
    <div className=''>
      
      <div onClick={handleSubNav}  className="flex items-start uppercase align-middle">
        <h1 className="">{categories}</h1>
      </div>

      <div ref={refOne} onMouseLeave={handleSubFalse} className="fixed top-[10%] w-[100%] h-[56%] left-0 text-black bg-white fade-anim font-thin flex flex-col">
        <div className="flex flex-col">
          <div className="text-3xl justify-center flex font-bold mt-4"> Featured in {categories}</div>
        </div>
        <div className="flex justify-center">
        <div className="flex mt-2">
          {productscontext.filter(item => item.categories ===  categories).slice(-3).map((newitem) => (
            <div key={newitem.id}>
                <div name={newitem.name} price={newitem.price}  className="w-[250px] h-[250px] justify-center flex  flex-col mr-6 mt-20 gap-4">
                  <Link onClick={handleSubNav} className='mx-4' to={`/products/${categories}/${newitem.id}`}>
                    <img  src={newitem.prod_img}/>
                  </Link>
                  <ul className="">
                  <li className="uppercase font-bold text-base mx-6 text-center"> {newitem.name}</li>
                  <li className="text-center font-bold text-base"> ${newitem.price} </li>
                  </ul>
                </div>
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-center h-14 items-end mt-10 text-lg">
          <Link to={`/products/${categories}`} onClick={closecartdrop} className="bg-[#1f2021] text-white px-4 py-2 font-bold ">VIEW ALL </Link>
        </div>
      </div>
    </div> 
  ) : (
    <div onClick={handleSubNav} className="flex items-start uppercase align-middle px-1">
      <p className="">{categories}</p>
    </div>
  );
}

export default HeaderDropdown;

