import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Modal, Button, Form } from "react-bootstrap";
import { connect } from "react-redux";

import { commonActions } from "../../../../store/common";
import { CgProfile } from "react-icons/cg";

import "./style/index.scss";

import { IoIosCall } from "react-icons/io";
import { VscCallOutgoing } from "react-icons/vsc";

function SecondaryHeader(props) {
  const [show, setShow] = useState(false);
  const [isUserLogedin, showIsUserLogedin] = useState(false);

  const [shouldShowLoginForm, setShouldShowLoginForm] = useState(true);

  const [formDataLogin, setFormData] = useState({ phone_num: "", password: "" });
  const [signUpFormData, setSignUpFormData] = useState({ phone_num: "", password: "", name: "" });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    if (props.userData.data?.userId) {
      showIsUserLogedin(true);
      setShow(false);
    }
  }, [props.userData.data?.userId]);

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
              {isUserLogedin ? (
                <CgProfile />
              ) : (
                <button onClick={handleShow} className="bt-primary">
                  Login
                </button>
              )}
            </li>
          </ul>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose} className="login-modal">
        <Modal.Body>
          <div className="login-wrapper">
            <div className="sec-1">
              <h2>Login</h2>
              <p>Get access to your Wishlist and Recommendations and Orders</p>
            </div>
            <div className="sec-2">
              <div className="form-body">
                {shouldShowLoginForm ? (
                  <Form onSubmit={handleSubmitLogin}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter mobile number"
                        onChange={(e) => {
                          handleChangeLogin("phone_num", e);
                        }}
                        value={formDataLogin.phone_num}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        onChange={(e) => {
                          handleChangeLogin("password", e);
                        }}
                        value={formDataLogin.password}
                      />
                    </Form.Group>
                    <div className="button-grp">
                      <Button
                        onClick={() => {
                          setShouldShowLoginForm(!shouldShowLoginForm);
                        }}
                        variant="outline-primary"
                        type="button"
                      >
                        Create account
                      </Button>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                ) : (
                  <Form onSubmit={handleSubmitSignup}>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        onChange={(e) => {
                          handleChangeSignup("name", e);
                        }}
                        value={signUpFormData.name}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label>Mobile Number</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter mobile number"
                        onChange={(e) => {
                          handleChangeSignup("phone_num", e);
                        }}
                        value={signUpFormData.phone_num}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Password"
                        onChange={(e) => {
                          handleChangeSignup("password", e);
                        }}
                        value={signUpFormData.password}
                      />
                    </Form.Group>
                    <div className="button-grp">
                      <Button
                        onClick={() => {
                          setShouldShowLoginForm(!shouldShowLoginForm);
                        }}
                        variant="outline-primary"
                        type="button"
                      >
                        Login
                      </Button>
                      <Button variant="primary" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                )}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    signupData: state.common.signup,
    userData: state.common.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { login, signup } = commonActions;
  return {
    login: (payload) => dispatch(login(payload)),
    signup: (payload) => dispatch(signup(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SecondaryHeader);
