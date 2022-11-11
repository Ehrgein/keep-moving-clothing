import React from 'react'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
import {FcCheckmark} from 'react-icons/fc'

function CheckoutModal({purchasemodal, setonPurchasemodal}) {
    


  return (
    
    <div className='checkoutmodal fixed  inset-0 z-55 overflow-y-scroll'>
        <div className='h-screen flex justify-center  items-center text-black text-2xl ' >
          <motion.div className='flex flex-col relative border-orange-500 border-4 rounded-xl justify-center bg-white md:py-12 py-8  md:px-24 px-4 cart-anim' >
          <div className='absolute top-0 right-0 mr-1 mt-1'>
            <button onClick={() => setonPurchasemodal(false)} >Close</button>
          </div>
            <div className='flex flex-col justify-center items-center w-[100%] opacity-100 h-[100%]'>
                {purchasemodal}
                <div className='flex'>
                    <h1 className='h-8'>Purchase successful, thank you!</h1>
                    <FcCheckmark className='h-8 w-8 ml-2'/>
                </div>
                <h1 className='mt-8'>You can find your purchase details <Link className='text-[#0000FF]' to={`/account/orders`}>here</Link></h1> 
            </div>
          </motion.div>
        </div>
    </div>
  )
}

export default CheckoutModal