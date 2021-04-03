import React from "react";
import Link from "next/link";
import Image from "next/image";

function SubcategoryItem(props) {
  const { item } = props;
  const params = {};
  console.log(params.category);
  return (
    <div key={item.key} className="col-3 item">
      <Link href={`/category/${item.value}`}>
        <>
          <div className="poster">
            <img src={item.imgUrl} alt="" />
          </div>
          <div className="head">
            <div className="label">{item.title}</div>
          </div>
        </>
      </Link>
    </div>
  );
}

export default SubcategoryItem;
