import React, {useState, useContext} from 'react'
import mensection from '../assets/optimizedmen.jpg'
import womensection from '../assets/optimizedwomen.jpg'
import glasses1 from '../assets/glasses1.jpg'
import glasses2 from '../assets/glasses2.jpg'
import glasses3 from '../assets/glasses3.jpg'
import supremehoodie from '../assets/category/supremehoodie.jpg'
import newbalances from "../assets/category/newbalancemobile.jpg";
import northface2 from "../assets/optimizednorth.jpg"
import {Link} from 'react-router-dom'
import { BrandsContext } from '../App';
import northface from '../assets/northfacemobile.jpg'



function  NewHero() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);

    const brands = useContext(BrandsContext)


  return (
    <div>
        <div className='hidden md:flex max-w[1980px] max-h-[1020px] relative'>
                <img className='w-[50%] h-[900px]' src={glasses1}/>
                <div className='absolute top-[62%] right-[45%] text-xl font-bold px-12 py-3  bg-black text-white hover:bg-white hover:text-black ease-in duration-300'>
                  <h1>Shop now</h1>
                </div>
                <div className='absolute top-[50%] right-[35%] text-5xl font-bold px-12 py-3  text-white'>
                  <h1>Garret Leight Collection</h1>
                </div>
                <img className='w-[50%] h-auto' src={glasses3}/>
        </div>

        {/* <div className='hidden md:flex max-w[2500px] max-h-[1000px] relative gap-5 my-10 hover:text-red-500'>
            <img className='w-[100%] h-auto' src={northface2}/>
            <div className='absolute top-[48%] left-[44%] text-white font-bold text-3xl'>
              NOW AVAILABLE: 
              </div>
            <div className='absolute top-[54%] left-[43%] text-white font-bold text-4xl'>
               THE NORTH FACE
            </div>
            <a className='absolute top-[60%] left-[46%] text-white font-bold text-2xl px-6 py-2 bg-[#1f2021]'>SHOP NOW</a>
        </div> */}

















        <div className="md:hidden relative">
            <img className='max-w-full h-auto' src={northface} alt="/"/>
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