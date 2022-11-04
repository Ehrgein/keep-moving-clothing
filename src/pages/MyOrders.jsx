import React from 'react'
import NewsLetter from '../components/NewsLetter'
import Header from '../components/Header'
import Orders from '../components/Account/Orders'

function MyOrders() {
  return (
    <div>
        <Header/>
        <Orders/>
        <NewsLetter/>
    </div>
  )
}

export default MyOrders