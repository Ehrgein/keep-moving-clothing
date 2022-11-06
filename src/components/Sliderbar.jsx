import React from "react";

function Sliderbar() {
  return (
    <div className="testingbar">
      <div className="hidden testingbar md:flex justify-center bg-orange-500 h-5 md:text-sm text-xs font-bold uppercase max-w-full md:w-[100%]">
        <span className="arrow flex justify-center absolute mx-auto md:text-sm text-xs max-w-full">
          Weekends 20% OFF!
        </span>
        <span className="arrowtwo flex justify-center absolute mx-auto md:text-sm text-xs max-w-full">
          Have any questions? Contact us!
        </span>
      </div>
      <div className="testingbar overflow-x md:hidden bg-orange-500 h-6 text-xs font-bold uppercase max-w-full w[-100%] text-white text-center flex items-center justify-center">
        <p>WEEKENDS 20% OFF!</p>
      </div>
    </div>
  );
}

export default Sliderbar;






