import React from "react";
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
          {feedback.map((item) => {
            return (
              <div className="card-item">
                <div className="card-content">
                  <div className="">
                    {/* <div className="figure">
                      <img src={img} />
                    </div> */}
                    <div className="name">
                      <span className=" block">{item.name}</span>
                    </div>
                    <div className="location">{item.location}</div>
                  </div>

                  <p>{item.comment}</p>
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

const feedback = [
  {
    name: "Rahul Kumar",
    location: "Delhi",
    comment: "Excellent service loved the values they bought to us.",
  },
  {
    name: "Divya Goyal",
    location: "Gurgaon",
    comment: "Thank you so much for making our home beautiful.",
  },
  {
    name: "Jatin Malik",
    location: "Gurgaon",
    comment:
      "I am more than happy with the service I have received and I would have no hesitation in recommending Rise Decor.",
  },
  {
    name: "Kishore Yerra",
    location: "Noida",
    comment: "I am impressed by their expertise, commitment and knowledge in furnitures.",
  },
];
