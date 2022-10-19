import React from 'react'
import {RiArrowRightSLine} from 'react-icons/ri'
import {SiVisa, SiMastercard, SiDiscover} from 'react-icons/si'
import {FaCcPaypal, FaTiktok, FaCcMastercard} from 'react-icons/fa'
import { BsPaypal, BsTwitter, BsFacebook, BsInstagram } from 'react-icons/bs'

function NewsLetter() {
  return (
    

    <div className='bg-black'>
      <div className='hidden md:flex justify-between w-full bg-black'>
        <div className='flex h-72 w-[25%] bg-black text-white col-span-4 pb-4 flex-col justify-start items-start'>
          <h1 className='mb-4 mt-4 ml-8 uppercase text-lg font-bold text-[#aaa]'>
            Our Store
          </h1>
          <ul>
            <li className='ml-8'>3601 Lyon S </li>
            <li className='ml-8'>San Francisco </li>
            <li className='ml-8'> California</li>
            <li className='ml-8'> AC9412</li>
            <li className='ml-8'> United States </li>
            <li className='ml-8'> Mon - Fri 9.30am - 4:30pm</li>
            <li className='ml-8'> Sat & Sun - Closed </li>
          </ul>
        </div>
        <div className='flex h-72 w-[25%] bg-black text-white col-span-4 flex-col justify-start items-start'>
          <h1 className='mb-4 mt-4 ml-4 uppercase text-lg font-bold text-[#aaa]'>
            Customer Support
          </h1>
          <ul>
            <li className='ml-4'>
            FAQs
            </li>
            <li className='ml-4 '>
            Payments
            </li>
            <li className='ml-4 '>
            Shipping
            </li>
            <li className='ml-4 '>
            Return Policy
            </li>
            <li className='ml-4 '>
            Privacy Policy
            </li>
          </ul>
        </div>
        <div className='flex h-72 w-[15%] bg-black text-white col-span-4 flex-col justify-start items-start'>
          <h1 className='mb-4 mt-4 ml-4 uppercase text-lg font-bold text-[#aaa]'>
            Fine Print
          </h1>
          <ul>
            <li className='ml-4'>
            Terms of Service
            </li>
            <li className='ml-4 '>
            Terms & Conditions
            </li>
            <li className='ml-4 '>
            Accesibility
            </li>
          </ul>
        </div>
        <div className='flex h-72 w-[36%] bg-black text-white col-span-3 flex-col justify-start items-center'>
          <h1  className='mb-4 mt-4 ml-4 uppercase text-lg font-bold text-[#aaa]'>
            JOIN OUR NEWSLETTER
          </h1>
          <div className='flex border-white'>
          <input placeholder='Enter your Email' className='h-12 desktop:w-96 laptopL:w-60 md:w-48 text-black text-lg pl-2'/>
          <a href="/"><RiArrowRightSLine className='border-white border-2'size={48} /> </a>
          </div>
          <h1  className='mb-4 mt-4 ml-4 uppercase text-lg font-bold text-[#aaa] text-start'>
            Follow Us
          </h1>
          <div className='flex justify-start items-start '>
            <a href='https://www.facebook.com/'><BsTwitter className='mx-2'size={20}/></a>
            <a href='https://www.twitter.com/'><BsFacebook className='mx-2'size={20}/></a>
            <a href='https://www.instagram.com/'><BsInstagram className='mx-2'size={20}/></a>
            <a href='https://www.tiktok.com/'><FaTiktok className='mx-2'size={20}/></a>
          </div> 
        </div>  
      </div>
      <div className='hidden md:flex justify-center h-40  bg-black text-white w-full'>
          <SiVisa className='mx-2'size={40}/>
          <SiMastercard  className='mx-2'size={40}/>
          <SiDiscover className='mx-2' size={40}/>
          <FaCcPaypal className='mx-2' size={40}/>
      </div>





      {/*mobile starts here */}


      <div className='md:hidden bg-white'>
        <div className='mt-12 border-0 border-t text-xl'>
          <h1 className='mt-6 text-xl mx-4 text-center font-medium'> Sign up for Email </h1>
          <p className='text-sm font-normal mt-3 mx-4 text-center'>Sign up to receive Keep Moving emails and get notified as soon as our new merch hits the stores!</p>
          <h1 className=' mt-4 mx-4 font-medium text-center'>Email Address</h1>
          <input  className='border mt-3 mx-4 border-black w-[92%] text-black font-extralight text-base mb-3 h-10 pl-2'/>
          <div className='justify-center flex w-full'>
            <button className='bg-black text-white text-center text-base font-bold w-[92%] mb-4 h-10'> Submit</button>
          </div>
        <div className='text-sm text-center border mt-10'>
            <h1 className='mt-2 font-semibold text-lg'>About</h1>
            <h1 className='mt-2 font-semibold text-lg'>Contact Us</h1>
            <h1 className='mt-2 font-semibold text-lg'> FAQ </h1>
            <h1 className='mt-2 font-semibold text-lg'>Payments </h1>
            <h1 className='mt-2 font-semibold text-lg'>Shipping</h1>
            <h1 className='mt-2 font-semibold text-lg'>Return Policy</h1>
            <h1 className='mt-2 font-semibold text-lg'>Privacy Policy</h1>
            <h1 className='mt-2 font-semibold text-lg'>Terms & Conditions</h1>
            <h1 className='mt-2 font-semibold text-lg'>Gift Cards</h1>
            <h1 className='mt-2 font-semibold text-lg'>Terms of Service</h1>
            <h1 className='mt-2 font-semibold text-lg'>Refund Policy</h1> 
        </div>
        </div>
    </div>
    </div>
  )
}

export default NewsLetter