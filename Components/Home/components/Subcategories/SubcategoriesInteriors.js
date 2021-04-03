import React from "react";
import Link from "next/link";

function Subcategories(props) {
  const {} = props;
  return (
    <div className="subcat-strip subcat-strip-2">
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
                <div key={item.key} className="col-4 item card-item">
                  <Link href={`/category/${item.value}`}>
                    <div className="content">
                      <div className="poster">
                        <img src={item.imgUrl} alt="" />
                      </div>
                      <div className="head">
                        <div className="label">{item.title}</div>
                      </div>
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
    imgUrl: "./Images/undraw_houses3_xwf7.svg",
    value: "house-interior",
  },
  {
    title: "Apartments Interior",
    imgUrl: "./Images/undraw_coming_home_52ir.svg",
    value: "apartments-interior",
  },
  {
    title: "Office Interior",
    imgUrl: "./Images/undraw_Work_time_re_hdyv.svg",
    value: "office-interior",
  },
  {
    title: "Kitchen Interior",
    imgUrl: "./Images/undraw_flowers_vx06.svg",
    value: "kitchen-nterior",
  },
  {
    title: "Commercial Interior",
    imgUrl: "./Images/undraw_quite_town_mg2q.svg",
    value: "commercial-interior",
  },
  {
    title: "More",
    imgUrl: "./Images/undraw_chilling_8tii.svg",
    value: "all-categories",
  },
];
