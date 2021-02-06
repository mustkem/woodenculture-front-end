import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import "./style/index.scss";
import ScreenBanner from "../Common/ScreenBanner";
import { API_URL } from "../../config";

import ProductItem from "./components/ProductItem";

function Products(props) {
  const [products, setProducts] = useState([]);

  const params = useParams();
  const cate = params.category;

  React.useEffect(() => {
    axios({
      method: "get",
      url: API_URL + "/common/category/" + cate,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
    })
      .then(function (response) {
        setProducts(response.data.products);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [cate]);

  return (
    <div>
      <div className="header-strip-product-list">
        <div className="container">
          {/* <div className="row">
            <div className="col">
              <span>Bedroom</span>
            </div>
          </div> */}
        </div>
      </div>
      <div className="product-list-strip">
        <div className="container">
          <div className="product-list">
            {products.map((item) => {
              return <ProductItem item={item} key={item._id} />;
            })}
          </div>
        </div>
      </div>
      <ScreenBanner />
    </div>
  );
}

export default Products;

const metaData = {
  "living-room": {
    title: "Living Room",
    desc: "Living Rooms",
  },
  bedroom: {
    title: "Bedroom",
    desc: "Fine Bedrooms",
  },
  "double-bed": {
    title: "Double Bed",
    desc: "Fine Bedrooms",
  },
  dining: {
    title: "Dining",
    desc: "Living Rooms",
  },
  office: {
    title: "Office",
    desc: "Living Rooms",
  },
  kids: {
    title: "Kids",
    desc: "Living Rooms",
  },
  decor: {
    title: "Decor",
    desc: "Living Rooms",
  },
  bar: {
    title: "Bar",
    desc: "Living Rooms",
  },
};
