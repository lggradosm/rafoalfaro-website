import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavbarItem({ linkName, link }) {
  return (
    <li className="relative     h-full">
      <NavLink
        to={`${link}`}
        className={({ isActive }) =>
          isActive
            ? `   w-full   h-full after:animate-underlineNavItem after:absolute flex justify-center items-center after:block after:rounded-full 
           after:left-0 after:bottom-6  text-[.65em]  md:text-[.95em] after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200  after:h-[.2em] after:bg-white`
            : `flex justify-center items-center  h-full w-full text-[.7em] 
            md:text-[.95em]  hover:brightness-75 after:ease-[cubic-bezier(.42,-0.01,.47,1)] after:duration-200`
        }
      >
        {linkName}
      </NavLink>
    </li>
  );
}
