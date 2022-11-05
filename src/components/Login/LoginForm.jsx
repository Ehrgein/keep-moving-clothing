import React, {useState, useEffect, createContext, useContext} from 'react'
import {BsGoogle, } from 'react-icons/bs'
import {IconContext} from 'react-icons'
import axios from 'axios'
import { Link, redirect, useNavigate, Navigate} from 'react-router-dom'
import { UserContext } from '../../App'

function LoginForm() {

    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


    const usercontext = useContext(UserContext)

    const [loginMessage, setMessage] = useState("")


    const handleLogin = () => {                    
        axios.post("http://localhost:3001/login", {
            username: username,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                setMessage(response.data.message)
            } else{
                usercontext.setUser(response.data[0].username)
                usercontext.setIsLoggedIn(true)
                navigate("/account")
                window.location.reload()
            }
        })
    }

    console.log()


      
  return (
    <div>


        <div className='h-[80vh] flex justify-center'>
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
                    <h3 className='text-4xl font-bold'> Login</h3>
                </div>
                <form className='flex flex-col justify-start text-black w-[400px] h-auto'>
                    <input  placeholder='Username' onChange={(e) => setUsername(e.target.value) } className='pl-2 inpborder mt-2 h-14'/>
                    <input  placeholder='Password' type='password' onChange={(e) => setPassword(e.target.value) } className='pl-2 inpborder mt-2 h-14'/>
                </form>
                <div className='flex justify-start font-bold text-lg h-12 w-[400px] mt-2'>
                    <h1> Forgot your password?</h1>
                </div>
                <div className='flex w-[400px] justify-center h-24   bg-[#1f2021] px-2 py-2 text-white mt-4'>
                    <button onClick={handleLogin} className='text-2xl uppercase font-sans tracking-wide'> Sign In </button>
                </div>
                <div className='flex w-[400px] justify-center h-24   bg-[#1f2021] px-2 py-2 text-white mt-4'>
                    <button className='text-2xl uppercase font-sans tracking-wide'>Sign Out</button>
                </div>
                <div className='flex w-[400px] justify-start h-14 px-1 py-1 text-black mt-2 text-lg font-normal'>
                    <p className='pr-2'> No account ? </p>
                    <Link to="/account/register"> <button className='tracking-wide text-black border-black border-b-2'> Register here </button> </Link>
                </div>
                <div className='flex w-[400px] justify-center h-14 px-1 py-1 mt-2 text-lg font-normal text-red-500'>
                    <p className='pr-2'> {loginMessage} </p>
                </div>

              
            </div>
        </div>
        </div>
  )
}

export default LoginForm