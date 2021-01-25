import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Modal, Button, Form } from "react-bootstrap";

import "./style/index.scss";

import { IoIosCall } from "react-icons/io";
import { VscCallOutgoing } from "react-icons/vsc";

function SecondaryHeader() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="secondary-strip">
      <Container>
        <div className="content">
          <p>Wooden Art that speaks for you</p>
          <ul>
            <li>
              <a href="tel:+91-9314444747" className="contact-us ">
                <i className="call">
                  <IoIosCall />
                </i>
                +91-7777777777
              </a>
            </li>
            <li>
              <a target="_blank" href="track-order-by-email">
                <i className="pin">
                  <VscCallOutgoing />
                </i>
                Request a Callback
              </a>
            </li>
            <li onClick={handleShow}>
              <Button className="button">Login</Button>
            </li>
          </ul>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-body">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Mobile Number</Form.Label>
                <Form.Control type="number" placeholder="Enter mobile number" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default SecondaryHeader;
