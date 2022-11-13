import React from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'

function PageNotFound() {
    
  return (
    <div>
        <Header/>
        <div className='h-[60vh] w-[100vw] flex justify-center items-center'>
            <div className='text-4xl mb-20'>
                ERROR 404 PAGE NOT FOUND
            </div>
        </div>
        <NewsLetter/>
    </div>
  )
}

export default PageNotFound