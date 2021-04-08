import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";
import Slider from "react-slick";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

import { commonActions, commonApis } from "../../../../store-thunk/common";
import { productsApis } from "../../../../store-thunk/products";

import { API_URL } from "../../../../config";

import QueryModel from "../../../Common/QueryModel";

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

var settingProduct = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

function ProductItem(props) {
  const dispatch = useDispatch();
  const router = useRouter();

  console.log("testrrrrr eoyter", router.query);
  const isLogedIn = useSelector((state) => {
    return state.common.user.data?.isLogedin;
  });

  const { item, user } = props;
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  const [bookNowModel, setBookNowModel] = React.useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let slider1 = null;
  let slider2 = null;

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, []);

  const handleAddWishlist = (productId, status) => {
    axios({
      method: "patch",
      url: API_URL + "/auth/user/wishlist",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
      params: {
        productId,
        status,
      },
    })
      .then(function (response) {
        dispatch(productsApis.fetchProducts({ category_slug: router.query.tag }));
        dispatch(commonApis.getUserStatus()); ///get updated user data
        handleShow();
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isAddedToWishlist = (productId) => {
    let flag = false;
    user &&
      user.wishlist &&
      user.wishlist.forEach((item) => {
        if (item.productId === productId && item.status) {
          flag = true;
        }
      });
    return flag;
  };

  return (
    <div className="row product-item">

      <div className="col-12 col-sm-6 sec-1">
        <div className="mobile-head-sec">
          <div className="title">{item?.title}</div>
        </div>
        <Slider {...settingProduct} asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
          {item.images &&
            item.images.map((item) => {
              return (
                <div>
                  <div className="poster">
                    <img
                      className="image"
                      src={"https://woodenculture-backend.herokuapp.com/" + item.url}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
        </Slider>
        {/* <div className="product-thumbs">
          <Slider
            {...settings}
            slidesToShow={item?.images.length < 6 ? item?.images.length : 6}
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            focusOnSelect={true}
          >
            {item?.images.map((item) => {
              return (
                <div className="thumb-item">
                  <div className="thumb-content">
                    <img
                      className="image"
                      src={"https://woodenculture-backend.herokuapp.com/" + item.url}
                      alt=""
                    />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div> */}
      </div>
      <div className="col-12 col-sm-6">
        <div className="head-sec">
          <div className="title">{item?.title}</div>
        </div>
        <p className="description">{item?.description}</p>
        <div className="actions-product">
          {props.wishlistPage ? (
            <button
              onClick={() => {
                props.removeFromWishlist(item._id);
              }}
              className="bt-main left"
            >
              Remove from wishlist
            </button>
          ) : (
              <>
                {isAddedToWishlist(item._id) ? (
                  <button
                    onClick={() => {
                      if (!isLogedIn) {
                        dispatch(commonActions.setLoginModel(true));
                        return false;
                      }
                      handleAddWishlist(item._id, false);
                    }}
                    className="bt-main left"
                  >
                    Added to wishlist
                  </button>
                ) : (
                    <button
                      onClick={() => {
                        if (!isLogedIn) {
                          dispatch(commonActions.setLoginModel(true));
                          return false;
                        }
                        handleAddWishlist(item._id, true);
                      }}
                      className="bt-main left"
                    >
                      Add to wishlist
                    </button>
                  )}
              </>
            )}

          <button
            onClick={() => {
              setBookNowModel(true);
            }}
            className="bt-main right"
          >
            Book now
          </button>
        </div>
        <div className="features">
          <div className="title-small">Features</div>
          <div className="details">
            {item?.features.map((item) => {
              return (
                <div className="features-row">
                  <BsTagFill className="icon" />
                  <strong>{item.title}</strong>
                  <span>{item.desc}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{item?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isAddedToWishlist(item._id) ? "Added to wishlist" : "Removed from wishlist"}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <QueryModel show={bookNowModel} setShow={setBookNowModel} item={item} type="Product query" />
    </div>
  );
}

export default ProductItem;
