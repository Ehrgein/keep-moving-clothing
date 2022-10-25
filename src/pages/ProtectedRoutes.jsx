import React, {useContext} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { UserContext } from '../App'
import Home from './Home'
import Login from './Login'



const useAuth = () => {

  const loggedin = useContext(UserContext)
   
  return loggedin.isLoggedIn

}


function ProtectedRoutes() {

    const isAuth = useAuth()

  return isAuth == true ? <Outlet/> : <Navigate to="/login"/>
  
}


export default ProtectedRoutes