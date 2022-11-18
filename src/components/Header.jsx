import React from "react";
import MobileHeader from "./MobileHeader";
import DesktopHeader from "./DesktopHeader";

function Header() {
  return (
    <div className="sticky w-full z-50 top-0">
      <DesktopHeader />
      <MobileHeader />
    </div>
  );
}

export default Header;
