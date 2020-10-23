import React from "react";
import { Link, useParams } from "react-router-dom";

import "./style/index.scss";
import ScreenBanner from "../Common/ScreenBanner";
import ContactBar from "../Common/ContactBar";

function SubCategoryDetail() {
  const params = useParams();

  console.log(params);

  return (
    <div>
      <div className="header-strip-product-list">
        <div className="container">
          <div className="row">
            <div className="col">
              {Object.keys(params).map((item) => {
                const key = params[item];
                return <span>{metaData[key].title} </span>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="product-list-strip">
        <div className="container">
          <div className="product-list">
            {productList.data.map((item) => {
              return (
                <div className="row product-item">
                  <div className="col-6">
                    <div className="poster">
                      {item.images.map((itm) => {
                        console.log(itm.url);
                        return <img className="image" src={itm.url} alt="" />;
                      })}
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="head-sec">
                      <div className="title">{item.title}</div>
                      <div className="actions">
                        <a href="/#">Call Us</a>
                        <button className="btn btn-small">Request Calback</button>
                      </div>
                    </div>
                    <p className="description">{item.description} </p>
                    <div className="features">
                      <div className="title-small">Features</div>
                      <div className="details">
                        {Object.keys(item.details).map((key) => {
                          return (
                            <div className="row">
                              <div className="col col-6 left">
                                <div className="sheet">{key} </div>
                              </div>
                              <div className="col col-6 right">
                                {" "}
                                <div className="sheet"> {item.details[key]} </div>
                              </div>
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
      <ContactBar />
    </div>
  );
}

export default SubCategoryDetail;

const productList = {
  data: [
    {
      images: [
        {
          url:
            "https://woodenculture.s3.us-east-2.amazonaws.com/images/Iglesias%2BCoffee%2BTable.jpg",
        },
      ],
      title: "Iglesias Coffee Table",
      description:
        "Sure to make a statement as a centerpiece in your seating ensemble, this coffee table offers rustic, modern charm in one posh piece! Showcasing.",
      details: {
        Material: "Wood, Glass",
        Customization: "Available",
        "Best Suited For": "Bedroom",
        Prediction:
          "even if you live in the city, this piece will bring the beach feel to your living room!",
      },
    },
    {
      images: [
        {
          url:
            "https://woodenculture.s3.us-east-2.amazonaws.com/images/Iglesias%2BCoffee%2BTable.jpg",
        },
      ],
      title: "Iglesias Coffee Table",
      description:
        "Sure to make a statement as a centerpiece in your seating ensemble, this coffee table offers rustic, modern charm in one posh piece! Showcasing.",
      details: {
        Material: "Wood, Glass",
        Customization: "Available",
        "Best Suited For": "Bedroom",
        Prediction:
          "even if you live in the city, this piece will bring the beach feel to your living room!",
      },
    },
  ],
};

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
