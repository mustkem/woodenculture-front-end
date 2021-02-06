import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./style/index.scss";
import ScreenBanner from "../Common/ScreenBanner";
import ContactBar from "../Common/ContactBar";
import { API_URL } from "../../config";
import { path } from "ramda";
import { Button } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";

function Products(props) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  };

  const [products, setProducts] = useState([]);

  const params = useParams();
  const cate = params.category;

  React.useEffect(() => {
    axios({
      method: "get",
      url: API_URL + "/common/category/" + cate,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
    })
      .then(function (response) {
        setProducts(response.data.products);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [cate]);

  return (
    <div>
      <div className="header-strip-product-list">
        <div className="container">
          {/* <div className="row">
            <div className="col">
              <span>Bedroom</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="product-list-strip">
        <div className="container">
          <div className="product-list">
            {products.map((item) => {
              return (
                <div className="row product-item">
                  <div className="col-6 sec-1">
                    <div className="poster">
                      <img className="image" src={path(["images", 0, "url"], item)} alt="" />
                      {/* <ReactImageMagnify
                        {...{
                          smallImage: {
                            alt: item.title,
                            isFluidWidth: true,
                            src: path(["images", 0, "url"], item),
                            height: 400,
                          },
                          largeImage: {
                            src: path(["images", 0, "url"], item),
                            height: 800,
                            width: 700,
                          },
                        }}
                      /> */}
                    </div>
                    <div className="product-thumbs">
                      <Slider
                        {...settings}
                        slidesToShow={item.images.length < 6 ? item.images.length : 6}
                      >
                        {[...item.images, ...item.images].map((item) => {
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
                      <div className="title">{item.title}</div>
                    </div>
                    <p className="description">{item.description}</p>
                    <div className="actions-product">
                      <button className="bt-main left">Add to wishlist</button>
                      <button className="bt-main right">Book now</button>
                    </div>
                    <div className="features">
                      <div className="title-small">Features</div>
                      <div className="details">
                        {item.features.map((item) => {
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
            })}
          </div>
        </div>
      </div>
      <ScreenBanner />
      {/* <ContactBar /> */}
    </div>
  );
}

export default Products;

const metaData = {
  "living-room": {
    title: "Living Room",
    desc: "Living Rooms",
  },
  bedroom: {
    title: "Bedroom",
    desc: "Fine Bedrooms",
  },
  "double-bed": {
    title: "Double Bed",
    desc: "Fine Bedrooms",
  },
  dining: {
    title: "Dining",
    desc: "Living Rooms",
  },
  office: {
    title: "Office",
    desc: "Living Rooms",
  },
  kids: {
    title: "Kids",
    desc: "Living Rooms",
  },
  decor: {
    title: "Decor",
    desc: "Living Rooms",
  },
  bar: {
    title: "Bar",
    desc: "Living Rooms",
  },
};
