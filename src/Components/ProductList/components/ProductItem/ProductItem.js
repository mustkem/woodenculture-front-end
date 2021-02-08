import React, { useState } from "react";
import { path } from "ramda";
import { Button, Modal } from "react-bootstrap";
import { BsTagFill } from "react-icons/bs";
import ReactImageMagnify from "react-image-magnify";
import Slider from "react-slick";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import { commonActions } from "../../../../store/common";

import { API_URL } from "../../../../config";

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

  const { item, user, getProducts } = props;
  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);

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
        getProducts();
        dispatch(commonActions.getUserStatus());
        handleShow();
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const isAddedToWishlist = (productId) => {
    let flag = false;
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
      <div className="col-6 sec-1">
        <Slider {...settingProduct} asNavFor={nav2} ref={(slider) => (slider1 = slider)}>
          {item.images.map((item) => {
            return (
              <div>
                <div className="poster">
                  <img className="image" src={item.url} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
        <div className="product-thumbs">
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
                    <img className="image" src={item.url} alt="" />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
      <div className="col-6">
        <div className="head-sec">
          <div className="title">{item?.title}</div>
        </div>
        <p className="description">{item?.description}</p>
        <div className="actions-product">
          {isAddedToWishlist(item._id) ? (
            <button
              onClick={() => {
                handleAddWishlist(item._id, false);
              }}
              className="bt-main left"
            >
              Added to wishlist
            </button>
          ) : (
            <button
              onClick={() => {
                handleAddWishlist(item._id, true);
              }}
              className="bt-main left"
            >
              Add to wishlist
            </button>
          )}

          <button className="bt-main right">Book now</button>
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
    </div>
  );
}

export default ProductItem;
