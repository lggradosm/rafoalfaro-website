import React from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItemMobile({ linkName, link, onclick }) {
  return (
    <li className="w-full p-10 text-center">
      <NavLink
        to={link}
        className={({ isActive }) =>
          isActive ? "font-bold" : "" + `hover:underline  block w-full h-full`
        }
        onClick={onclick}
      >
        {linkName}
      </NavLink>
    </li>
  );
}
