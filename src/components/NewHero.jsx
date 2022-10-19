import React, {useState} from 'react'
import mensection from '../assets/mensection.jpg'
import womensection from '../assets/womensection.jpg'
import supremehoodie from '../assets/category/supremehoodie.jpg'
import newbalances from "../assets/category/newbalancemobile.jpg";
import northface2 from "../assets/northface2.jpg"



function NewHero() {

    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);


  return (
    <div>
        <div className='hidden md:flex max-w[1920px] max-h-[900px] my-4 relative gap-8 ml-4'>
                <img className='w-[49%] h-auto' src={mensection}/>
                <div className='absolute top-[60%] left-[21%] text-3xl font-bold px-10 py-2  bg-black text-white hover:bg-white hover:text-black ease-in duration-500'>MEN</div>
                
                <img className='w-[49%] h-auto' src={womensection}/>
                <div className='absolute top-[60%] right-[22%] text-3xl font-bold border-2 px-4 py-2 border-black bg-black text-white '>WOMEN</div>

        </div>
        <div className='hidden md:flex max-w[2500px] max-h-[1000px] relative gap-5 my-10 hover:text-red-500'>
            <img className='w-[100%] h-auto' src={northface2}/>
            <div className='absolute top-[48%] left-[44%] text-white font-bold text-3xl'>NOW AVAILABLE: </div>
            <div className='absolute top-[54%] left-[43%] text-white font-bold text-4xl'> THE NORTH FACE </div>
            <a className='absolute top-[60%] left-[46%] text-white font-bold text-2xl px-6 py-2 bg-[#1f2021]'>SHOP NOW</a>
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