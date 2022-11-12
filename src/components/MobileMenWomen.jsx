import React from 'react'
import womenclothes from "../assets/womenclothes.webp";
import menclothes2 from "../assets/menclothes2.avif";
import {Link} from 'react-router-dom'

function MobileMenWomen() {

  return (
    <div>
        <div>
        <div>
        <div className="relative inline mt-4">
        <p className='absolute newintext text-white text-2xl'> New in</p>
          <div className="mt-12 midtextmobile w-64">
            <Link to={"products/outerwear"} className="inline-block mobilem:text-2xl mobilexs:text-xl
             text-white hover:text-black bg-black hover:bg-white mt-2  py-2 px-2">
                SHOP AIR JORDAN
              </Link>
          </div>
          <img alt='men wearing hoodies' src={womenclothes} className="w-full h-auto block" />
        </div>
      </div>
      </div>
      <div>
        <div className="relative inline mt-4">
        <p className='absolute newintext text-white text-2xl'> New in</p>
          <div className="mt-12 midtextmobile w-64">
            <Link to={"products/outerwear"} className="inline-block mobilem:text-2xl mobilexs:text-xl
             text-white hover:text-black bg-black hover:bg-white mt-2  py-2 px-2">
                SHOP OUTERWEAR
              </Link>
          </div>
          <img alt='men wearing hoodies' src={menclothes2} className="w-full h-auto block" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-center font-bold text-black md:text-3xl text-xl">
          Browse By Category{" "}
        </h2>
      </div>
    </div>
  )
}

export default MobileMenWomen