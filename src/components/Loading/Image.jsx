import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import image from "/images/image_loading.webp";
export default function Image({ src, className }) {
  return (
    <LazyLoadImage
      src={src}
      className={className}
      effect="opacity"
      placeholderSrc={image}
    />
  );
}
