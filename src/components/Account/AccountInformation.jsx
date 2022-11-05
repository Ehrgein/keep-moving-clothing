import React, {useContext, useState} from 'react'
import { ProductsContext, UserContext } from '../../App'
import {VscAccount} from 'react-icons/vsc'
import axios from 'axios'
import {useNavigate, Link} from 'react-router-dom'
import { useEffect } from 'react'



function AccountInformation() {

  

    
    const productspurchased = useContext(ProductsContext)

    const usercontext = useContext(UserContext)

    const navigate = useNavigate()
    
    const handleLogout = () => {
        axios.get("http://localhost:3001/logout").then((response)=>{
            usercontext.setIsLoggedIn(false)
            navigate("/login")
            window.location.reload()
        })
    }



   
    
  return (
    <div>
        <div className='flex justify-center h-[15vh]'>
            <div className='w-full mt-10 flex flex-col items-center capitalize'>
                    <VscAccount size={35}/>
                    <h1 className='mx-2 my-2 font-bold'> My Account</h1>
                    <button className='bg-black px-4 py-2 text-white font-bold'>Get items</button>
                    <h1 className='mx-2 my-2'>Welcome {usercontext.user} </h1>
            </div>
        </div>
            <div className='flex flex-col-2 pb-6  mb-6 justify-center'>
                <div className='flex h-auto flex-col items-end mb-4 w-[25vw]'>
                    <div className='h-auto w-auto'>
                        <ul className='h-auto w-auto ml-4 text-2xl font-medium'>
                            <li className='my-6 botbordercustom w-auto h-auto'> Account Info </li>
                            <li className='my-6 botbordercustom'> My Address </li>
                            <Link to="wishlist"><li className='my-6 botbordercustom'> My Wishlist </li></Link>
                            <Link to="orders"><li className='my-6 botbordercustom'> My Orders </li></Link>
                            <li onClick={handleLogout} className='my-6 botbordercustom'> Sign Out </li>
                        </ul>
                    </div>
                </div>
                <div className='flex capitalize font-bold text-lg items w-[60vw] justify-start ml-20 flex-col'>
                    <div className='flex flex-col'>
                        <h1 className='text-xl my-2'> My details </h1>
                    </div>
                    <div className='flex flex-col my-4 font-medium'>
                    <h1 className='text-lg'> Name: {usercontext.user} </h1>
                    <h1 className='text-lg items-end'> Email Address: </h1>
                    </div>

                </div>  
            </div>        
 
    </div>
  )
}

export default AccountInformation

{/* <div className='flex w-[900px] h-auto mx-12 justify-start py-4 pr-4 text-center'>
<div className='flex w-auto h-auto pl-8  mt-4 flex-col'>
    <img className='w-[120px] h-[120px]' src={productspurchased[35]?.prod_img}/>
    <h1 className='flex capitalize text-center'>{productspurchased[35]?.name}</h1>
    <h1 className='flex capitalize text-center'>{productspurchased[35]?.brand}</h1>
    <h1 className='flex capitalize'>$ {productspurchased[35]?.price}</h1>
    <button>View Purchase ticket</button>
</div>
</div> */}