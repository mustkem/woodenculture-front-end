import React from "react";
import img from "../../../../Assets/Images/astrologer2.jpeg";
import Slider from "react-slick";
import Container from "react-bootstrap/Container";

function OurCustomers() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="social-reach">
      <Container>
        <h2>What do people say about us</h2>
        <Slider {...settings}>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0].map((item) => {
            return (
              <div className="card-item">
                <div className="card-content">
                  <div className="flex items-center">
                    <div className="figure">
                      <img src={img} />
                    </div>
                    <div className="name">
                      <span className=" block">Rajnikant Surya</span>
                      <span className="block ">India</span>
                    </div>
                  </div>

                  <p>
                    There is no comparison of AstroTalk when it comes to getting a free horoscope
                    and checking horoscope online in the Astrology industry. They have
                    revolutionized.
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </Container>
    </div>
  );
}

export default OurCustomers;
