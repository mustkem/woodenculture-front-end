import React from "react";
import { Link, useParams } from "react-router-dom";

function SubcategoryItem(props) {
  const { item } = props;
  const params = useParams();
  console.log(params.category);
  return (
    <div key={item.key} className="col-sm-3 col-12 item">
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
}

export default SubcategoryItem;
