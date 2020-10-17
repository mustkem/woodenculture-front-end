import React from "react";

import "./style/index.scss";

import Image1 from "../../../../Assets/Images/francesca-tosolini-HD7QBx2Yfa4-unsplash.jpg";
import Image2 from "../../../../Assets/Images/f188621063b3fac8503d81fb92b32fde.jpg";
import Image3 from "../../../../Assets/Images/oval-dining-table-set-for-6.jpg";

function Subcategories() {
  return (
    <div className="subcat-strip">
      <div className="container">
        <div className="row">
          <div className="col-12 center">
            <span className="head-a ">Popular</span>
          </div>
          <div className="col-12 center">
            <span className="desc-a">Our most-liked looks this month, all in one place.</span>
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <div className="poster">
              <img src={Image1} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Double Bed</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image2} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Almirah</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image3} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Tables</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image1} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Double Bed</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image2} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Almirah</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image3} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Tables</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image1} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Double Bed</div>
            </div>
          </div>
          <div className="col-3">
            <div className="poster">
              <img src={Image2} alt="" />
              <span className="sticker">Visit Gallery</span>
            </div>
            <div className="head">
              <div className="label">Almirah</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subcategories;
