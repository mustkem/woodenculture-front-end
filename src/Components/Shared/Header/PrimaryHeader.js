import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { categories } from "../../../data/data";

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
                {categories.map((item) => {
                  return (
                    <li className="nav-item">
                      <Link class="active" to={`/${item.slug}`}>
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
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
