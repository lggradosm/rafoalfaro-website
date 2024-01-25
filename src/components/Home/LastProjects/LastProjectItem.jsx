import { NavLink } from "react-router-dom";

export default function LastProjectItem({ item }) {
  return (
    <li className="w-full aspect-square h-auto overflow-hidden group flex flex-col items-stretch  cursor-pointer group bg-black   duration-[500ms] ">
      <NavLink
        to={`/proyectos/${item.url}`}
        className={"flex flex-col items-stretch justify-between   h-full"}
      >
        <div
          style={{ backgroundImage: `url(${item.featuredImage})` }}
          className={`relative w-full h-full bg-no-repeat bg-cover bg-center rounded-sm   !aspect-square`}
        >
          <div className="opacity-0 group-hover:opacity-100 duration-300 ease-[cubic-bezier(.42,-0.01,.47,1)] bg-black/30 absolute  left-0 top-0 w-full h-full" />
          <span className="absolute group-hover:bottom-0 duration-300 ease-[cubic-bezier(.42,-0.01,.47,1)] -bottom-10 left-0 bg-black/75 p-1 px-2 text-[1em] tracking-wider">
            {item.titleEs}
          </span>
        </div>
      </NavLink>
    </li>
  );
}
