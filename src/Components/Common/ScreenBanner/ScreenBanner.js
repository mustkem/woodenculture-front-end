import React from "react";

import "./style/index.scss";

function ScreenBanner() {
  return (
    <div className="workshop-strip">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="learn-more">
              <a
                href="https://www.jossandmain.com/fall-fashion~b141.html"
                className="HomepageContentCTA"
              >
                <div className="HomepageContentCTA-title">
                  <h2 className="pl-Heading pl-Heading--marketing-2" data-hb-id="pl-heading">
                    Custom Workshop at your door step
                  </h2>
                </div>
                <div className="HomepageContentCTA-subtitle">
                  <p className="pl-Text" data-hb-id="pl-text">
                    From menswear prints to vintage neutrals – here's what to bring into your home.
                  </p>
                </div>
                <a href="asd" className="link">
                  More
                </a>
              </a>
            </div>
          </div>
          <div className="col-8 poster">
            <img
              src="https://secure.img1-fg.wfcdn.com/im/52616384/resize-h1080-w1440%5Ecompr-r85/1287/128725774/Inspired+by%253A+Fall+Fashion.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenBanner;
