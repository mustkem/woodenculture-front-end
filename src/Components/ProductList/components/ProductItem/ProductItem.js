import React from "react";
import { path } from "ramda";
import { Button } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var settingProduct = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ProductItem(props) {
  const { item } = props;
  console.log("item", item);
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);

  let slider1 = null;
  let slider2 = null;

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  return (
    <div className="row product-item">
      <div className="col-6 sec-1">
        <Slider {...settingProduct} asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
          {item.images.map((item) => {
            return (
              <div>
                <div className="poster">
                  <img className="image" src={item.url} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="product-thumbs">
          <Slider
            {...settings}
            slidesToShow={item?.images.length < 6 ? item?.images.length : 6}
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            focusOnSelect={true}
          >
            {item?.images.map((item) => {
              return (
                <div className="thumb-item">
                  <div className="thumb-content">
                    <img className="image" src={item.url} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="col-6">
        <div className="head-sec">
          <div className="title">{item?.title}</div>
        </div>
        <p className="description">{item?.description}</p>
        <div className="actions-product">
          <button className="bt-main left">Add to wishlist</button>
          <button className="bt-main right">Book now</button>
        </div>
        <div className="features">
          <div className="title-small">Features</div>
          <div className="details">
            {item?.features.map((item) => {
              return (
                <div className="features-row">
                  <BsTagFill className="icon" />
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
