import React, {useContext, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Login from './Login'
import axios from 'axios'



const useAuth = () => {

  const loggedin = useContext(UserContext)
  const validate = loggedin.user
 
  return validate

}


function ProtectedRoutes() {

    const isAuth = useAuth()

  return isAuth ? <Outlet/> : <Login/>
  
}


export default ProtectedRoutes