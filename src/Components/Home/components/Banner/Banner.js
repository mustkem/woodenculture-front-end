import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "./style/index.scss";

import image1 from "../../../../Assets/Images/pexels-pixabay-210265.jpg";
import image2 from "../../../../Assets/Images/pexels-karl-solano-2883049.jpg";

import image3 from "../../../../Assets/Images/fran-hogan-BDRzsymkZho-unsplash.jpg";
import tempImg from "../../../../Assets/Images/logo.png";

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
      <Slider className="banner-slider" {...settings}>
        <div className="item">
          <img src={image1} className="image" alt="" loading="lazy" />
        </div>
        <div className="item">
          <img
            src={"https://woodenculture.s3.us-east-2.amazonaws.com/images/banner-2.jpg"}
            className="image"
            alt=""
            loading="lazy"
          />
        </div>
        <div className="item">
          <img
            src={"https://woodenculture.s3.us-east-2.amazonaws.com/images/banner-3.jpg"}
            className="image"
            alt=""
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
