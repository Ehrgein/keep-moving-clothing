import React from 'react'

function NewsLetter() {
  return (
    <div className='md:hidden'>
        <div className='mt-12 border-0 border-t text-xl'>
        <h1 className='mt-6 text-xl mx-4 text-center font-medium'> Sign up for Email </h1>
        <p className='text-sm font-normal mt-3 mx-4 text-center'>Sign up to receive Keep Moving emails and get notified as soon as our new merch hits the stores!</p>
        <h1 className=' mt-4 mx-4 font-medium text-center'>Email Address</h1>
        <input  className='border mt-3 mx-4 border-black w-[92%] text-black font-extralight text-base mb-3 h-10 pl-2'/>
        <div className='justify-center flex w-full'>
        <button className='bg-black text-white text-center text-base font-bold w-[92%] mb-4 h-10'> Submit</button>
        </div>
        <div className='text-sm text-center border mt-10'>
            <h1 className='mt-2 font-extralight'>About</h1>
            <h1 className='mt-2 font-extralight'>Contact Us</h1>
            <h1 className='mt-2 font-extralight'> FAQ </h1>
            <h1 className='mt-2 font-extralight'>Payments </h1>
            <h1 className='mt-2 font-extralight'>Shipping</h1>
            <h1 className='mt-2 font-extralight'>Return Policy</h1>
            <h1 className='mt-2 font-extralight'>Privacy Policy</h1>
            <h1 className='mt-2 font-extralight'>Terms & Conditions</h1>
            <h1 className='mt-2 font-extralight'>Gift Cards</h1>
            <h1 className='mt-2 font-extralight'>Terms of Service</h1>
            <h1 className='mt-2 font-extralight'>Refund Policy</h1> 
        </div>
        </div>
    </div>
  )
}

export default NewsLetter