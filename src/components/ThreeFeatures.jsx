import React from 'react'
import newbalance1 from '../assets/newbalance.jpg'
import nikeairforce from '../assets/nikeairforce.jpg'
import nikelouis from '../assets/nikelouis.jpg'
import converse from '../assets/converse.jpg'

function ThreeFeatures() {
  return (
    <div>
        <div className="hidden md:block">
        <div className="flex md:flex my-4 gap-8 justify-center">
          <div className="relative">
            <span className='absolute 4k:left-[38%] desktop:top-[70%] desktop:left-[37%] laptopL:top-[70%] laptopL:left-[35%] lg:top-[64%] lg:left-[31%] md:top-[59%] md:left-[27%]    4k:text-4xl desktop:text-3xl laptopL:text-2xl md:text-lg  font-bold py-2  text-white laptopL:w-[300px]'> New Balance </span>
            <span className='absolute 4k:left-[36%] desktop:top-[80%] desktop:left-[36%] laptopL:top-[80%] laptopL:left-[35%] lg:top-[78%] lg:left-[31%] md:top-[76%] md:left-[27%]  font-bold desktop:px-10 md:px-4 py-2  bg-[#1f2021] text-white desktop:text-2xl 4k:text-4xl laptopL:text-2xl'> Shop Now </span>
            <div className="4k:w-[800px] 4k:h-[800px] desktop:w-[600px] desktop:h-[600px] laptopL:w-[450px] laptopL:h-[450px]  lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] ">
              <img src={newbalance1}/>
            </div>
          </div>
          <div className="relative">
            <span className='absolute 4k:left-[34%] desktop:top-[70%] desktop:left-[30%] laptopL:top-[70%] laptopL:left-[28%] lg:top-[64%] lg:left-[19%] md:top-[59%] md:left-[10%] 4k:text-4xl desktop:text-3xl laptopL:text-2xl md:text-lg  font-bold px-10 py-2 text-white  w-[200px] laptopL:w-[300px]'> Nike X Louis</span>
            <span className='absolute 4k:left-[37%] desktop:top-[80%] desktop:left-[35%] laptopL:top-[80%] laptopL:left-[35%] lg:top-[78%] lg:left-[31%] md:top-[76%] md:left-[26%] font-bold desktop:px-10 md:px-4 py-2  bg-[#1f2021] text-white desktop:text-2xl 4k:text-4xl laptopL:text-2xl'> Shop Now </span>
            <div className="4k:w-[800px] 4k:h-[800px] desktop:w-[600px] desktop:h-[600px] laptopL:w-[450px] laptopL:h-[450px] lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] ">
              <img className="" src={nikelouis}/>
            </div>
          </div>
          <div className="relative">
            <span className='absolute 4k:left-[40%] desktop:top-[70%] desktop:left-[40%] laptopL:top-[70%] laptopL:left-[40%]  lg:top-[64%] lg:left-[35%] md:top-[59%] md:left-[30%]  4k:text-4xl desktop:text-3xl laptopL:text-2xl md:text-lg  font-bold  py-2 text-white laptopL:w-[300px]'> Converse </span>
            <span className='absolute 4k:left-[34%] desktop:top-[80%] desktop:left-[36%] laptopL:top-[80%] laptopL:left-[35%] lg:top-[78%] lg:left-[31%] md:top-[76%]  md:left-[25%] font-bold desktop:px-10 md:px-4 py-2  bg-[#1f2021] text-white hover:text-black desktop:text-2xl 4k:text-4xl laptopL:text-2xl'> Shop Now </span>
            <div className="4k:w-[800px] 4k:h-[800px] desktop:w-[600px] desktop:h-[600px] laptopL:w-[450px] laptopL:h-[450px]  lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] desktop:text-2xl 4k:text-4xl">
              <img src={converse}/>
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default ThreeFeatures