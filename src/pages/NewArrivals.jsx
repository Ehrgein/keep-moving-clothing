import React, {Suspense} from 'react'
import AllNew from '../components/Products/AllNew'
import Header from '../components/Header'
import NewsLetter from '../components/NewsLetter'
import Loading from './Loading'


const LazyAllNew = React.lazy(() => import ('../components/Products/AllNew'))

function NewArrivals() {


  return ( 
    <div >
        <Header/>
        <Suspense fallback={<Loading/>}>
          <LazyAllNew/>
        </Suspense>
        <NewsLetter/>
    </div>
  )
}

export default NewArrivals