import React, { useEffect, useRef, useState } from "react";
import useVisibility from "@hooks/useVisibility";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
  XMarkIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/react/24/outline";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Navigation, Zoom } from "swiper/modules";
import "../../css/GalleryThumbnail.css";
import Image from "../Loading/Image";
export default function GalleryThumbnail({ images }) {
  const MAX_IMAGES_THUMB = 10;
  const MIN_PROGRESS_TO_ACTIVE_NAV = 0.03;
  const NAV_BUTTON_INITIAL_STATE = { left: false, right: true };
  const [imageSelected, setImageSelected] = useState(0);

  const [navButtonsVisible, setNavButtonVisible] = useState(
    NAV_BUTTON_INITIAL_STATE
  );
  const [navFullScreenButtonsVisible, setNavFullScreenButtonsVisible] =
    useState(NAV_BUTTON_INITIAL_STATE);

  const fullPageImage = useVisibility();
  // const body = document.getElementsByTagName("body")[0];
  const thumSlideRef = useRef(null);
  const slideRef = useRef(null);
  const thumFullSlideRef = useRef(null);

  const fullPageImageShow = () => {
    // body.classList.add("overflow-hidden");
    thumFullSlideRef.current.swiper.slideTo(imageSelected);

    fullPageImage.show();
  };
  const fullPageImageHide = () => {
    // body.classList.remove("overflow-hidden");
    slideRef.current.swiper.slideTo(imageSelected);

    fullPageImage.hide();
  };

  useEffect(() => {
    if (imageSelected > 0)
      setNavFullScreenButtonsVisible((prev) => ({ ...prev, left: true }));
    else {
      setNavFullScreenButtonsVisible((prev) => ({ ...prev, left: false }));
    }
    if (imageSelected === images.length - 1) {
      setNavFullScreenButtonsVisible((prev) => ({ ...prev, right: false }));
    } else {
      setNavFullScreenButtonsVisible((prev) => ({ ...prev, right: true }));
    }
    thumSlideRef.current.swiper.slideTo(imageSelected);
    slideRef.current.swiper.slideTo(imageSelected);
  }, [imageSelected]);

  return (
    <div className="">
      <div className="flex flex-col gap-2 md:gap-4 items-center lg:gap-1">
        <div className="relative w-full bg-primaryColor flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            direction={"horizontal"}
            className="relative h-full  lg:h-[80vh] flex justify-center items-center  select-none hover:cursor-grab"
            initialSlide={imageSelected}
            modules={[Navigation]}
            speed={600}
            onSlideChange={(e) => {
              setImageSelected(e.activeIndex);
            }}
            // onSliderMove={() => scrollFullSwiperMoveHandler()}
            navigation={{
              prevEl: ".full_prev",
              nextEl: ".full_next",
            }}
            ref={slideRef}
          >
            {images?.map((image, index) => (
              <SwiperSlide
                key={index}
                onClick={() => setImageSelected(index)}
                className="w-full h-[100%] flex justify-center items-center "
              >
                <img
                  src={`${image}`}
                  alt=""
                  className="w-[80%] h-auto 2xl:w-auto 2xl:h-full z-40 active:cursor-grab"
                />
              </SwiperSlide>
            ))}
            <div
              className={`z-20 absolute top-0 left-0 w-20 h-full flex justify-center items-center bg-transparent  ${
                navFullScreenButtonsVisible.left ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronLeftIcon className="full_prev w-16 text-white cursor-pointer hover:opacity-60 duration-200" />
            </div>

            <div
              className={`absolute z-20   flex justify-center items-center right-0 top-0 w-20 h-full bg-transparent ${
                navFullScreenButtonsVisible.right ? "opacity-100" : "opacity-0"
              }`}
            >
              <ChevronRightIcon className="full_next w-16 text-white cursor-pointer hover:opacity-60 duration-200" />
            </div>
          </Swiper>

          <div
            className="absolute bg-neutral-800 rounded-full right-5 bottom-5 group  z-10 duration-300  p-3 cursor-pointer"
            onClick={() => fullPageImageShow()}
          >
            <ArrowsPointingOutIcon className="w-6  group-hover:opacity-60 duration-300 text-white" />
          </div>
        </div>
        {/* thumbnails */}
        <Swiper
          breakpoints={{
            0: { spaceBetween: 5, slidesPerView: 6 },
            768: { spaceBetween: 5, slidesPerView: 6 },
            1024: { spaceBetween: 5, slidesPerView: MAX_IMAGES_THUMB },
          }}
          className="relative  !flex cursor-grab  bg-primaryColor w-full "
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          modules={[Navigation]}
          ref={thumSlideRef}
          speed={100}
        >
          {images?.map((image, index) => (
            <SwiperSlide
              style={{ backgroundImage: `url(${image})` }}
              className={`relative  aspect-square bg-no-repeat bg-cover bg-center group`}
              onClick={() => setImageSelected(index)}
              key={index}
            >
              <div
                className={`absolute w-full h-full ${
                  index !== imageSelected ? "group-hover:opacity-20 " : ""
                } opacity-0 duration-300 bg-white `}
              ></div>
              {index === imageSelected && (
                <div className="absolute w-full h-full  opacity-60 duration-300 bg-black "></div>
              )}
            </SwiperSlide>
          ))}
          <div
            className={`flex justify-center items-center ${
              navButtonsVisible.left && images.length > MAX_IMAGES_THUMB
                ? "opacity-100"
                : "opacity-0"
            } ease-in `}
          >
            <div className="prev" onClick={() => prevSlide()}>
              <ChevronLeftIcon className="w-5 text-white" />
            </div>
          </div>
          <div
            className={`flex justify-center items-center ${
              navButtonsVisible.right && images?.length > MAX_IMAGES_THUMB
                ? "opacity-100"
                : "opacity-0"
            } ease-out`}
          >
            <div className="next" onClick={() => nextSlide()}>
              <ChevronRightIcon className="w-5 text-white" />
            </div>
          </div>
        </Swiper>
      </div>
      <div
        className={`  ${
          fullPageImage.isVisible
            ? "fullscreen-gallery__active z-50 fixed h-screen w-screen bg-black/90 top-0 bottom-0 right-0 "
            : "fullscreen-gallery "
        } duration-500 `}
      >
        <Swiper
          slidesPerView={1}
          direction={"horizontal"}
          className="relative  w-full h-full select-none "
          initialSlide={imageSelected}
          modules={[Navigation, Mousewheel]}
          mousewheel={true}
          speed={600}
          onSlideChange={(e) => {
            setImageSelected(e.activeIndex);
          }}
          navigation={{
            prevEl: ".full_prev",
            nextEl: ".full_next",
          }}
          ref={thumFullSlideRef}
        >
          {images?.map((image, index) => (
            <SwiperSlide
              key={index}
              onClick={() => setImageSelected(index)}
              className="w-full h-[100%] flex justify-center items-center "
            >
              <div
                className="absolute  z-40 h-full w-full "
                onClick={() => fullPageImageHide()}
              />

              <img
                src={`${image}`}
                alt=""
                className="w-[80%] h-auto 2xl:w-auto 2xl:h-full  active:cursor-grab"
              />
            </SwiperSlide>
          ))}
          <div
            className={`z-40 absolute top-0 left-0 w-20 h-full flex justify-center items-center bg-transparent  ${
              navFullScreenButtonsVisible.left ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronLeftIcon className="full_prev w-16 text-white cursor-pointer hover:opacity-60 duration-200" />
          </div>

          <div
            className={`z-40 absolute flex justify-center items-center right-0 top-0 w-20 h-full bg-transparent ${
              navFullScreenButtonsVisible.right ? "opacity-100" : "opacity-0"
            }`}
          >
            <ChevronRightIcon className="full_next w-16 text-white cursor-pointer hover:opacity-60 duration-200" />
          </div>
          <div
            className=" z-40 absolute  right-4 top-4 bg-transparent cursor-pointer"
            onClick={() => fullPageImageHide()}
          >
            <XMarkIcon className="w-10 text-white hover:opacity-60 duration-200" />
          </div>
        </Swiper>
      </div>
    </div>
  );
}
