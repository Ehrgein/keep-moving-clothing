import React, { useState, useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CategoriesContext } from "../App";
import { Link } from "react-router-dom";

function HamburgerMenuList({ key, nav, handleNav }) {

  
  const arrowcategories = useContext(CategoriesContext);
  const [menuarrow, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menuarrow);
  };

  return (
    <div className="w-full">
      <div className="flex justify-end text-xl">
        <AiOutlineClose
          onClick={handleNav}
          className="mt-1 pl-2 flex"
          size={35}
        />
      </div>
      <div>
        <Link className="flex items-center topblack" to="/newarrivals">
          <h1 className="flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest">
            New Arrivals
          </h1>
        </Link>
        <Link className="flex items-center topblack" to="/brands">
          <h1 className="flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest">
            Brands
          </h1>
        </Link>
        {arrowcategories?.map((item) => (
          <div
            key={item.id}
            className="flex items-center topblack justify-between"
          >
            <Link to={`/products/${item.categories}`} onClick={handleNav}>
              <h1 className="flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest">
                {item.categories}
              </h1>
            </Link>
          </div>
        ))}
        <Link className="flex items-center topblack" to="/brands">
          <h1 className="flex pl-2 text-lg font-bold py-2 w-[100%] uppercase tracking-widest">
            Sale
          </h1>
        </Link>
      </div>
      <div className="h-[70vh] w-full bg-black flex  flex-col px-4 text-white"></div>
    </div>
  );
}

export default HamburgerMenuList;
