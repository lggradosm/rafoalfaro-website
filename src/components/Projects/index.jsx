import React, { useEffect, useState } from "react";
import ProjectNav from "./ProjectNav";
import ProjectCover from "./ProjectCover";
import ProjectGallery from "./ProjectGallery";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("Todo");
  const changeSelectedCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="min-w-[200px]  ">
      <div className="h-full ">
        <ProjectCover />
        <ProjectNav
          selected={selectedCategory}
          onclick={changeSelectedCategory}
        />
        <ProjectGallery selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}
