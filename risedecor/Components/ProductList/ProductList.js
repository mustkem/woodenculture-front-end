import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import "./style/index.scss";
import ScreenBanner from "../Common/ScreenBanner";
import { API_URL } from "../../config";

import ProductItem from "./components/ProductItem";

function Products(props) {
  const [products, setProducts] = useState([]);

  const user = useSelector((state) => {
    console.log("state", state);
    return state.common?.user?.data?.user;
  });

  const params = useParams();
  const cate = params.category;

  React.useEffect(() => {
    getProducts();
  }, [cate]);

  const getProducts = () => {
    axios({
      method: "get",
      url: API_URL + "/feed/products",
      params: {
        category_slug: cate,
      },
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
  };

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
            {products.map((item) => {
              return (
                <ProductItem getProducts={getProducts} user={user} item={item} key={item._id} />
              );
            })}
          </div>
        </div>
      </div>
      <ScreenBanner />
    </div>
  );
}

export default Products;
