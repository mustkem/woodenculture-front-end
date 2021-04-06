import React from "react";
import Link from "next/link";

function SubcategoryItem(props) {
  const { item } = props;
  const params = {};
  console.log(params.category);
  return (
    <div key={item.key} className="col-sm-3 col-12 item">
      <Link href={`/products/${item.value}`}>
        <a>
          <div className="poster">
            <img src={item.imgUrl} alt="" />
          </div>
          <div className="head">
            <div className="label">{item.title}</div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default SubcategoryItem;
