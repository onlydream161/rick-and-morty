import React, { useState } from "react";
import NavLinks from "./NavLinks";
import ImageIcon from "./ImageIcon";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <header className="header">
      <div className="header__container">
        <ImageIcon />
        <NavLinks active={nav} setNav={setNav} />
        <div
          onClick={() => setNav(!nav)}
          className={
            nav ? "header__menu-burger _active" : "header__menu-burger"
          }
        >
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
