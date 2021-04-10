import React, { useEffect, useState } from "react";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import { useDispatch } from "react-redux";
import { commonApis } from "../../../store-thunk/common";

import { MdKeyboardArrowDown } from "react-icons/md";

const PrimaryHeader = () => {
  const dispatch = useDispatch();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    dispatch(commonApis.getUserStatus());
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
        <header className="header primary-header">
          <div className="logo">
            <Link href="/">
              <a>
                <span className="logo-icon">
                  <span className="logo-icon-2">R</span>
                </span>
                Rise Decor
              </a>
            </Link>
          </div>
          <div className={`nav-wrap desktop`}>
            <div className="nav-section">
              <ul className="navigation-bar">
                {menu.map((item) => {
                  return (
                    <li
                      key={item.title}
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
                      <Link class="nav-link" href={`/products/${item.cate}`}>
                        <a>
                          <span>{item.title}</span>
                          {item.categories.length > 0 && (
                            <MdKeyboardArrowDown
                              className="arrow-dropdown"
                              style={{ marginLeft: 3 }}
                            />
                          )}
                        </a>
                      </Link>
                      <ul className="inner-dropdown">
                        {item.categories.map((item) => {
                          return (
                            <li key={item.title} className="nav-item">
                              <Link
                                onClick={() => {
                                  document.querySelectorAll(".inner-dropdown").forEach((node) => {
                                    node.style.display = "none";
                                  });
                                }}
                                class="nav-link-inner"
                                href={`/products/${item.cate}`}
                              >
                                <a>{item.title}</a>
                              </Link>
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
                  <Link className="nav-link" href="/">
                    <a>
                      <span> Company </span>
                      <MdKeyboardArrowDown className="arrow-dropdown" style={{ marginLeft: 3 }} />
                    </a>
                  </Link>
                  <ul className="inner-dropdown">
                    <li className="nav-item">
                      <Link href="/contact-us">
                        <a>Contact Us</a>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link href="/about-us">
                        <a>About Us</a>
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <div className={`nav-wrap mobile ${isMobileMenuOpen ? "open" : ""}`}>
            <div className="nav-section">
              <ul className="navigation-bar">
                {menu.map((item) => {
                  return (
                    <li key={item.title} className="nav-item inner-dropdown-parent">
                      <div className="link-wrapper">
                        <Link class="nav-link" href={`/products/${item.cate}`}>
                          <a
                            className="link-l-1"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <span>{item.title}</span>
                          </a>
                        </Link>
                        {item.categories.length > 0 && (
                          <MdKeyboardArrowDown
                            className="arrow-dropdown mobile"
                            style={{ marginLeft: 3 }}
                            onClick={(e) => {
                              let dropdown = e.target.parentNode.parentNode.querySelectorAll(
                                ".inner-dropdown"
                              )[0];
                              if (dropdown) {
                                if (!dropdown.style.display || dropdown.style.display === "none") {
                                  dropdown.style.display = "block";
                                } else {
                                  dropdown.style.display = "none";
                                }
                              }
                            }}
                          />
                        )}
                      </div>

                      <ul className="inner-dropdown">
                        {item.categories.map((item) => {
                          return (
                            <li key={item.title} className="nav-item">
                              <Link
                                onClick={() => {
                                  document.querySelectorAll(".inner-dropdown").forEach((node) => {
                                    node.style.display = "none";
                                  });
                                }}
                                class="nav-link-inner"
                                href={`/products/${item.cate}`}
                              >
                                <a
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                  }}
                                >
                                  {item.title}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </li>
                  );
                })}
                <li className="nav-item">
                  <Link href="/contact-us">
                    <a>Contact Us</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about-us">
                    <a>About Us</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <span
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
            className={`hamburger ${isMobileMenuOpen ? "open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </header>
      </div>
    </Container>
  );
};

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
        title: "Storage",
        cate: "storage",
      },
      {
        title: "Tables",
        cate: "tables",
      },
      {
        title: "Almirahs",
        cate: "almirahs",
      },
    ],
  },
  {
    title: "Office",
    cate: "office",
    categories: [
      // {
      //   title: "Office Interior",
      //   cate: "office-interior",
      // },
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
    title: "Gates",
    cate: "gates",
    categories: [
      {
        title: "Doors",
        cate: "doors",
      },
      {
        title: "Windows",
        cate: "windows",
      },
      {
        title: "Door Frames",
        cate: "door-frames",
      },
      {
        title: "Window Frames",
        cate: "window-frames",
      },
    ],
  },
  // {
  //   title: "Interior",
  //   cate: "interior",
  //   categories: [
  //     {
  //       title: "Home Interior",
  //       cate: "home-interior",
  //     },
  //     {
  //       title: "Appartment Interior",
  //       cate: "appartment-interior",
  //     },
  //     {
  //       title: "Kitchen Interior",
  //       cate: "kitchen-interior",
  //     },
  //     {
  //       title: "Commercial Interior",
  //       cate: "commercial-interior",
  //     },
  //   ],
  // },
  {
    title: "Modular Kitchen",
    cate: "modular-kitchen",
    categories: [],
  },
];

export default PrimaryHeader;
