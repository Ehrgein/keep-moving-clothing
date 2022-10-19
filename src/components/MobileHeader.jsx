import React, {useState} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { VscAccount } from 'react-icons/vsc'
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'


function MobileHeader() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);


  return (
    <div>
      <div className="md:hidden flex justify-between items-center h-20 text-white bg-black mx-auto px-4 sticky z-10 top-0">
        <Hamburger className='hidden' key={1} nav={nav} handleNav={handleNav}/>
        <div className="flex">
          <Link to="/"><h1 className="w-full text-lg font-bold text-center border-2 border-white-500 px-4 py-1 ml-4">K E E P M O V I N G</h1></Link>
        </div>
        <div className="text-sm flex">
          <AiOutlineShoppingCart className="mx-2" size={20} />
          <VscAccount className="mx-2" size={20} />
        </div>
      </div>
    </div>
  )
}

export default MobileHeader