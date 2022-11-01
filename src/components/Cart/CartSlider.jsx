import React, {useState, useContext, useRef, useEffect} from 'react'
import {AiOutlineClose, AiOutlinePlus, AiOutlineMinus, AiOutlineShoppingCart} from 'react-icons/ai'
import {IconContext} from 'react-icons'
import {BsPlus} from 'react-icons/bs'
import {ProductsContext, UserContext} from '../../App'
import {CartContext} from '../Cart/CartFunctionality'
import { useParams } from 'react-router-dom'
import {TiDeleteOutline} from 'react-icons/ti'
import axios from 'axios'



function CartSlider() {

    const productscontext = useContext(ProductsContext)
    const cart = useContext(CartContext)
    const usercontext = useContext(UserContext)


  let idsquant = cart.items.map(item => ({id: Number(item.id), quant: item.quantity}))
  const idarray = idsquant.map(({id}) => id)  // id first, quantity second
  const values = idsquant.map(Object.values)


  

  const handleCheckout = () => {
    axios.post("http://localhost:3001/checkout", {
            userid: usercontext.userid,
            values: values
    }).then((response) => {
        console.log(response);
    })
    
  }


    console.log(values);
    // const newvalues = values.map(row => row.push(2))



    // console.log(arrayofarrays)

    // const handleCheckout = () => {
    //     axios.post("http://localhost:3001/checkout"), {
    //         userid: usercontext?.userid,
    //         quantity: arrayofarrays
    //     }.then((response) => {
    //         console.log(response);
    //     })
    // }


    // console.log(usercontext.userid)
    // console.log(userid)

  return ( 
    <div>
        <div onClick={() => cart.handleCart()} className="md:mr-4 mobilexs:mr-2 mobilem:mr-2 text-base flex gap-4">
            <AiOutlineShoppingCart size={25}/> 
        </div>  
        <div className={cart.cartSlider ?
             "fixed top-0 bottom-0 right-0 h-screen desktop:w-[20%] laptopL:w-[30%] mobilexs:w-[80%] text-black bg-white ease-in-out duration-700 " 
             : 
             " fixed top-0 bottom-0 h-screen desktop:w-[20%] mobilexs:w-[80%] ease-in-out duration-700 right-[-100%]"}>
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
                                <button onClick={handleCheckout} className='bg-black text-white tracking-widest uppercase font-bold px-20 py-2 text-lg'>Checkout</button>
                            </div>
                    </div>  
                </div>
            </div>

  )
}

export default CartSlider