import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { commonActions } from "../../store/common";

import { API_URL } from "../../config";

import ProductItem from "../ProductList/components/ProductItem";

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
        console.log("test", response.data.products);
        const updatedData = [];
        response.data.products.forEach((item) => {
          if (item.status) {
            updatedData.push(item.productId);
          }
        });
        setWishlist(updatedData);
        dispatch(commonActions.getUserStatus());
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
    <div className="wishlist-page">
      <div className="product-list-strip">
        <div className="container">
          <div className="product-list">
            {wishlist &&
              wishlist.map((item) => {
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
        </div>
      </div>
    </div>
  );
}

export default Wishlist;
