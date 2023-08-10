import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetProjectByIdFetch from "../../../hooks/useGetProjectByIdFetch";
import Loading from "../../Loading";
import GalleryThumbnail from "../../GalleryThumbnail";
import useVisibility from "../../../hooks/useVisibility";
export default function ProjectDetail() {
  const { id } = useParams();
  const [lang, setLang] = useState("ES");
  const { project } = useGetProjectByIdFetch(id);
  const { isVisible, hide, show } = useVisibility();
  const navigate = useNavigate();
  const handleUserKeyPress = useCallback((event) => {
    if (event.key === "Escape" && isVisible) hide();
    if (event.key === "Escape" && !isVisible) navigate(-1);
  });

  useEffect(() => {
    window.addEventListener("keydown", handleUserKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [isVisible]);

  return (
    <Loading loadCondition={project}>
      <div className=" page px-4 box-border  flex md:flex-row flex-col gap-8">
        <div className="md:w-4/6 lg:w-4/6 w-full  ">
          <GalleryThumbnail
            images={project?.gallery}
            isVisible={isVisible}
            hide={hide}
            show={show}
          />
        </div>
        {project?.text_es && project?.subtitle_es ? (
          <div className="md:w-2/6 lg:w-2/6 w-full justify-center flex flex-col p-6 ">
            <div className="flex flex-col md:flex-row  w-full mb-2 md:mb-0 md:items-center justify-between">
              <div className="font-bold font-widescreen  w-full">
                <div className="flex items-center gap-4">
                  <h1 className="text-2xl lg:text-3xl  2xl:text-4xl 3xl:text-5xl   font-bold  tracking-wide w-4/5 ">
                    {lang === "ES"
                      ? project?.title_es
                      : project?.title_en || project?.title_es}
                  </h1>
                  <span className=" font-bold text-md md:text-3xl ">
                    {project?.year}
                  </span>
                </div>
                <h3 className="my-0 md:my-4 text-sm md:text-lg 2xl:text-2xl w-full   font-light text-neutral-400">
                  <i>
                    {lang === "ES"
                      ? project?.subtitle_es
                      : project?.subtitle_en || project?.subtitle_es}
                  </i>
                </h3>
              </div>
            </div>
            <p className="text-sm md:text-md 2xl:text-xl leading-relaxed hyphens-auto text-justify  whitespace-pre-line font-light w-full  px-0 md:px-10 mx-auto  mt-4 tracking-wide">
              {lang === "ES"
                ? project?.text_es
                : project?.text_en || project?.text_es}
            </p>
            <div className="w-full flex justify-end">
              <div className="bg-neutral-800 h-10 w-fit flex mt-10   overflow-hidden justify-center rounded-md ">
                <button
                  className={` p-2 bg-neutral-800 w-20   hover:brightness-75  hover:bg-neutral-900 duration-200 ${
                    lang === "ES" ? "underline" : "brightness-50"
                  }`}
                  onClick={() => setLang("ES")}
                >
                  ES
                </button>
                <button
                  className={`p-2 bg-neutral-800  w-20 hover:brightness-75  hover:bg-neutral-900 duration-200 ${
                    lang === "EN" ? "underline" : "brightness-50"
                  }`}
                  onClick={() => setLang("EN")}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="md:w-2/6 lg:w-2/6 w-full  grid place-content-center">
            <h2 className="md:text-2xl lg:text-4xl 2xl:text-6xl text-center font-bold">
              {project?.title_es}
            </h2>
            <span className="text-center text-lg 2xl:text-2xl">
              {project?.year}
            </span>
          </div>
        )}
      </div>
    </Loading>
  );
}
