import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import "./style/index.scss";

function ContactBar() {
  return (
    <div className="contact-strip">
      <Container>
        <div className="row">
          <div className="col-6 left-pannel">
            <div className="bg">
              <a>Call us +91 54545454 54</a>
            </div>
          </div>
          <div className="col-6">
            <div className="bg">
              <div className="contact">
                <div>Lets get connected </div>
                <a>Subscribe Us</a>
                <a>Request a Call</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default ContactBar;
