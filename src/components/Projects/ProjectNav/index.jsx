import React from "react";
import ProjectNavItem from "./ProjectNavItem";

export default function ProjectNav({ onclick, selected }) {
  return (
    <header className="sticky top-[calc(var(--navbar--height)-1px)]  ra_navbar z-10 p-2">
      <ul className="flex  justify-between  gap-4   w-full md:w-2/5  ">
        <ProjectNavItem
          name={"Todo"}
          onClick={() => onclick("Todo")}
          selected={selected}
        />
        <ProjectNavItem
          name={"Arquitectura"}
          onClick={() => onclick("Arquitectura")}
          selected={selected}
        />
        <ProjectNavItem
          name={"Interiorismo"}
          onClick={() => onclick("Interiorismo")}
          selected={selected}
        />
        <ProjectNavItem
          name={"Construcción"}
          onClick={() => onclick("Construcción")}
          selected={selected}
        />
      </ul>
    </header>
  );
}
