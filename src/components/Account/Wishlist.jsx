import React, {useState, useContext} from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { CartContext } from '../Cart/CartFunctionality'
import DesktopHeader from '../DesktopHeader'
import {Link} from 'react-router-dom'

function Wishlist() {

  const cart = useContext(CartContext)

  console.log(cart.wishitems)
  
  const addWish = (id) => {

    cart.addOneToCart(id)
    cart.openCart()

  }

  
  return (
    
    <div>
        <div className='h-auto bg-white w-full flex mb-20 mt-10 justify-start flex-col'>
          <div className='flex flex-col items-center gap-4 justify-start'>
            <AiOutlineHeart size={30}/>
            <h3 className='font-bold text-lg'> My Wishlist ({cart.wishitems.length}) </h3>
          </div>
          <div className='flex flex-row flex-wrap justify-center h-auto mt-10'>
            {cart.wishitems.map(wishitem => 
            <div className='flex flex-col  items-center justify-center w-[400px] h-[420px] capitalize mx-2 my-10'>
              <Link to={`/products/${wishitem.categories}/${wishitem.id}`}><img className='w-[250px] h-[250px]' src={wishitem.img}/></Link>
              <p className='text-lg my-2 tracking-wide font-normal'> {wishitem.name}</p>
            <p className='text-lg  tracking-wide font-normal text-gray-600'> {wishitem.brand}</p>
              <p className='text-lg mt-1 tracking-wide font-normal'>$ {wishitem.price}</p>
              <button onClick={() => addWish(wishitem.id)}
                className='uppercase mt-3 text-center text-2xl  bg-[#1f2021] text-white font-black h-12 w-[320px] py-2'>
                add to cart
              </button>
            </div>
            )}
          </div>
        </div>
    </div>
  )
}

export default Wishlist