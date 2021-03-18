import { divide } from "ramda";
import React from "react";
import { Link } from "react-router-dom";

import tvUnits from "../../../../Assets/Images/tv-unit.jpg";
import tables from "../../../../Assets/Images/coffee-table.jpg";

import SubcategoryItem from "./components/SubcategoryItem";

import "./style/index.scss";

const data = [
  {
    title: "Beds",
    imgUrl: "https://www.woodenstreet.com/images/home-new/popular-bed.jpg",
    value: "beds",
  },
  {
    title: "Dining",
    imgUrl:
      "https://images.unsplash.com/photo-1592642214481-a31c5468099a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    value: "dining",
  },
  {
    title: "Tv Units",
    imgUrl: "https://www.woodenstreet.com/images/home-new/shop-8.jpg",
    value: "bathroom",
  },
  {
    title: "Tables",
    imgUrl: tables,
    value: "tables",
  },
  {
    title: "Windows",
    imgUrl: "https://www.wcmanet.org/wp-content/uploads/2020/04/Wood-and-Wonder.jpg",
    value: "windows",
  },
  {
    title: "Seating",
    imgUrl:
      "https://ii1.pepperfry.com/media/catalog/product/m/a/568x625/marin-solid-wood-dining-chair-in-warm-walnut-finish-by-woodsworth-marin-solid-wood-dining-chair-in-w-wcj4mk.jpg",
    value: "seating",
  },
  {
    title: "Storage",
    imgUrl:
      "https://ii2.pepperfry.com/media/catalog/product/l/e/236x260/lewis-hutch-desk-with-3-storage-cabinet-in-walnut-finish-by-home-centre-lewis-hutch-desk-with-3-stor-b2dvfq.jpg",
    value: "storage",
  },
  {
    title: "Shop Counter",
    imgUrl: "https://i.pinimg.com/736x/32/39/f8/3239f829270f84b5d10bfbdf91d15747.jpg",
    value: "Shop Counter",
  },
];

function Subcategories(props) {
  const {} = props;
  return (
    <div className="subcat-strip">
      <div className="container">
        <div>
          <div className="row">
            <div className="col-12 center">
              <div className="head-a ">
                <span className="content">EXPLORE FURNITURE BY CATEGORIES</span>
                <div className="border-item"></div>
              </div>
            </div>
          </div>
          <div className="row">
            {data.map((item, index) => {
              return <SubcategoryItem key={index} item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcategories;


