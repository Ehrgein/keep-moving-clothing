import React, {useContext, useEffect, useState} from 'react'
import {useParams} from "react-router-dom"
import {ProductsContext, UserContext} from '../../App'
import Header from '../Header'
import {Link} from 'react-router-dom'
import { CartContext } from '../Cart/CartFunctionality'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'
import {FiHeart} from 'react-icons/fi'
import { IconContext } from 'react-icons'

const wishitems = JSON.parse(localStorage.getItem("wish"))

function ProductInfo() {

    const [wishlist, setwishList] = useState([])
    const [wishstatus, setWishStatus] = useState(wishitems)

    let {productinfo} = useParams()
    let {productscategory} = useParams()

    const productscontext = useContext(ProductsContext)
    const usercontext = useContext(UserContext)
    const cart = useContext(CartContext)

    const AddCart = () => {
      cart.openCart()
      cart.addOneToCart(productinfo)

    }


      
    const filtered = cart.wishitems.filter(item => item.id == productinfo)

    useEffect(() => {

      setwishList[wishstatus]
      
        
    }, [cart.wishitems])  
 



  return (
    <div className=''> 
        <div className='hidden md:flex w-full h-auto bg-white justify-end flex-col flex-columns-2 desktop:items-end 4k:items-center mt-10 mb-10 ml-14'>
            {productscontext.map(item => (
            item.id == productinfo ? 
            <div key={item.id} className='flex'>
                <div className='flex justify-center'>
                    <img className='h-[690px] w-[690px]'src={item.prod_img}/>
                 </div>
                <div className='flex flex-col ml-20 mt-14'>
                    <h4 className='font-bold text-4xl capitalize w-[800px] flex'>{item.name}</h4>
                    
                    {
                    filtered[0]?.id === productinfo ? 
                    
                    <button  className='ease-in duration-500' onClick={() => cart.deleteFromWish(productinfo)}>
                      <AiFillHeart className='ease-in duration-500' size={35}/>
                    </button>
                      : 
                    <button className='' onClick={() => cart.addToWishList(productinfo)}> 
                    <IconContext.Provider value={{color:'black'}}>
                      <FiHeart  className='heart' size={35}/>
                    </IconContext.Provider>
                    </button> }




                    <Link to={`/collection/${item.brand}`}><h1 className='mt-2 capitalize text-xl'>{item.brand}</h1></Link>
                    <h1 className='flex mt-4font-bold text-xl mt-4'> ${item.price}</h1>
                    <h1 className='mt-4 text-2xl tracking-widest'>S M L XL</h1>
                    <p>{usercontext.user}</p>
                    {item.stock > 1 ? 
                    <div className='flex'>
                      <div className='rounded-full bg-green-500 w-[20px] h-[20px] mt-6'></div> 
                      <p className='mt-[20px] ml-2'>In stock</p>
                    </div>
                    :
                    <div className='flex'>
                    <div className='rounded-full bg-red-500 w-[20px] h-[20px] mt-6'></div> 
                      <p className='mt-[20px] ml-2'>Out of stock</p>
                    </div>
                    }
                    <button onClick={AddCart}
                    className='uppercase mt-8 text-center text-2xl  bg-[#1f2021] text-white font-black h-12 1 py-1 w-[450px]'>
                    add to cart</button>
                    <h4 className='mt-2 text-center text-2xl bg-yellow-500 text-black h-12 py-1 w-[450px]'> Buy with Paypal</h4>
                  </div>

            </div> 
            : 
            null
            
        ))}

        </div>

        {/*Mobile starts here*/}
        
        
        <div className='md:hidden'>
          {productscontext.filter(item => item.id == productinfo).map(item=>
          <div key={item.id}>
            <div  className='mt-6 mx-6'>
              <img src={item.prod_img}/>
            </div>
          <div className='flex justify-center my-2 items-center text-center flex-col'>
            <h1 className='flex-start items-start text-2xl font-bold capitalize'> {item.name}</h1>
            <h1 className='mt-2 uppercase text-lg font-normal '>{item.brand}</h1>
            <h1 className='mt-2 font-bold text-lg'>$ {item.price}</h1>
          </div>
          <div className='flex justify-center'>
            <div className={item.stock === 0 ? 'mt-4 bg-red-500 w-6 h-6 rounded-full' : 'mt-5 bg-green-500 w-5 h-5 rounded-full'}/>
            {item.stock == 0 ? <p className='mt-3 mx-1 h-6 text-lg'> Out of Stock</p> 
            : 
            <p className='mt-4 mx-1 h-6 text-lg'>In stock, ready to ship</p>}
            </div>
            <div className=''>
                <h2 className='uppercase mt-6 text-center text-2xl bg-[#1f2021] text-white font-black h-12  py-1 w-[390px] mx-3'> add to cart</h2>
                <h2 className='mt-3 text-center text-2xl  h bg-yellow-500 text-black  h-12 px-2 py-1 w-[390px] mx-3'> Buy with Paypal</h2>
            </div>
          </div>)}
          
        </div>
    </div>
  )
}

export default ProductInfo