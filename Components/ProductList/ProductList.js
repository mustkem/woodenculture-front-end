import React, { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import Layout from "../Layout";

import ScreenBanner from "../Common/ScreenBanner";

import ProductItem from "./components/ProductItem";
import NoRecordFound from "../NoRecordFound";

import { API_URL } from "../../config";

function Products({ products }) {
  const user = useSelector((state) => {
    return state.common?.user?.data?.user;
  });

  return (
    <Layout>
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
              {products &&
                products.length > 0 &&
                products.map((item, index) => {
                  return <ProductItem user={user} item={item} key={index} />;
                })}
            </div>
            {products && products.length === 0 && <NoRecordFound />}
          </div>
        </div>
        <ScreenBanner />
      </div>
    </Layout>
  );
}

export default Products;
