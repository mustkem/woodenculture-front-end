import React from "react";

import "./style/index.scss";

function ScreenBanner() {
  return (
    <div className="workshop-strip">
      <div className="">
        <div className="content">
          <div className="sec-1">
            <div className="learn-more">
              <div className="HomepageContentCTA-title">
                <h2 className="pl-Heading pl-Heading--marketing-2" data-hb-id="pl-heading">
                  Custom Furniture Workshop at your door step
                </h2>
              </div>
              <div className="HomepageContentCTA-subtitle">
                <p className="pl-Text" data-hb-id="pl-text">
                  Furniture made easy at the comfort of your doorstep. Get in touch with us to
                  discus your needs. We bring you excelence and quality.
                </p>
              </div>
              <div>
                <button className="bt-primary bt-contact-us">Get in touch</button>
              </div>
            </div>
          </div>
          <div className="poster sec-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1038/3444/collections/Furniture_manu_2048x.jpg?v=1521410094"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ScreenBanner;
