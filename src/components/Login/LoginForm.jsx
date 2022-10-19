import React from 'react'
import {BsGoogle, } from 'react-icons/bs'
import {IconContext} from 'react-icons'

function LoginForm() {
  return (
    <div>
        <div className='h-[60vh] flex justify-center'>
            <div className='flex flex-col mt-12 items-center text-center h-24'>
                <div className='flex bg-[#dd4b39] h-[50px] w-[400px] rounded-md'>
                    <IconContext.Provider value={{ color: "white"}}>                
                        <BsGoogle className='ml-2 my-1 ' size={35}/> 
                    </IconContext.Provider>
                <h1 className='ml-2 text-white text-start text-xl  px-2 py-2 bg-[#DE1B1B] w-full rounded-md'>
                    Sign in with Google
                </h1>
                </div>
                <div className='flex bg-[#dd4b39] h-[50px] w-[400px] mt-4 rounded-md'>
                    <IconContext.Provider value={{ color: "white"}}>                
                        <BsGoogle className='ml-2 my-1 ' size={35}/> 
                    </IconContext.Provider>
                <h1 className='ml-2 text-white text-start text-xl  px-2 py-2 bg-[#DE1B1B] w-full rounded-md'>
                    Sign in with Google
                </h1>
                </div>
                <div className='mt-12 flex justify-start w-[400px] h-auto'>
                    <h3 className='text-4xl font-bold ju'> Login</h3>
                </div>
                <div className='flex flex-col justify-start text-black w-[400px] h-auto'>
                    <input placeholder='Username' className='placeholder:pl-2 border-black border-opacity-50 border-2 mt-2 h-14'/>
                    <input placeholder='Password' className='placeholder:pl-2 border-black border-opacity-50  border-2 mt-2 h-14'/>
                </div>
                <div className='flex justify-start font-bold text-lg h-12 w-[400px] mt-2'>
                    <h1> Forgot your password?</h1>
                </div>
                <div className='flex w-[400px] justify-center h-24   bg-[#1f2021] px-2 py-4 text-white mt-4'>
                    <button className='text-2xl uppercase font-sans'>Sign In</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LoginForm