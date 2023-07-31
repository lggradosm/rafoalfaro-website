import { Cloudinary } from "@cloudinary/url-gen";
import cloudinaryConfig from "../../../config/cloudinary";
import { AdvancedImage, AdvancedVideo } from "@cloudinary/react";
export default function MediaCloudinary({ type, media }) {
  const cld = new Cloudinary(cloudinaryConfig);
  const style = " w-full h-full block object-center  object-cover";

  if (type === "image") {
    const myImage = cld.image("Rafo Alfaro/page/cover/" + media);
    return <AdvancedImage className={style} cldImg={myImage} />;
  } else {
    const myVideo = cld.video("Rafo Alfaro/page/cover/" + media);
    return (
      <AdvancedVideo className={style} cldVid={myVideo} autoPlay muted loop />
    );
  }
}
