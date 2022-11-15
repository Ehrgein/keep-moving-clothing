import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Sliderbar from "./Sliderbar";
import { AiOutlineHeart } from "react-icons/ai";
import { UserContext } from "../App";
import BrandDropDown from "./BrandDropDown";
import CartSlider from "./Cart/CartSlider";
import { CartContext } from "../components/Cart/CartFunctionality";
import { VscAccount } from "react-icons/vsc";
import SearchBar from "./SearchBar";

function DesktopHeader() {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  const cart = useContext(CartContext);

  const usercontext = useContext(UserContext);

  const validateroute = usercontext.isLoggedIn == true ? "/account" : "/login";

  return (
    <div className="w-full z-50">
      <Sliderbar />
      <div className="hidden laptopL:flex justify-between items-center 4k:h-24  h-20 text-white bg-black w-full px-20">
        <div className="flex justify-center desktop:w-[18%] desktop:tracking-widest md:w-[20%] font-bold">
          <Link onClick={() => cart.closeCart()} to="/">
            <h1
              className="w-auto
                    4k:text-2xl desktop:text-lg laptopL:text-lg 2xl:text-sm py-2 4k:py-3 laptopL:py-1 px-2 4k:px-6 laptopL:px-8
                      border-2 border-white md:text-xl md:mt-1 md:ml-4 ml-10 mt-4 "
            >
              K E E P M O V I N G
            </h1>
          </Link>
        </div>
        <div className="hidden md:flex 4k:text-xl  sticky tracking-widest bg-black text-white justify-center mt-4 h-10 items-center font-normal md:gap-3 gap-6  uppercase">
          <BrandDropDown onClick={() => cart.closeCart()} />
          <Link onClick={() => cart.closeCart()} to="/newarrivals">
            <p>LATEST</p>
          </Link>
          <Link onClick={() => cart.closeCart()} to="/products/tops">
            <p>TOPS</p>
          </Link>
          <Link onClick={() => cart.closeCart()} to="/products/outerwear">
            <p>OUTERWEAR</p>
          </Link>
          <Link onClick={() => cart.closeCart()} to="/products/bottoms">
            <p>BOTTOMS</p>
          </Link>
          <Link onClick={() => cart.closeCart()} to="/products/sneakers">
            <p>SNEAKERS</p>
          </Link>
          <Link onClick={() => cart.closeCart()} to="/products/accesories">
            <p>ACCESORIES</p>
          </Link>
          <p>SALE</p>
        </div>
        <div className="flex ml-6 justify-end w-auto items-center mt-4 font-semibold tracking-[2px] pr-4 mr-4 text-xs gap-4">
          <SearchBar />
          <Link to={validateroute}>
            {" "}
            <VscAccount className="4k:w-[35px] 4k:h-[35px] desktop:w-[25px] desktop:h-[25px] laptopL:w-[22px] laptopL:h-[22px]" />{" "}
          </Link>
          <Link to="/account/wishlist">
            {" "}
            <AiOutlineHeart className="4k:w-[35px] 4k:h-[35px] desktop:w-[25px] desktop:h-[25px] laptopL:w-[22px] laptopL:h-[22px]" />
          </Link>
          <CartSlider />
        </div>
      </div>
    </div>
  );
}

export default DesktopHeader;
