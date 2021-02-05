import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="">WoodenCulture</NavLink>
          </div>
          <div className="nav-section">
            <ul className="clearfix">
              {menu.map((item) => {
                return (
                  <li className="nav-item inner-dropdown-parent">
                    <NavLink class="nav-link" to={`${item.cate}`}>
                      {item.title}
                    </NavLink>
                    <ul className="inner-dropdown">
                      {item.categories.map((item) => {
                        console.log("item", item);
                        return (
                          <li className="nav-item">
                            <NavLink class="nav-link-inner" to={`${item.cate}`}>
                              {item.title}
                            </NavLink>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="right-pannel">
            <ul className="clearfix user-sec">
              <li className="inner-dropdown-parent">
                <NavLink to="/login">Company</NavLink>
                <ul className="user-sec inner-dropdown">
                  <li className="login-btn">
                    <NavLink to="/login">Contact Us</NavLink>
                  </li>
                  <li className="login-btn">
                    <NavLink to="/login">About Us</NavLink>
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

const menu = [
  {
    title: "Bedroom",
    cate: "bedroom",
    categories: [
      {
        title: "Almerah",
        cate: "almerah",
      },
      {
        title: "Double Bed",
        cate: "double-bed",
      },
    ],
  },
  {
    title: "Living",
    cate: "living",
    categories: [
      {
        title: "Cabinates",
        cate: "cabinates",
      },
      {
        title: "Tv Tables",
        cate: "tv-tables",
      },
    ],
  },
  {
    title: "Dining",
    cate: "dining",
    categories: [
      {
        title: "Dining Tables",
        cate: "dining-tables",
      },
      {
        title: "Dining Storage",
        cate: "dining-storage",
      },
    ],
  },
  {
    title: "Office",
    cate: "office",
    categories: [
      {
        title: "File Cabinates",
        cate: "file-cabinates",
      },
    ],
  },
  {
    title: "Decore",
    cate: "decore",
    categories: [
      {
        title: "Scereens and wall Deviders",
        cate: "screen-and-deviders",
      },
    ],
  },
  {
    title: "Floor",
    cate: "floor",
    categories: [
      {
        title: "Mapple Flooring",
        cate: "mapple-flooring",
      },
    ],
  },
];
