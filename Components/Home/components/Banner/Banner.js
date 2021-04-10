import React, { useState, useEffect } from "react";
import Slider from "react-slick";

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };
  return (
    <div className="banner-strip">
      <Slider key={1} className="banner-slider" {...settings}>
        <div className="item">
          <img src="./Images/pexels-pixabay-210265.jpg" className="image" alt="" loading="lazy" />
        </div>
        {/* <div key={2} className="item">
          <img
            src={"https://woodenculture.s3.us-east-2.amazonaws.com/images/banner-2.jpg"}
            className="image"
            alt=""
            loading="lazy"
          />
        </div> */}
        <div key={2} className="item">
          <img src={"./Images/image-furniture-2.jpg"} className="image" alt="" loading="lazy" />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
