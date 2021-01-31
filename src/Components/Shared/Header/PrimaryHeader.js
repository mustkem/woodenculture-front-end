import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";

import { API_URL } from "../../../config";

const PrimaryHeader = () => {
  const [menuData, setMenuData] = useState([]);

  useEffect(() => {
    axios({
      method: "get",
      url: API_URL + "/common/main-menu",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("woodenculture-token"),
      },
    })
      .then(function (response) {
        setMenuData(response.data.mainMenu);
        return response.data;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  console.log("menuData", menuData);
  return (
    <Container>
      <div>
        <header className="header primary-header clearfix">
          <div className="logo">
            <Link to="">WoodenCulture</Link>
          </div>
          <div className="nav-section">
            <ul className="clearfix">
              {menuData.map((item) => {
                return (
                  <li className="nav-item">
                    <Link class="active" to={`category-${item._id}`}>
                      {item.title}
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
};

export default PrimaryHeader;
