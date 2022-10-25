import React, { useState, useEffect, useContext } from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";
import {VscAccount} from 'react-icons'

function Header() {


  return (
    <div className="sticky z-50 top-0">
      <DesktopHeader/>
      
      <MobileHeader/>
    </div>
  );
}

export default Header;
