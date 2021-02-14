import React, { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";
import { NavLink, useHistory, Link } from "react-router-dom";

import { commonActions } from "../../../../store/common";
import { CgProfile } from "react-icons/cg";

import "./style/index.scss";

import { IoIosCall } from "react-icons/io";
import Login from "../../../Login";

function SecondaryHeader(props) {
  console.log("test5", props.isLogedIn);

  const history = useHistory();
  const myProfileRef = useRef(null);
  const [show, setShow] = useState(false);

  const [shouldShowLoginForm, setShouldShowLoginForm] = useState(true);

  const [formDataLogin, setFormData] = useState({ phone_num: "", password: "" });
  const [signUpFormData, setSignUpFormData] = useState({ phone_num: "", password: "", name: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => {
    props.setLoginModel(true);
    document.querySelectorAll(".sub-dropdown").forEach((node) => {
      node.style.display = "none";
    });
  };

  const handleChangeLogin = (key, e) => {
    const updatedFormData = { ...formDataLogin };

    updatedFormData[key] = e.target.value;

    setFormData(updatedFormData);
  };

  const handleChangeSignup = (key, e) => {
    const updatedSignUpFormData = { ...signUpFormData };

    updatedSignUpFormData[key] = e.target.value;

    setSignUpFormData(updatedSignUpFormData);
  };

  const handleSubmitLogin = (e) => {
    e.preventDefault();

    props.login({
      phone_num: formDataLogin.phone_num,
      password: formDataLogin.password,
    });
  };

  const handleSubmitSignup = (e) => {
    e.preventDefault();

    props.signup({
      phone_num: signUpFormData.phone_num,
      password: signUpFormData.password,
      name: signUpFormData.name,
    });
  };

  useEffect(() => {
    if (props.signupData?.data?.status) {
      setShouldShowLoginForm(true);
    }
  }, [props.signupData?.data?.status]);

  const handleClickOutside = (event) => {
    if (myProfileRef.current && !myProfileRef.current.contains(event.target)) {
      document.querySelectorAll(".sub-dropdown").forEach((node) => {
        node.style.display = "none";
      });
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  return (
    <div className="secondary-strip">
      <Container>
        <div className="content">
          <p>Wooden Art that speaks for you</p>
          <ul>
            <li>
              <a target="_blank" href="track-order-by-email">
                <i className="call">
                  <IoIosCall />
                </i>
                Get a Callback
              </a>
            </li>
            <li>
              {props.isLogedIn ? (
                <div ref={myProfileRef} className="profile-icon-sec">
                  <CgProfile
                    onClick={() => {
                      document.querySelectorAll(".sub-dropdown").forEach((node) => {
                        if (!node.style.display || node.style.display === "none") {
                          node.style.display = "block";
                        } else {
                          node.style.display = "none";
                        }
                      });
                    }}
                    className="nav-item sub-dropdown-parent profile-icon"
                  />

                  <ul className="sub-dropdown">
                    <li className="nav-item">
                      <NavLink
                        onClick={() => {
                          document.querySelectorAll(".sub-dropdown").forEach((node) => {
                            node.style.display = "none";
                          });
                        }}
                        class="nav-link-sub"
                        to={`/`}
                      >
                        My Profile
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <button className="bt-primary">
                        <Link to="/wishlist">My Wishlist</Link>
                      </button>
                    </li>
                    <li className="nav-item">
                      <button
                        onClick={() => {
                          localStorage.removeItem("woodenculture-token");
                          history.replace("/");
                          history.go(0);
                        }}
                        className="bt-primary"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              ) : (
                <button onClick={handleShow} className="bt-primary">
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </Container>

      <Login />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    signupData: state.common.signup,
    userData: state.common.user,
    isLogedIn: state.common.user.data?.isLogedin,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { login, signup, setLoginModel } = commonActions;
  return {
    login: (payload) => dispatch(login(payload)),
    signup: (payload) => dispatch(signup(payload)),
    setLoginModel: (payload) => dispatch(setLoginModel(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryHeader);
