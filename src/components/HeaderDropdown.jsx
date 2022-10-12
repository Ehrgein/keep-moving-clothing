import React, { useState, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IconContext } from "react-icons";

function HeaderDropdown({ category, items }) {
  const [subnav, setSubNav] = useState(false);

  const handleSubNav = () => {
    setSubNav(!subnav);
  };

  const handleSubFalse = () => setSubNav(false);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setSubNav(false);
    } else {
      console.log("holi");
    }
  };

  return subnav ? (
    <div>
      <div
        onClick={handleSubNav}
        className="flex items-center uppercase hover:text-red-500"
      >
        <p className="">{category}</p>
        <IconContext.Provider value={{ color: "white", size: "20px" }}>
          <MdOutlineKeyboardArrowDown />
        </IconContext.Provider>
      </div>
      <div
        ref={refOne}
        onMouseLeave={handleSubFalse}
        className="fixed top-[16%] left-[0%] w-[100%] h-[40%] text-black bg-white ease-in-out duration-500"
      >
        <ul className="ease-in-out duration-500">
          {items.map((item) => (
            <li key={item.id} name={item.name}>
              {" "}
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  ) : (
    <div
      onClick={handleSubNav}
      className="flex items-center uppercase hover:text-red-500"
    >
      <p className="">{category}</p>
      <IconContext.Provider value={{ color: "white", size: "20px" }}>
        <MdOutlineKeyboardArrowDown />
      </IconContext.Provider>
    </div>
  );
}

export default HeaderDropdown;
