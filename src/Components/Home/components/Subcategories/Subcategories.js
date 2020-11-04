import React from "react";

import SubcategoryItem from "./components/SubcategoryItem";

import "./style/index.scss";

function Subcategories(props) {
  const {
    subCategoriesDetails: { data },
  } = props;
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
          {data &&
            data.items.map((item, index) => {
              return <SubcategoryItem key={index} item={item} />;
            })}
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
