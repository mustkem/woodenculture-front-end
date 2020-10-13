import React from "react";
import Container from "react-bootstrap/Container";
import "./style/index.scss";

import { IoIosCall } from "react-icons/io";
import { VscCallOutgoing } from "react-icons/vsc";

function SecondaryHeader() {
  return (
    <div className="secondary-strip">
      <Container>
        <div className="content">
          <p>The Wooden Art that speak for you</p>
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
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default SecondaryHeader;
