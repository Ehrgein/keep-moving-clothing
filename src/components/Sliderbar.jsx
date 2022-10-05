import React from "react";

function Sliderbar() {
  return (
    <div className="flex justify-center bg-orange-500 h-6 md:text-sm text-xs font-bold uppercase max-w-full md:w-[100%] w-21 overflow-x-hidden">
      <span className="arrow flex justify-center absolute mx-auto md:text-base text-xs max-w-full">
        Weekends 20% OFF!
      </span>
      <span className="arrowtwo flex justify-center absolute mx-auto md:text-base text-xs md:mb-4 max-w-full">
        Have any questions? Contact us!
      </span>
    </div>
  );
}

export default Sliderbar;
