import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { commonActions } from "../../store/common";

import { API_URL } from "../../config";

import ProductItem from "../ProductList/components/ProductItem";
import Layout from "../Layout";
import NoRecordFound from "../NoRecordFound";

function Wishlist() {
  const [wishlist, setWishlist] = React.useState(null);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getWishlist();
  }, []);

  const getWishlist = () => {
    axios({
      method: "get",
      url: API_URL + "/auth/user/wishlist",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
    })
      .then(function (response) {
        const updatedData = [];
        response.data.products.forEach((item) => {
          if (item.status && item.productId) {
            updatedData.push(item.productId);
          }
        });
        setWishlist(updatedData);
        dispatch(commonActions.getUserStatus()); //get updated user data
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const removeFromWishlist = (productId) => {
    axios({
      method: "patch",
      url: API_URL + "/auth/user/wishlist",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
      params: {
        productId,
        status: false,
      },
    })
      .then(function (response) {
        getWishlist();
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Layout>
      <div className="wishlist-page">
        <div className="product-list-strip">
          <div className="container">
            <div className="product-list">
              {wishlist &&
                wishlist.length > 0 &&
                wishlist.map((item) => {
                  if (!item) return null;
                  return (
                    <ProductItem
                      item={item}
                      key={item._id}
                      removeFromWishlist={removeFromWishlist}
                      wishlistPage
                    />
                  );
                })}
            </div>
            {wishlist && wishlist.length === 0 && <NoRecordFound />}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Wishlist;
