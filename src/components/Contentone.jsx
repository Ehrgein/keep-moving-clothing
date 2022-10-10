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

function Contentone() {
  return (
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
  );
}
export default Contentone;
