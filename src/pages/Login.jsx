import React from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import LoginForm from '../components/Login/LoginForm'

function login() {
  return (
        <div>
            <Header/>
            <LoginForm/>
            <NewsLetter/>
        </div>
  )
}

export default login