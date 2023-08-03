import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useGetProjectByIdFetch from "../../../hooks/useGetProjectByIdFetch";
import Loading from "../../Loading";
import GalleryThumbnail from "../../GalleryThumbnail";

export default function ProjectDetail() {
  const { id } = useParams();
  const [lang, setLang] = useState("ES");
  const { project } = useGetProjectByIdFetch(id);
  return (
    <Loading loadCondition={project}>
      <div className=" page px-4 box-border  flex md:flex-row flex-col gap-8">
        <div className="md:w-4/6 lg:w-4/6 w-full   ">
          <GalleryThumbnail images={project?.gallery} />
        </div>
        {project?.text_es && project?.subtitle_es ? (
          <div className="md:w-2/6 lg:w-2/6 w-full  flex flex-col py-6 ">
            <div className="flex flex-col md:flex-row  w-full mb-2 md:mb-0 md:items-center justify-between">
              <div className="font-bold font-widescreen  w-full">
                <div className="flex gap-4">
                  <h1 className="text-2xl md:text-4xl   font-bold  tracking-wide w-4/5 ">
                    {lang === "ES"
                      ? project?.title_es
                      : project?.title_en || project?.title_es}
                  </h1>

                  <div className="bg-neutral-800 h-10 w-2/6 flex  overflow-hidden justify-center rounded-md ">
                    <button
                      className={` p-2 bg-neutral-800 w-full  hover:brightness-75 text-sm hover:bg-neutral-900 duration-200 ${
                        lang === "ES" ? "underline" : "brightness-50"
                      }`}
                      onClick={() => setLang("ES")}
                    >
                      ES
                    </button>
                    <button
                      className={`p-2 bg-neutral-800 w-full  hover:brightness-75 text-sm hover:bg-neutral-900 duration-200 ${
                        lang === "EN" ? "underline" : "brightness-50"
                      }`}
                      onClick={() => setLang("EN")}
                    >
                      EN
                    </button>
                  </div>
                </div>
                <h3 className="my-0 md:my-4 text-sm md:text-lg w-full   font-light text-neutral-400">
                  <i>
                    {lang === "ES"
                      ? project?.subtitle_es
                      : project?.subtitle_en || project?.subtitle_es}
                  </i>
                </h3>
                <div className="font-widescreen  h-full w-full ">
                  <span className=" font-bold text-md md:text-md ">
                    {project?.year}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-sm md:text-md leading-relaxed whitespace-pre-line mt-4">
              {lang === "ES"
                ? project?.text_es
                : project?.text_en || project?.text_es}
            </p>
          </div>
        ) : (
          <div className="md:w-2/6 lg:w-2/6 w-full  grid place-content-center">
            <h2 className="md:text-2xl lg:text-4xl text-center font-bold">
              {project?.title_es}
            </h2>
            <span className="text-center text-lg">{project?.year}</span>
          </div>
        )}
      </div>
    </Loading>
  );
}
