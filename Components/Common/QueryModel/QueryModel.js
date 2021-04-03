import React from "react";
import { Button, Modal, Form } from "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";

import { API_URL } from "../../../config";

function QueryModel(props) {
  const { item, show, setShow, type } = props;

  const [note, setNote] = React.useState("");
  const [phoneNum, setPhoneNum] = React.useState("");

  const isLogedIn = useSelector((state) => {
    return state?.common?.user?.data?.isLogedin;
  });

  const handleSubmitQuery = (e, productId) => {
    e.preventDefault();

    const data = {
      productId,
      note,
      phoneNum,
      type: type,
    };

    axios({
      method: "post",
      url: API_URL + "/auth/user/query",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
      data,
    })
      .then(function (response) {
        setShow(false);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <Modal show={show} onHide={setShow} className="book-now-modal">
        <div style={{ maxWidth: 600 }}>
          <Modal.Header closeButton>
            <Modal.Title>{item?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{ margin: "5px auto 30px auto", padding: "0 45px" }}
              className="book-now-wrapper"
            >
              <Form onSubmit={(e) => handleSubmitQuery(e, item?._id)}>
                {!isLogedIn && (
                  <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Please enter phone number"
                      value={phoneNum}
                      onChange={(e) => {
                        setPhoneNum(e.target.value);
                      }}
                    />
                  </Form.Group>
                )}

                <Form.Group>
                  <Form.Label>Note for us</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    type="text"
                    placeholder="Optional"
                    value={note}
                    onChange={(e) => {
                      setNote(e.target.value);
                    }}
                  />
                </Form.Group>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button type="submit" className="bt-main left">
                    Confirm and Submit
                  </button>
                </div>
              </Form>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default QueryModel;
