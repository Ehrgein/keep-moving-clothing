import React, { useEffect, useState, useRef } from "react";
import jump from "../assets/jump.jpg";
import shoes from "../assets/footwear.jpg";
import cart from "../assets/newcart.jpg";
import { BsCaretRight, BsCaretLeft } from "react-icons/bs";
import supreme from "../assets/category/suprememobile.jpg";
import newbalances from "../assets/category/newbalancemobile.jpg";
import supreme2 from "../assets/category/supreme2.jpg";
import supremehoodie from "../assets/category/supremehoodie.jpg";

let count = 0;

const images2 = [
  { id: 0, value: jump, title: "NEW CAMO COLLECTION" },
  { id: 1, value: shoes, title: "NIKE AIR 90 PREMIUM NOW IN!" },
  { id: 2, value: cart, title: "Cheap glasses :D" },
];

function hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideRef = useRef();

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
  }, []);

  const handleOnNextClick = () => {
    count = (count + 1) % images2.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnPrevClick = () => {
    const herolength = images2.length;
    count = (currentIndex + herolength - 1) % herolength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  console.log(slideRef);

  return (
    <div>
      <div
        ref={slideRef}
        className="hidden md:flex w-full select-none relative justify-center"
      >
        <div className="md:flex md:w-[80%] w-[100%]">
          <img
            className="fade-anim my-1"
            src={images2[currentIndex].value}
            alt="/"
          />
        </div>
        <div className=":inset-1/2 w-full text-center text-lg mx-auto absolute bottom-0 left-0 text-black font-bold -mt-2 mnb mb-1">
          <span className="lg:text-6xl text-sm flex justify-center items-end h-full md:text-2xl first-line:lg:text-6xl2xl:text-8xl">
            {images2[currentIndex].title}
          </span>
          <button>
            <a
              href="/"
              className="h-2 md:text-sm text-xs border-3 py-2 md:px-5 px:6"
            >
              {" "}
              SHOP NOW{" "}
            </a>
          </button>
        </div>
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 py-2 flex justify-between items-center">
          <button onClick={handleOnPrevClick} className="md:ml-[25%]">
            <BsCaretLeft size={30} />
          </button>
          <button onClick={handleOnNextClick} className="md:mr-[25%]">
            <BsCaretRight size={30} />
          </button>
        </div>
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
  );
}

export default hero;
