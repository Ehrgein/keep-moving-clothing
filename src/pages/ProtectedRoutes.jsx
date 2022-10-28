import React, {useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Home from './Home'
import Login from './Login'



const useAuth = () => {

  const loggedin = useContext(UserContext)
   
  console.log(loggedin.isLoggedIn)
  return loggedin.user

}


function ProtectedRoutes() {

    const isAuth = useAuth()
    console.log(isAuth)

  return isAuth ? <Outlet/> : <Login/>
  
}


export default ProtectedRoutes