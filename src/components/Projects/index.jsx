import { useState } from "react";
import ProjectNav from "./ProjectNav";
import ProjectCover from "./ProjectCover";
import ProjectGallery from "./ProjectGallery";

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
  return (
    <div className="min-w-[200px]  ">
      <div className="h-full ">
        <ProjectCover />
        <ProjectBody />
      </div>
    </div>
  );
}
