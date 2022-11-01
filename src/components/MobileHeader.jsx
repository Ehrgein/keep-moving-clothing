import React, {useState, useContext} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
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
      <div className="md:hidden flex justify-between items-center h-16 bg-black text-white mx-auto mobilexs:px-1 px-4 sticky z-10 top-0">
        <Hamburger className='hidden' key={1} nav={nav} handleNav={handleNav}/>
        <div className="flex">
          <Link to="/">
            <h1 className="w-full mobilexs:text-base mobilem:text-lg font-bold text-center border-2 mobilexs:px-0 px-4 py-1 mobilem:ml-6 ml-4">
              K E E P M O V I N G
            </h1>
          </Link>
        </div>
        <div className="text-sm flex">
          <SearchBar/>
          <CartSlider/>
          <Link to='/account/login'>          
            <VscAccount className='mobilem:mr-2' size={25} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileHeader