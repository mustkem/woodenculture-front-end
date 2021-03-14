import { divide } from "ramda";
import React from "react";
import { Link } from "react-router-dom";

import tvUnits from "../../../../Assets/Images/tv-unit.jpg";
import tables from "../../../../Assets/Images/coffee-table.jpg";

import img1 from "../../../../Assets/Images/undraw_houses3_xwf7.svg";
import img2 from "../../../../Assets/Images/undraw_coming_home_52ir.svg";
import img3 from "../../../../Assets/Images/undraw_Work_time_re_hdyv.svg";
import img4 from "../../../../Assets/Images/undraw_flowers_vx06.svg";
import img5 from "../../../../Assets/Images/undraw_quite_town_mg2q.svg";
import img6 from "../../../../Assets/Images/undraw_chilling_8tii.svg";

import SubcategoryItem from "./components/SubcategoryItem";

import "./style/index.scss";

function Subcategories(props) {
  const {} = props;
  return (
    <div className="subcat-strip subcat-strip2">
      <div className="container">
        <div className="interior-sec">
          <div className="row">
            <div className="col-12 center">
              <div className="head-a ">
                <span className="content">EXPLORE INTERIOR SERVICES</span>
                <div className="border-item"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {data2.map((item, index) => {
              return (
                <div key={item.key} className="col-4 item">
                  <Link to={`/category/${item.value}`}>
                    <div className="poster">
                      <img src={item.imgUrl} alt="" />
                    </div>
                    <div className="head">
                      <div className="label">{item.title}</div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcategories;

const data2 = [
  {
    title: "House Interior",
    imgUrl: img1,
    value: "house-interior",
  },
  {
    title: "Apartments Interior",
    imgUrl: img2,
    value: "apartments-interior",
  },
  {
    title: "Office Interior",
    imgUrl: img3,
    value: "office-interior",
  },
  {
    title: "Kitchen Interior",
    imgUrl: img4,
    value: "kitchen-nterior",
  },
  {
    title: "Commercial Interior",
    imgUrl: img5,
    value: "commercial-interior",
  },
  {
    title: "More",
    imgUrl: img6,
    value: "all-categories",
  },
];
