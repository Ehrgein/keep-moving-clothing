import React, {useState, useContext} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import Sliderbar from './Sliderbar'
import {AiOutlineSearch, AiOutlineHeart, AiOutlineShoppingCart} from 'react-icons/ai'
import {BrandsContext, CategoriesContext, UserContext} from '../App'
import HeaderDropdown from './HeaderDropdown'
import BrandDropDown from './BrandDropDown'
import CartSlider from './Cart/CartSlider'
import {CartContext} from '../components/Cart/CartFunctionality'
import axios from 'axios'
import { VscAccount } from 'react-icons/vsc'
import SearchBar from './SearchBar'



function DesktopHeader() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const [inputdrop, setInputDrop] = useState(false)



    const contextcategories = useContext(CategoriesContext)
    const brands = useContext(BrandsContext)
    const cart = useContext(CartContext)
    
    const usercontext = useContext(UserContext)

    const navigate = useNavigate()

    
    const validateroute = usercontext.isLoggedIn == true ? "/account" : "/login"





  return (
    <div>      
        <Sliderbar/>
        <div className="hidden md:flex justify-between items-center h-20 text-white bg-black w-full px-20">
            <div className="flex justify-center desktop:w-[15%] desktop:tracking-widest md:w-[20%] font-bold">
                <Link onClick={() => cart.closeCart()} to="/"><h1 className="desktop:text-xl 2xl:text-sm py-2 px-2 border-2 border-white md:text-xl md:mt-1 md:ml-4 ml-10 mt-4">K E E P M O V I N G</h1></Link>
            </div>
            <div className="hidden md:flex tracking-widest bg-black text-white justify-start h-10 items-end font-normal md:gap-3 gap-6 text-base uppercase">
                <BrandDropDown />
                <Link to="/newarrivals"><p>LATEST</p></Link>        
                {contextcategories.map(menu => <HeaderDropdown key={menu.id}  categories={menu.categories}/>)}
                <p>SALE</p>
            </div>
            <div className="flex ml-6 justify-end w-auto items-center mt-4 font-semibold tracking-[2px] pr-4 mr-4 text-xs gap-4">
                <SearchBar/>
                <Link to={validateroute}> <VscAccount size={25}/> </Link> 
                <Link to="/account/wishlist"> <AiOutlineHeart size={25}/></Link>
                <CartSlider/>
            </div>
            
        </div>


</div>
  )
}

export default DesktopHeader