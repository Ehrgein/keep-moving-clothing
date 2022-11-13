import React, {useContext, useEffect} from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import LoginForm from '../components/Login/LoginForm'
import { UserContext } from '../App'
import { useNavigate} from 'react-router-dom' 
import Account from './Account'
import AccountInformation from '../components/Account/AccountInformation'

function Login() {

    const status = useContext(UserContext)  

    
  return (
      <div>
        <Header/>
        {status.isLoggedIn ? <AccountInformation/> : <LoginForm/>}
        <NewsLetter/>
      </div>


  )
}

export default Login