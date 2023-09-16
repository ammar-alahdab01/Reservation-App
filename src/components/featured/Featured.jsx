import React from "react";
import "./featured.css";
import img1 from "../../imgs/featured/img1.webp"
import img2 from "../../imgs/featured/img2.webp"
import img3 from "../../imgs/featured/img3.webp"
import img4 from "../../imgs/featured/img4.webp"

function Featured() {
  return (
    <div className="featured">
      <div className="container">
      <div className="featuredItem">
        <img src={img1} alt="featured img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Dublin</h1>
          <h2>404 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img2} alt="featured img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Reno</h1>
          <h2>765 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img3} alt="featured img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Astuin</h1>
          <h2>200 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img src={img4} alt="featured img" className="featuredImg" />
        <div className="featuredTitle">
          <h1>Paris</h1>
          <h2>169 properties</h2>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Featured;
