import React, {useContext} from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import {VscAccount} from 'react-icons/vsc'
import AccountInformation from '../components/Account/AccountInformation'

function Account() {

    // const {loggedIn, setLoggedin} = useContext(LoginContext)
    // const {loggedUser, setLoggedUser} = useContext(LoginContext)



  return (

    <div className=''>
        <Header/>
        <AccountInformation/>
        <NewsLetter/>
    </div>
    
  )
}

export default Account