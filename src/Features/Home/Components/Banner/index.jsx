import React from "react";
import Slider from "react-slick";
import "./style.css";
export default function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="overflow-x-hidden bg-[#fffceb]" id="bn">
      <Slider {...settings}>
        {/* <div className="md:max-h-[420px] lg:max-h-[470px] xl:max-h-[650px] 2xl:max-h-[750px]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/home/banner1.png"
            alt="bn1"
          />
        </div> */}
        <div className="md:max-h-[420px] lg:max-h-[470px] xl:max-h-[650px] 2xl:max-h-[750px]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/home/banner2.png"
            alt="bn1"
          />
        </div>
        <div className="md:max-h-[420px] lg:max-h-[470px] xl:max-h-[650px] 2xl:max-h-[750px]">
          <img
            className="w-[100%] h-[100%] object-contain"
            src="/images/home/banner3.png"
            alt="bn1"
          />
        </div>
      </Slider>
    </div>
  );
}
