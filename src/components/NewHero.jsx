import React, {useState, useContext, Suspense} from 'react'
import glasses1 from '../assets/touseglassesopt.webp'
import glasses2 from '../assets/touseglasses2opt.webp'
import {Link} from 'react-router-dom'
import { BrandsContext } from '../App';
import northface from '../assets/northfacemobile.webp'



function  NewHero() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    const brands = useContext(BrandsContext)


  return (
    <div>
        <div className='hidden md:flex 4k:max-w[2560px] 4k:max-h[1132px] relative'>
                <img className='4k:w-[50%] 4k:h-[1050px] desktop:w-[50%] desktop:h-[800px] laptopL:h-[650px] laptop:w-[50%] laptop:h-[550px] md:h-[450px] laptop:block md:hidden'
                alt='men wearing sunglasses' src={glasses1}/>
                <div className='absolute 4k:right-[46%] top-[55%] desktop:top-[55%] desktop:right-[45.5%] laptopL:right-[44.5%] laptop:right-[43%]
                 font-bold 4k:px-12 desktop:px-12 4k:py-3 desktop:py-2 laptopL:px-8 laptopL:py-1 laptop:px-8 laptop:py-1
                bg-black text-white hover:bg-white hover:text-black ease-in duration-300'>
                  <h1 className='4k:text-3xl desktop:text-2xl laptopL:text-2xl laptop:text-xl'>Shop now</h1>
                </div>
                <div className='absolute top-[45%] 4k:right-[36%] desktop:right-[35%] laptopL:right-[34%] laptop:right-[30%]  font-bold px-12 py-3  text-white'>
                  <h1 className='4k:text-6xl desktop:text-5xl laptopL:text-4xl laptop:text-3xl'>Garret Leight Collection</h1>
                </div>
                <img alt='women wearing sunglasses' 
                className='4k:w-[50%] 4k:h-[1050px] desktop:w-[50%] desktop:h-[800px]
                laptopL:h-[650px] laptopL:w-[50%] laptop:w-[50%] laptop:h-[550px] laptop:block md:hidden' src={glasses2}/>
        </div>

 



        <div className="laptop:hidden relative">
            <img className='w-full md:h-[1100px]' src={northface} alt="woman wearing the north face hoodie"/>
            <div className="absolute mobilexs:top-[85%] mobilexs:left-[22%] mobilem:left-[25%] mobileL:left-[25%]">
              <span className="relative text-white bg-[#171816f5] mobileL:py-3 py-1 px-1 mobilem:px-3 mobilexs:px-3 mobilexs:py-2">
                  <Link
                  to={`/collection/the north face`}
                  className="border-white  text-base mobilem:text-lg mobileL:text-xl"
                  >
                  SHOP THE NORTH FACE
                  </Link>
              </span>
            </div>
            <div className="absolute mobilexs:top-[78%] mobilexs:left-[32%] mobilem:left-[37%] mobileL:left-[38%]">
              <span className="relative text-white mobileL:py-3 py-1 px-1 mobilem:px-3 mobilexs:px-3 mobilexs:py-2 mobileL:text-lg">Available now</span>
            </div>
        </div>
    </div>
  )
}

export default NewHero