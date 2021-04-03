import React, { useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import ScreenBanner from "../Common/ScreenBanner";

import ProductItem from "./components/ProductItem";

function Products(props) {
  const user = useSelector((state) => {
    return state.common?.user?.data?.user;
  });

  return (
    <div className="product-list-page">
      {/* <div className="header-strip-product-list">
        <div className="container">
          <div className="row">
            <div className="col">
              <span>Bedroom</span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="product-list-strip">
        <div className="container">
          <div className="product-list">
            {/* {products.map((item) => {
              return (
                <ProductItem getProducts={getProducts} user={user} item={item} key={item._id} />
              );
            })} */}
          </div>
        </div>
      </div>
      <ScreenBanner />
    </div>
  );
}

export default Products;
