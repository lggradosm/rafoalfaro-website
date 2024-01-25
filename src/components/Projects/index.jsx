import { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";
import ProjectCover from "./ProjectCover";
import ProjectGallery from "./ProjectGallery";
import ReactGa from 'react-ga4'
function ProjectBody() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const changeSelectedCategory = (category) => {
    setSelectedCategory(category);
  };
  return (
    <>
      <ProjectNav
        selected={selectedCategory}
        onclick={changeSelectedCategory}
      />
      <ProjectGallery selectedCategory={selectedCategory} />
    </>
  );
}

export default function Projects() {
  useEffect(()=> {
    ReactGa.send({ hitType: "pageview", page: window.location.pathname, title: "Proyectos" });
  }, [])
  return (
    <div className="min-w-[200px]  ">

      <div className="h-full ">
        <ProjectCover />
        <ProjectBody />
      </div>
    </div>
  );
}
