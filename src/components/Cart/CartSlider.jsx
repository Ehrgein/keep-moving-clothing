import React, {useState, useContext, useRef, useEffect} from 'react'
import {AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import {BsPlus} from 'react-icons/bs'
import {ProductsContext} from '../../App'
import {CartContext} from '../Cart/CartFunctionality'
import { useParams } from 'react-router-dom'
import {TiDeleteOutline} from 'react-icons/ti'


function CartSlider() {

    const productscontext = useContext(ProductsContext)
    const cart = useContext(CartContext)






  return (
    <div>
        <div onClick={() => cart.handleCart()} className="mr-4 text-base flex gap-4">
            <AiOutlineShoppingCart size={25}/> 
        </div>  
        <div className={cart.cartSlider ? "testing  w-[20%] right-0 text-black bg-white ease-in-out duration-500" : "fixed ease-in-out duration-1000 right-[-100%] h-[100%] top-0"}>
            <div className='text-black text-xl flex mt-4 ml-4 justify-between text-center items-start'>
                <h1 className=''> 
                    CART
                </h1>
                <h1 onClick={() => cart.handleCart()} className='mx-6 text-base text-thin'>
                    X
                </h1>
            </div>
            <div className='mt-10 mx-4 cart-anim overflow-y-scroll'>
                        {cart.items.map(item =>
                        <div key={item.id} className='cart-anim flex justify-start  cartborder' >
                            <div className='my-4 w-[100px] h-[100px]'>
                                <img  src={item.img} className='w-[100px] h-[100px] '/>
                            </div>
                            <div className='uppercase font-medium ml-2 my-6 tracking-wide'>
                                <div className='h-[65%]'>
                                    <h1>{item.name}</h1>
                                </div>
                                <div className='flex items-end gap-6 '>
                                    <AiOutlineMinus onClick={() => cart.removeOneFromCart(item.id)}/>
                                    <p>{cart.getProductQuantity(item.id)}</p>
                                    <AiOutlinePlus onClick={ () =>  cart.addOneToCart(item.id)}/>
                                    <p onClick={() => cart.addOneToCart(item.id)}></p>
                                </div>
                                <div className='ml-4 my-1 w-[55px]'>
                                    <button  onClick={() => cart.deleteFromCart(item.id)}className='uppercase'> remove</button>
                                </div>
                            </div>
                        </div>
                            )}
                            <div className='flex justify-between topborder mt-2 uppercase text-sm'>
                                <h1 className='mt-2'>Subtotal</h1>
                                <h1 className='mt-2'>$ {cart.getTotalCost()}</h1>
                            </div>
                            <div className='flex justify-center mt-12 '>
                                <button className='bg-black text-white tracking-widest uppercase font-bold px-20 py-2 text-lg'>Checkout</button>
                            </div>
                    </div>  
                </div>
            </div>

  )
}

export default CartSlider