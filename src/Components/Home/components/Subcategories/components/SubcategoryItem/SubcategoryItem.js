import React from "react";
import { Link, useParams } from "react-router-dom";

function SubcategoryItem(props) {
  const { item } = props;
  const params = useParams();
  console.log(params.category);
  return (
    <div key={item.key} className="col-3">
      <Link to={`/${item.category_slug}/double-bed`}>
        <div className="poster">
          <img src={item.image_url} alt="" />
          <span className="sticker">Visit Gallery</span>
        </div>
        <div className="head">
          <div className="label">{item.title}</div>
        </div>
      </Link>
    </div>
  );
}

export default SubcategoryItem;
