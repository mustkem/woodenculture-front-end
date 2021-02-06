import React from "react";
import Container from "react-bootstrap/Container";
import { FaTwitter, FaFacebookF, FaPhoneVolume } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-wrp">
          <div className="sec about-us">
            <div className="logo">
              <a href="">Wooden Culture</a>
            </div>
            <ul className="description">
              <li>
                <p>
                  We are pioneer in furniture manufacturing and designing, working in this field
                  since 2 decades. We believe in quality and excellency. Furniture made easy at the
                  comfort of your doorstep.
                </p>
              </li>
            </ul>
            <ul className="social-icons">
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF color={"#3b5998"} />
                </a>
              </li>
            </ul>
          </div>
          <div className="sec more">
            <div className="">
              <h5>Company</h5>
            </div>
            <ul className="">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Subscribe</a>
              </li>
            </ul>
          </div>

          <div className="sec more connect">
            <div className="">
              <h5>Connect with Us</h5>
            </div>
            <ul className="">
              <li>
                <IoIosMail className="connect-icon" />

                <a href="">contact@woodenculture.com</a>
              </li>
              <li>
                <FaPhoneVolume className="connect-icon" />

                <a href="">+1 1201256</a>
              </li>
              <li>
                <FiMapPin className="connect-icon" />
                <a href="">Plot No.- B, Ks-20, Noida,</a>
              </li>
            </ul>
          </div>
          <div className="copyright">Copyright Ⓒ 2019 WoodenCulture. All Rights Reserved.</div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
