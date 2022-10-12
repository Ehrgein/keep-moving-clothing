import React from "react";
import shirt1 from "../assets/shirts/shirt1.webp";
import shirt2 from "../assets/shirts/shirt2.webp";
import balance1 from "../assets/shirts/newbalance1.webp";
import balance2 from "../assets/shirts/newbalance2.webp";
import mizuno1 from "../assets/shirts/mizuno1.webp";
import mizuno2 from "../assets/shirts/mizuno2.webp";
import womenclothes from "../assets/womenclothes.jpg";
import discounts from "../assets/discounts.jpg";
import menclothes2 from "../assets/menclothes2.avif";
import shirts from "../assets/category/shirts.webp";
import bottoms from "../assets/category/bottoms.webp";
import sneakers from "../assets/category/sneakers.webp";
import outerwear from "../assets/category/outerwear.webp";
import accesories from "../assets/category/accesories.webp";
import discounted from "../assets/category/discounted.webp";
import {productstwo} from "./inventory"
import { products } from "./NewMenuData";
import ContentItems from "./ContentItems";
import nike from '../assets/nike.jpg'
import adidas from '../assets/adidas.jpg'
import nikemarina from '../assets/nikemarina.jpg'
import newbalance1 from '../assets/newbalance.jpg'
import nikeairforce from '../assets/nikeairforce.jpg'
import nikelouis from '../assets/nikelouis.jpg'
import converse from '../assets/converse.jpg'

function Contentone() {
  



  return (
    <div>
      <div className="hidden md:block">
        <div className="flex justify-center text-center mt-11">
        <a className='text-2xl px-4 py-2' > New Arrivals </a>
        </div>
        <div className="">
          {productstwo.filter(category => category.category == "latest").map(item => <ContentItems key={item.id} categories={item.category} items={item.items} />)}
        </div>
        <div className='flex justify-center mt-4 mb-12'>
          <a href="/" className='text-white font-bold text-2xl px-4 py-2 bg-[#1f2021]'>
            VIEW ALL
          </a>
        </div>
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
              < img classname="" src={nikelouis}/>
            </div>
          </div>
          <div className="relative">
            <span className='absolute 4k:left-[40%] desktop:top-[70%] desktop:left-[40%] laptopL:top-[70%] laptopL:left-[40%]  lg:top-[64%] lg:left-[35%] md:top-[59%] md:left-[30%]  4k:text-4xl desktop:text-3xl laptopL:text-2xl md:text-lg  font-bold  py-2 text-white  hover:text-black laptopL:w-[300px]'> Converse </span>
            <span className='absolute 4k:left-[34%] desktop:top-[80%] desktop:left-[36%] laptopL:top-[80%] laptopL:left-[35%] lg:top-[78%] lg:left-[31%] md:top-[76%]  md:left-[25%] font-bold desktop:px-10 md:px-4 py-2  bg-[#1f2021] text-white hover:text-black desktop:text-2xl 4k:text-4xl laptopL:text-2xl'> Shop Now </span>
            <div className="4k:w-[800px] 4k:h-[800px] desktop:w-[600px] desktop:h-[600px] laptopL:w-[450px] laptopL:h-[450px]  lg:w-[300px] lg:h-[300px] md:h-[230px] md:w-[230px] desktop:text-2xl 4k:text-4xl">
              <img src={converse}/>
            </div>
          </div>
          
        </div>
        <div className="flex justify-center text-center mt-11">
          <a className='text-2xl px-4 py-2' > Accesories </a>
        </div>
        <div className="">
          {productstwo.filter(category => category.category == "accesories").map(item => <ContentItems key={item.id} categories={item.category} items={item.items} />)}
        </div>
        <div className='flex justify-center mt-6 mb-12'>
          <a href="/" className='text-white font-bold text-2xl px-4 py-2 bg-[#1f2021]'>
            VIEW ALL
          </a>
        </div>
      </div>

















    <div className="md:hidden my-2 md:mx-60 overflow-x:hidden">
      <div className="flex flex-col justify-center overflow-x-hidden">
        <h2 className="text-center font-medium text-black md:text-3xl text-xl">
          Shop our Latest Products
        </h2>
        <p className="flex justify-center text-center my-1 md:text-xl text-xs font-normal	">
          VIEW ALL
        </p>
      </div>
      <div className="flex flex-col justify-center columns-2 mb-6">
        <div className="grid grid-cols-2 gap-4 place-content-center">
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4 my-4" src={shirt1} />
            <h2 className="text-center text-xs">
              <a className="text-xs">
                Norse Projects Algot Mixed Flannel Check Shirt
              </a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4 my-4" src={shirt2} />
            <h2 className="text-center text-xs">
              <a className="text-xs mr-2">
                Norse Projects Algot Mixed Flannel Check Shirt
              </a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4" src={balance1} />
            <h2 className="text-center text-xs">
              <a className="text-xs">New Balance U9060W0R Shoes</a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4" src={balance2} />
            <h2 className="text-center text-xs">
              <a className="text-xs"> New Balance U9060IND Shoes</a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4" src={mizuno1} />
            <h2 className="text-center text-xs">
              <a className="text-xs"> Mizuno Sky Medal Premium Shoes</a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
          <div className="mx-auto my-auto">
            <img className="w-[80%] h-[80%] mx-4" src={mizuno2} />
            <h2 className="text-center text-xs">
              <a className="text-xs"> Mizuno Sky Medal Premium Shoes</a>
            </h2>
            <p className="text-center text-xs mt-1 mr-1">$ 159.99 </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative inline mt-4">
          <div className="midtext mt-12">
            <a className="inline-block text-2xl text-white mt-2 border-2 py-2 px-2">
              ALL WOMEN'S
            </a>
          </div>
          <img src={womenclothes} className="w-full h-auto block" />
        </div>
      </div>
      <div>
        <div className="relative inline mt-4">
          <div className="midtext mt-12">
            <a className="inline-block text-2xl text-white mt-2 border-2 py-2 px-2">
              ALL MEN'S
            </a>
          </div>
          <img src={menclothes2} className="w-full h-auto block" />
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
          <img src={discounts} className="w-full h-auto block" />
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <h2 className="text-center font-bold text-black md:text-3xl text-xl">
          Browse By Category{" "}
        </h2>
      </div>
      <div className="flex columns-2">
        <div className="grid grid-cols-2 gap-4 place-content-center">
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2"> SHIRTS </a>
            </div>
            <img src={shirts} className="w-full h-auto block" />
          </div>
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2"> BOTTOMS </a>
            </div>
            <img src={bottoms} className="w-full h-auto block" />
          </div>
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2"> OUTERWEAR </a>
            </div>
            <img src={outerwear} className="w-full h-auto block" />
          </div>
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2"> SNEAKERS </a>
            </div>
            <img src={sneakers} className="w-full h-auto block" />
          </div>
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2">ACCESORIES</a>
            </div>
            <img src={accesories} className="w-full h-auto block" />
          </div>
          <div className="relative inline mt-4">
            <div className="midtext">
              <a className="bg-white text-sm py-2 px-2"> DISCOUNTED </a>
            </div>
            <img src={discounted} className="w-full h-auto block" />
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}
export default Contentone;
