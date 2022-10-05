import React, { useEffect, useState, useRef } from "react";
import jump from "../assets/jump.jpg";
import shoes from "../assets/footwear.jpg";
import cart from "../assets/newcart.jpg";
import { BsCaretRight, BsCaretLeft } from "react-icons/bs";

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
    <div
      ref={slideRef}
      className="w-full select-none relative flex justify-center"
    >
      <div className='draggable="true w-[80%]'>
        <img
          className="fade-anim my-1"
          src={images2[currentIndex].value}
          alt="/"
        />
      </div>
      <div className=":inset-1/2 w-full text-center text-lg mx-auto absolute bottom-0 left-0 text-black font-bold -mt-2 mnb md:mb-44 mb-1">
        <span className="md:text-8xl text-sm flex justify-center items-end h-full mb">
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
  );
}

export default hero;
