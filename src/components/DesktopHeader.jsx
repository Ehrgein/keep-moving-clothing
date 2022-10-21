import React, {useState, useContext} from 'react'
import {Link} from 'react-router-dom'
import Sliderbar from './Sliderbar'
import {AiOutlineSearch } from 'react-icons/ai'
import {CategoriesContext} from '../App'
import HeaderDropdown from './HeaderDropdown'
import CartSlider from './Cart/CartSlider'
import {CartContext} from '../components/Cart/CartFunctionality'

function DesktopHeader() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    
    
    const contextcategories = useContext(CategoriesContext)
    const cart = useContext(CartContext)

    console.log(cart.items.length)


  return (
    <div>      
        <Sliderbar/>
        <div className="hidden md:flex justify-between items-center h-24 text-white bg-black w-full py-">
        <div className="flex justify-center desktop:w-[15%] desktop:tracking-widest md:w-[20%] border-2 border-white 2xl:text-sm font-bold py-2 md:mt-1 md:ml-4 ml-10 mt-4">
            <Link to="/"><h1 className="flex justify-center md:text-xl">K E E P M O V I N G</h1></Link>
        </div>
        <div className="flex desktop:w-[40%] justify-center mt-1 ml-10" >
            <div className='w-[75%]'>
            <input placeholder= "Search" className="placeholder:pl-2 w-full h-[40px] text-black text-xl "/>
            </div>    
            <div>
            <AiOutlineSearch size={30} className="bg-orange-500 flex justify-center h-[40px]"/>
            </div>
        </div>
        <div className="flex ml-6 justify-end w-[20%] items-center mt-4 font-semibold tracking-[2px] pr-4 mr-4 text-xs">
            <Link to="/account/login"><h1 className="mr-4 text-base"> LOGIN </h1> </Link>
            <h1 className="mr-4 text-base"> WISHLIST (0) </h1>
            
            <CartSlider/>

        </div>
        </div>
        <div className="hidden md:flex bg-black text-white justify-center h-10 font-semibold tracking-[2px] md:gap-3 gap-8 text-base">        
            {contextcategories.map(menu => <HeaderDropdown key={menu.id}  categories={menu.categories}/>)}
        </div>
</div>
  )
}

export default DesktopHeader