import React, {useState, useRef} from 'react'
import {BsGoogle, } from 'react-icons/bs'
import {IconContext} from 'react-icons'
import axios from 'axios'


function SignUp() {

    const [username, setUsernameReg] = useState("")
    const [password, setPasswordReg] = useState("")
    const [email, setEmailReg] = useState("")
  
    const nameRef = useRef(null)
    const passwordRef = useRef(null)
    const mailRef = useRef(null)

    const handleRegister = (event) => {
        axios.post("http://localhost:3001/userdata", {
            username: username,
            password: password,
            email: email,
        }).then((response) =>{
            console.log(response);
            event.preventDefault()
            // event.target.reset()
            nameRef.current.value = ''
            passwordRef.current.value = ''
            mailRef.currentvalue = ''
            console.log(username)
        })
    }


    console.log(username)



  return (
    <div>
        <div className='h-[80vh] flex justify-center'>
            <div className='flex flex-col mt-12 items-center text-center h-24'>
                <div className='mt-12 flex justify-center w-[400px] h-auto mb-4'>
                    <h3 className='text-2xl font-bold'> Create Account</h3>
                </div>
                <form onSubmit={handleRegister} className='flex flex-col justify-start text-black w-[400px] h-auto'>
                    <input ref={nameRef} name="username" onChange={(e) => {setUsernameReg(e.target.value)}} placeholder='Username' className='pl-2 inpborder mt-2 h-14'/>
                    <input ref={passwordRef} name="password" onChange={(e) => {setPasswordReg(e.target.value)}} type='password' autoComplete="off" placeholder='Password' className='placeholder:pl-2 inpborder mt-2 h-14 pl-2'/>
                    <input ref={mailRef} name="email" onChange={(e) => {setEmailReg(e.target.value)}} placeholder='Email' className='pl-2 inpborder mt-2 h-14'/>
                    
                    <button  type="submit" className='text-xl uppercase font-sans tracking-wide'>create</button>
                </form> 



            </div>
        </div>
    </div>
  )
}

export default SignUp