import React from 'react'
import newherowomenmaybe from '../assets/newherowomen.jpg'
import newheromenmaybe from '../assets/newheromen.jpg'
import maybehero from '../assets/resizedhero.jpg'
import stealmen from '../assets/stealingtime.webp'
import stealwomen from '../assets/stealingtime2.webp'
import mensection from '../assets/mensection.jpg'
import womensection from '../assets/womensection.jpg'
import supremehoodie from '../assets/category/supremehoodie.jpg'
import newbalances from "../assets/category/newbalancemobile.jpg";
import northface2 from "../assets/northface2.jpg"

function NewHero() {
  return (
    <div>
        <div className='hidden md:flex max-w[1920px] max-h-[900px] my-4 relative gap-5 ml-4'>
                <img className='w-[49%] h-auto' src={mensection}/>
                <div className='absolute top-[45%] left-[22%] text-3xl font-bold text-white border-2 px-2 py-2 border-black hover:bg-red-400 ease-in duration-700'>MEN</div>
                <img className='w-[49%] h-auto' src={womensection}/>
                <div className='absolute top-[45%] right-[22%] text-3xl font-bold text-white'>WOMEN</div>
        </div>
        <div className='hidden md:flex max-w[2500px] max-h-[1000px] my-4 relative gap-5 my-10'>
            <img className='w-[100%] h-auto]' src={northface2}/>
        </div>











        
        <div className="md:hidden relative">
            <img className="aspect-square" src={newbalances} alt="/"></img>
            <div className="absolute top-[80%]">
                <span className="relative text-white text-lg">
                    <a className="ml-4">New Balance Collection</a>
                </span>
            </div>
            <div className="absolute top-[90%]">
            <span className="relative text-white">
                <a
                href="/"
                className="border-white border-2 py-1 px-6  ml-2 text-lg"
                >
                SHOP NEW BALANCE
                </a>
            </span>
            </div>
        </div>
      <div className="md:hidden relative">
        <img className="aspect-square" src={supremehoodie} alt="/"></img>
        <div className="absolute top-[80%]">
          <span className="relative text-white text-lg">
            <a className="ml-6"> Supreme Hoodies </a>
          </span>
        </div>
        <div className="absolute top-[90%]">
          <span className="relative text-white">
            <a
              href="/"
              className="border-white border-2 py-1 px-6  ml-2 text-lg w-full"
            >
              SHOP SUPREME
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NewHero