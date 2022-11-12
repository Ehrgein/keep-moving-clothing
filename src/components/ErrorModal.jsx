import React from 'react'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'

function ErrorModal({onerrormodal, setonErrorModal, handleCart}) {

    const CloseModal = () => {
        handleCart()
        setonErrorModal(false)
    } 

  return (
    <div className='checkoutmodal fixed  inset-0 z-55 overflow-y-scroll'>
        <div className='h-screen flex justify-center  items-center text-black text-2xl ' >
            <motion.div className='flex flex-col relative border-orange-500 border-4 rounded-xl justify-center bg-white md:py-12 py-8  md:px-24 px-4 cart-anim' >
            <div className='absolute top-0 right-0 mr-1 mt-1 4k:text-3xl tablet:text-xl mobilexs:text-lg font-medium'>
                <button onClick={CloseModal}>Close</button>
             </div>
          <div className='flex flex-col justify-center items-center w-[100%] opacity-100 h-[100%] font-medium'>
              {onerrormodal}
              <div className='flex'>
                  <h1 className='laptop:h-8 tablet:h-7 mobilexs:h-14 font-medium
                  4k:text-3xl tablet:text-xl mobilexs:text-base 4k:my-6 tablet:my-0 mobilexs:mt-6'>Please log in to complete your purchase 
                  <Link to={"/login"} onClick={CloseModal} className='text-[#0000FF] 
                  4k:text-3xl tablet:text-xl mobilem:text-lg mobilexs:text-base ml-2 font-medium'>here</Link>
                  </h1>


              </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ErrorModal