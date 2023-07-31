import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import MediaCloudinary from "./MediaCloudinary";
import { useHomeContext } from "../../../contexts/HomeProvider";
export default function SliderCovers() {
  const { covers, loaded } = useHomeContext();
  const SLIDE_DURATION = 5000;
  if (loaded)
    return (
      <div className=" w-full h-screen relative ">
        <Swiper
          centeredSlides={true}
          slidesPerView={"1"}
          autoplay={{
            delay: SLIDE_DURATION,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          loop={true}
          className="relative w-full h-full "
          modules={[Autoplay]}
        >
          {covers?.map((element) => {
            return (
              <SwiperSlide
                key={element.id}
                className={`relative w-full h-full   `}
              >
                {element.file_type == "image" ? (
                  <img
                    src={element.media_url}
                    alt=""
                    className=" w-full h-full  object-center  object-cover"
                  />
                ) : (
                  <video
                    autoPlay
                    loop
                    muted
                    className="object-center object-cover h-full w-full"
                  >
                    <source src={element.media_url} type="video/mp4" />
                  </video>
                )}
                {/* <MediaCloudinary
                  media={element.media_url}
                  type={element.file_type}
                /> */}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  else return <div className="h-screen">Loading</div>;
}
