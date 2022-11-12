import React, {Suspense} from 'react'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import AllProdByCat from '../components/Products/AllProdByCat'
import Loading from './Loading'



function Products() {
  return (
    <div className=''>
        <Header/>
        <Suspense fallback={<Loading/>}>
          <AllProdByCat/>
        </Suspense>
        <NewsLetter/>
    </div>
  )
}

export default Products