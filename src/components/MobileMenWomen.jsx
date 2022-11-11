import React from 'react'
import womenclothes from "../assets/womenclothes.webp";
import discounts from "../assets/discounts.webp";
import menclothes2 from "../assets/menclothes2.avif";

function MobileMenWomen() {

  return (
    <div>
        <div>
        <div className="relative inline mt-4">
          <div className="midtext mt-12">
            <a className="inline-block text-2xl text-white mt-2 border-2 py-2 px-2">
              ALL WOMEN'S
            </a>
          </div>
          <img alt='woman wearing air jordan sneakers' src={womenclothes} className="w-full h-auto block" />
        </div>
      </div>
      <div>
        <div className="relative inline mt-4">
          <div className="midtext mt-12">
            <a className="inline-block text-2xl text-white mt-2 border-2 py-2 px-2">
              ALL MEN'S
            </a>
          </div>
          <img alt='men wearing hoodies' src={menclothes2} className="w-full h-auto block" />
        </div>
      </div>
      <div className="">
        <div className="relative inline mt-4">
          <div className="midtext mt-28">
            <h4 className="inline-block text-6xl text-white mt-2">
              SUMMER DEALS NOW
              <p className="text-xl">Up To 20 % OFF</p>
            </h4>
          </div>
          <img alt='men wearing hoodie offering discounts' src={discounts} className="w-full h-auto block" />
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