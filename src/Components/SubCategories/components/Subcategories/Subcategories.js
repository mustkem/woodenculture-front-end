import React from "react";

import "./style/index.scss";

import SubcategoryItem from "../../../Home/components/Subcategories/components/SubcategoryItem";

function Subcategories(props) {
  const {
    headingData,
    subCategoriesDetails: { data },
  } = props;
  return (
    <div className="subcat-strip">
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <span className="head-a ">{headingData && headingData.title}</span>
          </div>
          <div className="col-12 center">
            <span className="desc-a">Our most-liked looks this month, all in one place.</span>
          </div>
        </div>
        <div className="row">
          {data.payload.map((item, index) => {
            return <SubcategoryItem key={index} item={item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
