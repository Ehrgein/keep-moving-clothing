import React, {useState, useContext} from 'react'
import {AiOutlineShoppingCart, AiOutlineHeart} from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import SearchBar from './SearchBar'
import { UserContext } from '../App'
import CartSlider from './Cart/CartSlider'


function MobileHeader() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    
    const usercontext = useContext(UserContext)

  return (
    <div>
      <div className="laptopL:hidden flex justify-between items-center mobilem: mobilexs:h-16 bg-black text-white mx-auto sticky z-10 top-0">
        <div className='flex'>
          <Hamburger className='hidden' key={1} nav={nav} handleNav={handleNav}/>
          <SearchBar/>
        </div>
        <div className="flex border-2 border-white mobilexs:px-3 mobilexs:py-1 mobilexs:ml-2">
          <Link to="/">
            <h1 className="w-full mobilexs:text-base mobilem:text-lg font-bold text-center ">
              K E E P M O V I N G
            </h1>
          </Link>
        </div>
        <div className="text-sm flex">
          <Link to="/account/wishlist">
           <AiOutlineHeart className='mobilexs:w-5 mobilexs:h-5 mobileL:h-6 mobileL:w-6'/>
          </Link>
          <CartSlider/>
          <Link to='/account'>          
            <VscAccount className='mobilem:mr-2 tablet:w-[25px] h-auto mobilexs:w-5 mobilexs:h-5 mobileL:h-6 mobileL:w-6 mobilexs:mr-1'  />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader