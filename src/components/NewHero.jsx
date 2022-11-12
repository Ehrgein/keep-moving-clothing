import React, {useState, useContext, Suspense} from 'react'
import glasses1 from '../assets/touseglassesopt.webp'
import glasses2 from '../assets/touseglasses2opt.webp'
import {Link} from 'react-router-dom'
import { BrandsContext, ProductsContext } from '../App';
import northface from '../assets/northfacemobile.webp'



function  NewHero() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

 

  return (
    <div>
        <div className='hidden relative md:flex 4k:max-w[2560px] 4k:max-h[1132px] '>
                <div className='absolute desktopheader top-[-13%] font-bold px-12 py-3  text-white'>
                  <h1 className='4k:text-6xl laptopL:text-5xl laptop:text-4xl'>Garret Leight Collection</h1>
                </div>
                <div className='absolute desktopheader
                 '>
                  <Link to={"designer/garrett Leight"}>
                  <h1 className='text-white hover:text-black  bg-black  hover:bg-white ease-in duration-300
                  font-bold 4k:px-20 desktop:px-12 4k:py-3 desktop:py-2 laptopL:px-8 laptopL:py-1 laptop:px-8 laptop:py-1
                  4k:text-3xl desktop:text-2xl
                   laptopL:text-2xl laptop:text-2xl inline-block'>
                    Shop now
                  </h1>
                  </Link>
                </div>
                <img className='4k:w-[50%] 4k:h-[1050px] desktop:w-[50%] desktop:h-[800px] laptopL:h-[650px] laptop:w-[50%] laptop:h-[550px] md:h-[450px] laptop:block md:hidden'
                alt='men wearing sunglasses' src={glasses1}/>
                <img alt='women wearing sunglasses' 
                className='4k:w-[50%] 4k:h-[1050px] desktop:w-[50%] desktop:h-[800px]
                laptopL:h-[650px] laptopL:w-[50%] laptop:w-[50%] laptop:h-[550px] laptop:block md:hidden' src={glasses2}/>
        </div>

 



        <div className="laptop:hidden relative">
           
            <div className="maintextmobile">
              <span className="relative text-white hover:text-black bg-black hover:bg-white mobileL:py-3 py-1 px-1 mobilem:px-3 mobilexs:px-3 mobilexs:py-2">
                  <Link
                  to={`/collection/the north face`}
                  className="border-white  text-base mobilem:text-lg mobileL:text-xl"
                  >
                  SHOP THE NORTH FACE
                  </Link>
              </span>
            </div>
            <div className="absolute mainpicturemobile">
              <span className="relative text-white py-1 mobilexs:py-2 mobileL:text-lg mobilem:text-lg">Available now</span>
            </div>
            <img className='w-full md:h-[1100px]'  src={northface} alt="woman wearing the north face hoodie"/>
        </div>
    </div>
  )
}

export default NewHero