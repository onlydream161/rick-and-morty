import React from "react";
import { NavLink } from "react-router-dom";
import { CARACTERS, EPISODES, LOCATIONS } from "../utils/consts";

const NavLinks = ({ active, setNav }) => {
  console.log(active);
  return (
    <nav className={active ? "header__links active-burger" : "header__links"}>
      <ul className="header__links-items">
        <li>
          <NavLink
            className="header__link"
            to={CARACTERS}
            onClick={() => setNav(false)}
          >
            Caracters
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header__link"
            to={LOCATIONS}
            onClick={() => setNav(false)}
          >
            Locations
          </NavLink>
        </li>
        <li>
          <NavLink
            className="header__link"
            to={EPISODES}
            onClick={() => setNav(false)}
          >
            Episodes
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
