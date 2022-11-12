import React from "react";

function Sliderbar() {
  return (
    <div className="max-w-[100%]">
      <div className="hidden md:flex justify-center  bg-[#f5770c] 4k:h-8 text-xs h-6 font-bold uppercase max-w-full md:w-[100%]">
        <span className="arrow flex 4k:text-lg  md:text-sm justify-center absolute mx-auto text-xs max-w-full">
          Weekends 20% OFF!
        </span>
        <span className="arrowtwo 4k:text-lg md:text-sm  flex justify-center absolute mx-auto  text-xs max-w-full">
          Have any questions? Contact us!
        </span>
      </div>
      <div className="md:hidden bg-orange-500 h-6 text-xs font-bold uppercase max-w-full w[-100%] text-white text-center flex items-center justify-center">
        {/* <p>WEEKENDS 20% OFF!</p> */}
        <span className="arrow flex 4k:text-lg  md:text-sm justify-center absolute mx-auto text-xs max-w-full">
          Weekends 20% OFF!
        </span>
        <span className="arrowtwo 4k:text-lg md:text-sm  flex justify-center absolute mx-auto  text-xs max-w-full">
          Have any questions? Contact us!
        </span>
      </div>
    </div>
  );
}

export default Sliderbar;






