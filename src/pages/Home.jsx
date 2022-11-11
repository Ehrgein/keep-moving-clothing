import React, {useContext, Suspense} from 'react'
import Header from '../components/Header'
import NewHero from '../components/NewHero'
import Contentone from '../components/Contentone'
import NewsLetter from '../components/NewsLetter'


const LazyHero = React.lazy(() => import ('../components/NewHero'))


function Home() {




  return (
    <div>
        <Header/>
        <Suspense fallback={<div className='flex justify-center items-center h-[80vh]'>Loading... :D</div>}>
          <LazyHero/>
        </Suspense>
        <Contentone/>
        <NewsLetter/>
    </div>
  )
}

export default Home