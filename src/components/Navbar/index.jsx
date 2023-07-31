import { useState, useEffect } from "react";
import logoWhite from "/images/logo-white_64.png";
import { NavLink, useLocation } from "react-router-dom";
import Hamburguer from "./Hamburguer";
import useVisibility from "../../hooks/useVisibility";
import NavbarItem from "./NavbarItem";
import { configureNav } from "../../utils/configureNav";
import NavbarItemMobile from "./NavbarItemMobile";

export default function Navbar() {
  const [transparentNavbar, setTransparentNavbar] = useState(true);

  const hamburguerButton = useVisibility();

  const currentRoute = useLocation();

  const isTransparent = () => {
    const transparentRoute = configureNav.filter(
      (item) => item === currentRoute.pathname
    );
    if (transparentRoute.length > 0) return true;
    return false;
  };

  const handleScroll = function () {
    if (window.scrollY > 10 && isTransparent()) setTransparentNavbar(false);
    else setTransparentNavbar(true);
  };

  useEffect(() => {
    if (isTransparent()) {
      setTransparentNavbar(true);
      window.addEventListener("scroll", handleScroll);
    } else {
      setTransparentNavbar(false);
      window.removeEventListener("scroll", handleScroll);
    }
    window.scrollTo({ top: 0 });
  }, [currentRoute]);

  return (
    <header
      className={`fixed z-30 h-navbar top-0 left-0 w-screen    duration-300 ease-[cubic-bezier(.42,-0.01,.47,1)]  ${
        transparentNavbar ? "bg-transparent" : "ra_navbar "
      }`}
    >
      <nav className="w-full h-full flex flex-col justify-center">
        <div
          className={`fixed block md:hidden w-screen top-0 h-screen duration-300 bg-white ${
            hamburguerButton.isVisible ? "left-0" : "left-full "
          }`}
        >
          <ul className="w-full h-full flex flex-col justify-center items-center tracking-widest text-black">
            <NavbarItemMobile
              link={"/proyectos"}
              linkName={"PROYECTOS"}
              onclick={() => hamburguerButton.toggle()}
            />
            <NavbarItemMobile
              link={"/estudio"}
              linkName={"ESTUDIO"}
              onclick={() => hamburguerButton.toggle()}
            />
            <NavbarItemMobile
              link={"/contacto"}
              linkName={"CONTACTO"}
              onclick={() => hamburguerButton.toggle()}
            />
          </ul>
        </div>
        <div
          className={`  flex w-full h-full  px-5  items-center justify-between gap-4 duration-200  `}
        >
          <NavLink to={"/"}>
            <img
              src={logoWhite}
              alt="logotipo rafo alfaro"
              className={`duration-200 w-6 lg:w-7 hover:brightness-75 `}
            />
          </NavLink>
          <div className="sm:hidden block ">
            <Hamburguer
              visbility={hamburguerButton.isVisible}
              trigger={hamburguerButton.toggle}
            />
          </div>

          <ul
            className={`hidden  justify-center items-center gap-10 h-full  duration-100 md:text-sm 2xl:text-[.8em] 
            text-white tracking-widest lg:text-md font-bold sm:flex `}
          >
            <NavbarItem linkName={"PROYECTOS"} link="/proyectos" />
            <NavbarItem linkName={"ESTUDIO"} link="/estudio" />
            <NavbarItem linkName={"CONTACTO"} link="/contacto" />
          </ul>
        </div>
      </nav>
    </header>
  );
}
