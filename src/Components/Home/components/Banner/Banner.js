import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import "./style/index.scss";

import image1 from "../../../../Assets/Images/pexels-pixabay-210265.jpg";
import image2 from "../../../../Assets/Images/pexels-karl-solano-2883049.jpg";

import image3 from "../../../../Assets/Images/fran-hogan-BDRzsymkZho-unsplash.jpg";
import tempImg from "../../../../Assets/Images/logo.png";

const MyImage = (src) => {
  const [mySrc, setMySrc] = useState(tempImg);
  useEffect(() => {
    setTimeout(() => {
      setMySrc(src);
    }, 0);
  }, []);
  return <img src={mySrc} className="image" alt="" loading="lazy" />;
};

function Banner() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="banner-strip">
      <Slider className="banner-slider" {...settings}>
        <div className="item">{MyImage(image1)}</div>
        <div className="item">
          {MyImage("https://woodenculture.s3.us-east-2.amazonaws.com/images/banner-2.jpg")}
        </div>
        <div className="item">
          {MyImage("https://woodenculture.s3.us-east-2.amazonaws.com/images/banner-3.jpg")}
        </div>
      </Slider>
    </div>
  );
}

export default Banner;
