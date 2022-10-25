import React, {useState} from 'react'
import {BsGoogle, } from 'react-icons/bs'
import {IconContext} from 'react-icons'
import axios from 'axios'


function SignUp() {

    const [username, setUsernameReg] = useState("")
    const [password, setPasswordReg] = useState("")
    const [email, setEmailReg] = useState("")
  

    const handleRegister = () => {
        axios.post("http://localhost:3001/userdata", {
            username: username,
            password: password,
            email: email,
        }).then((response) =>{
            console.log(response);
        })
    }


    





  return (
    <div>
        <div className='h-[80vh] flex justify-center'>
            <div className='flex flex-col mt-12 items-center text-center h-24'>
                <div className='mt-12 flex justify-center w-[400px] h-auto mb-4'>
                    <h3 className='text-2xl font-bold'> Create Account</h3>
                </div>
                <form className='flex flex-col justify-start text-black w-[400px] h-auto'>
                    <input name="username" onChange={(e) => {setUsernameReg(e.target.value)}} placeholder='Username' className='pl-2 inpborder mt-2 h-14'/>
                    <input name="password" onChange={(e) => {setPasswordReg(e.target.value)}} type='password' autoComplete="off" placeholder='Password' className='placeholder:pl-2 inpborder mt-2 h-14 pl-2'/>
                    <input name="email" onChange={(e) => {setEmailReg(e.target.value)}} placeholder='Email' className='pl-2 inpborder mt-2 h-14'/>
                </form> 
                <div className='flex w-[400px] justify-center h-24   bg-[#1f2021] px-2 py-2 text-white mt-4'>
                    <button onClick={handleRegister} className='text-xl uppercase font-sans tracking-wide'>create</button>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SignUp