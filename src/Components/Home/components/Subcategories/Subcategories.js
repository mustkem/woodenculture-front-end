import React from "react";

import SubcategoryItem from "./components/SubcategoryItem";

import "./style/index.scss";

const data = [
  {
    title: "Double Bed",
    imgUrl: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-1.jpg",
    value: "double-bed",
  },
  {
    title: "Office Table",
    imgUrl: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-2.jpg",
    value: "almerah",
  },
  {
    title: "Bathroom",
    imgUrl: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-3.jpg",
    value: "bathroom",
  },
  {
    title: "Mirrors",
    imgUrl: "https://woodenculture.s3.us-east-2.amazonaws.com/images/sub-cate-1.jpg",
    popular: true,
    value: "mirror",
  },
];

function Subcategories(props) {
  const {} = props;
  return (
    <div className="subcat-strip">
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <span className="head-a ">Popular</span>
          </div>
          <div className="col-12 center">
            <span className="desc-a">Our most-liked looks this month, all in one place.</span>
          </div>
        </div>
        <div className="row">
          {data.map((item, index) => {
            return <SubcategoryItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
