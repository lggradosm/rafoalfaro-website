import React, { useState } from "react";
import { useProjectContext } from "../../contexts/ProjectProvider";
import Loading from "../Loading";
export default function ProjectCover() {
  const { coverProject } = useProjectContext();

  return (
    <Loading
      loadCondition={coverProject}
      className={"relative w-full h-[40rem]"}
    >
      <div className=" w-full h-full bg-no-repeat bg-cover bg-center">
        <img src={coverProject?.image_url} alt="" className="h-full w-full" />
      </div>
    </Loading>
  );
}
