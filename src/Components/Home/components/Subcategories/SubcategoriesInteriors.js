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
    title: "Shoe Racks",
    imgUrl: "https://www.woodenstreet.com/images/home-new/popular-shoe-racks.jpg",
    value: "shoe-racks",
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
    imgUrl:
      "https://images.unsplash.com/photo-1584622781564-1d987f7333c1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    value: "house-interior",
  },
  {
    title: "Apartments Interior",
    imgUrl:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8YXBhcnRtZW50JTIwaW50ZXJpb3J8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: "apartments-interior",
  },
  {
    title: "Office Interior",
    imgUrl:
      "https://images.unsplash.com/photo-1551215717-8bc8cfe833ee?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8&auto=format&fit=crop&w=500&q=60",
    value: "office-interior",
  },
  {
    title: "Kitchen Interior",
    imgUrl:
      "https://images.unsplash.com/photo-1574118139729-802bff727a0c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fGtpdGNoZW4lMjBpbnRlcmlvcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: "kitchen-nterior",
  },
  {
    title: "Commercial Interior",
    imgUrl:
      "https://images.unsplash.com/photo-1495544515279-434b8d991640?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8Y29tbWVyY2lhbCUyMGludGVyaW9yfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    value: "commercial-interior",
  },
  {
    title: "More",
    imgUrl:
      "https://ii1.pepperfry.com/media/catalog/product/m/a/568x625/marin-solid-wood-dining-chair-in-warm-walnut-finish-by-woodsworth-marin-solid-wood-dining-chair-in-w-wcj4mk.jpg",
    value: "all-categories",
  },
];
