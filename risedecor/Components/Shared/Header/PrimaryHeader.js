import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";
import { useDispatch } from "react-redux";
import { commonActions } from "../../../store/common";

import { RiArrowDropDownLine } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'


import { API_URL } from "../../../config";

const PrimaryHeader = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commonActions.getUserStatus());
  }, []);

  const handleMouseEnter = (e) => {
    const node = e.target;
    const liNode = node.parentNode;

    if (node instanceof HTMLElement) {
      const child = liNode.querySelectorAll(".inner-dropdown")[0];
      if (child) {
        child.style.display = "block";
      }
    }
  };

  const handleMouseLeave = (e) => {
    const node = e.target;
    if (node instanceof HTMLElement) {
      document.querySelectorAll(".inner-dropdown").forEach((node) => {
        node.style.display = "none";
      });
    }
  };

  return (
    <Container>
      <div>
        <header className="header primary-header clearfix">
          <div className="logo">
            <NavLink to="">
              <span className="logo-icon">
                <span className="logo-icon-2">R</span>
              </span>
              Rise Decor
            </NavLink>
          </div>
          <div className="nav-section">
            <ul className="navigation-bar">
              {menu.map((item) => {
                return (
                  <li
                    onMouseEnter={(e) => {
                      handleMouseEnter(e);
                    }}
                    onMouseLeave={(e) => {
                      handleMouseLeave(e);
                    }}
                    onClick={() => {
                      document.querySelectorAll(".inner-dropdown").forEach((node) => {
                        node.style.display = "none";
                      });
                    }}
                    className="nav-item inner-dropdown-parent"
                  >
                    <NavLink class="nav-link" to={`/category/${item.cate}`}>
                      <span>{item.title}</span>
                      {
                        item.categories.length>0 &&
                      <MdKeyboardArrowDown className="arrow-dropdown" style={{marginLeft:3}} />
                      }
                    </NavLink>
                    <ul className="inner-dropdown">
                      {item.categories.map((item) => {
                        return (
                          <li className="nav-item">
                            <NavLink
                              onClick={() => {
                                document.querySelectorAll(".inner-dropdown").forEach((node) => {
                                  node.style.display = "none";
                                });
                              }}
                              class="nav-link-inner"
                              to={`/category/${item.cate}`}
                            >
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
            <ul className="navigation-bar">
              <li
                onMouseEnter={(e) => {
                  handleMouseEnter(e);
                }}
                onMouseLeave={(e) => {
                  handleMouseLeave(e);
                }}
                onClick={() => {
                  document.querySelectorAll(".inner-dropdown").forEach((node) => {
                    node.style.display = "none";
                  });
                }}
                className="nav-item inner-dropdown-parent"
              >
                <NavLink className="nav-link" to="/">
                 <span> Company </span>
                      <MdKeyboardArrowDown className="arrow-dropdown" style={{marginLeft:3}} />
                </NavLink>
                <ul className="inner-dropdown">
                  <li className="nav-item">
                    <NavLink to="/contact-us">Contact Us</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/about-us">About Us</NavLink>
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
        title: "Double Bed",
        cate: "double-bed",
      },
      {
        title: "Single Bed",
        cate: "single-bed",
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
        title: "Office Interior",
        cate: "office-interior",
      },
      {
        title: "Office Furniture",
        cate: "office-furniture",
      },
    ],
  },
  // {
  //   title: "Floor",
  //   cate: "floor",
  //   categories: [
  //     {
  //       title: "Mapple Flooring",
  //       cate: "mapple-flooring",
  //     },
  //   ],
  // },
  {
    title: "Gate",
    cate: "gate",
    categories: [
      {
        title: "Doors",
        cate: "Doors",
      },
      {
        title: "Door Frames",
        cate: "door-frames",
      },
      {
        title: "Window Frames",
        cate: "window-frames",
      },
      {
        title: "Door Frames",
        cate: "door-frames",
      },
    
    ],
  },
  {
    title: "Interior",
    cate: "interior",
    categories: [
      {
        title: "Home Interior",
        cate: "home-nterior",
      },
      {
        title: "Appartment Interior",
        cate: "appartment-interior",
      },
      {
        title: "Kitchen Interior",
        cate: "kitchen-interior",
      },
      {
        title: "Commercial Interior",
        cate: "commercial-interior",
      },
    ],
  },
  {
    title: "Modular Kitchen",
    cate: "modular-kitchen",
    categories: [],
  },
];
