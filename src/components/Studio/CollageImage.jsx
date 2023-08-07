import React, { useEffect, useRef } from "react";
import firma from "/images/firma.png";
export default function CollageImage({
  image,
  type = "image",
  text,
  name,
  position,
  size,
  signed = false,
}) {
  const videoRef = useRef(null);

  const sizeClass = {
    bigSquare: " lg:col-span-2 lg:row-span-2 ",
    horizontal: " lg:col-span-2  row-span-1  lg:aspect-auto",
    vertical: " lg:row-span-2 lg:aspect-auto",
  };

  const attemptPlay = () => {
    videoRef &&
      videoRef?.current &&
      videoRef?.current.play().catch((error) => {
        console.error("Error attempting to play", error);
      });
    videoRef?.current?.play();
  };

  useEffect(() => {
    attemptPlay();
  }, []);
  return (
    // <div
    //   className={`relative col-span-1 w-full h-full row-span-1 aspect-square bg-cover ${
    //     isSquare ? "!aspect-square" : "sm:!aspect-video lg:!aspect-auto"
    //   } ${"lg:!col-span-" + cols} ${"lg:!row-span-" + rows} ${
    //     rows > cols ? "row-span-1 " : ""
    //   }
    // // ${cols > rows ? "sm:col-span-" + cols : ""} ${
    //     type === "image" ? "bg-center" : ""
    //   } ${type === "text" ? "flex__center" : ""}`}
    // >
    <div
      className={`relative w-full h-full col-span-1 row-span-1 aspect-square ${sizeClass[size]}`}
    >
      {type === "video" ? (
        <video
          playsInline
          ref={videoRef}
          loop={true}
          autoPlay
          muted
          className="object-center object-cover h-full w-full"
        >
          <source src={image} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <div className="h-full w-full">
          <div className="bg-transparent absolute z-10 w-full h-full left-0 top-0 " />
          <img
            src={image}
            alt=""
            className={` object-cover object-top w-full h-full `}
          />
        </div>
      )}
      {type === "text" && (
        <span className="whitespace-pre-line p-10 h-full absolute left-0 top-0 gap-4 md:gap-10 bg-black text-white text-[.9em] text-center sm:text-sm lg:text-[1em] lg:leading-relaxed leading-loose  flex flex-col justify-center items-center">
          {text}
          {signed && <img src={firma} alt="" className="w-44" />}
        </span>
      )}
      {type === "team" && (
        <span className="flex w-fit absolute bottom-0 left-0 bg-black p-2 min-w-[100px] text-white text-[.8em] sm:text-[.65em] md:text-xs  whitespace-nowrap  overflow-hidden  font-bold tracking-wide">
          {name}
          <span
            className={`font-light w-fit before:content-[""] before:h-full before:w-0.5 before:mx-2 before:bg-white  before:inline-block flex`}
          >
            {position}
          </span>
        </span>
      )}
    </div>
  );
}
