import React, { useState } from "react";
import { useProjectContext } from "../../contexts/ProjectProvider";
import Loading from "../Loading";
export default function ProjectCover() {
  const { coverProject } = useProjectContext();

  return (
    <Loading loadCondition={coverProject} className={"relative w-full h-full"}>
      <div
        style={{ backgroundImage: `url(${coverProject?.image_url})` }}
        className=" w-full bg-no-repeat bg-cover bg-center h-full bg-black"
      ></div>
    </Loading>
  );
}
