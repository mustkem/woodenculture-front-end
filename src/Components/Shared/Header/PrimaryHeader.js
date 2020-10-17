import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

export default class extends React.Component {
  render() {
    return (
      <Container>
        <div>
          <header className="header primary-header clearfix">
            <div className="logo">
              <Link to="">WoodenCulture</Link>
            </div>
            <div className="nav-section">
              <ul className="clearfix">
                <li className="nav-item">
                  <Link class="active" to="/living-room">
                    Living
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bedroom">Bedroom</Link>
                </li>
                <li className="nav-item">
                  <Link to="/dining">Dining</Link>
                </li>
                <li className="nav-item">
                  <Link to="/office">Office</Link>
                </li>
                <li className="nav-item">
                  <Link to="/kids">Kids</Link>
                </li>
                <li className="nav-item">
                  <Link to="/decor">Decor</Link>
                </li>
                <li className="nav-item">
                  <Link to="/bar">Bar</Link>
                </li>
              </ul>
            </div>

            <div className="right-pannel">
              <ul className="clearfix user-sec">
                <li className="inner-dropdown-parent">
                  <Link to="/login">Company</Link>
                  <ul className="user-sec inner-dropdown">
                    <li className="login-btn">
                      <Link to="/login">Contact Us</Link>
                    </li>
                    <li className="login-btn">
                      <Link to="/login">About Us</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </header>
        </div>
      </Container>
    );
  }
}
