import React from "react";

export default function ProjectNavItem({ name, onClick, selected }) {
  return (
    <li
      onClick={() => onClick()}
      className={`p-3 font-bold cursor-pointer hover:brightness-75 relative  text-center w-full text-[.5em]  sm:text-[.75em]  2xl:text-[.7em] tracking-widest  uppercase
    
          
          ${
            selected === name
              ? "  text-white duration-200 block after:animate-underlineNavItem after:w-0 after:absolute after:block after:rounded-full  after:left-0 after:bottom-1  after:h-0.5 after:bg-white"
              : "text-white duration-200"
          }`}
    >
      {name}
    </li>
  );
}
