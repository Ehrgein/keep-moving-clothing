import React, {useContext, Suspense, useState} from 'react'
import Header from '../components/Header'
import NewHero from '../components/NewHero'
import Contentone from '../components/Contentone'
import NewsLetter from '../components/NewsLetter'
import Loading from './Loading'

const LazyHero = React.lazy(() => import ('../components/NewHero'))
const LazyContent = React.lazy(() => import ('../components/Contentone'))


function Home() {

const [ismainLoaded, setisMainLoaded] = useState(false)


  return (
    <div>
        <Header/>
        <Suspense fallback={<Loading/>}>
          <LazyHero/>
          <LazyContent/>
        </Suspense>
        <NewsLetter/>


    </div>
  )
}

export default Home