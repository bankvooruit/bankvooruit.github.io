import React from "react";
import Slider from "react-slick";
import { map } from "lodash";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ImageCarousel({ images }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    slide: "img",
    className:
      "w-[250px] sm:w-[350px] md:w-[450px] lg:w-[750px] block mx-auto text-white",
  };

  return (
    <Slider {...settings}>
      {map(images, (image) => (
        <img
          src={image.foto}
          alt={image.alt}
          key={image.foto}
          className="w-full rounded-lg shadow"
        />
      ))}
    </Slider>
  );
}
