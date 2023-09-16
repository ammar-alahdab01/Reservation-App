import React from "react";
import "./propertylist.css";
import img1 from "../../imgs/property/img1.jpg";
import img2 from "../../imgs/property/img2.jpg";
import img3 from "../../imgs/property/img3.jpg";
import img4 from "../../imgs/property/img4.jpg";
import img5 from "../../imgs/property/img5.jpg";

function PropertyList() {
  return (
    <div className="pList">
      <div className="pListContainer">
        <div className="pListItem">
          <div className="imgContainer">
            <img src={img1} alt="property img" className="pListImg" />
          </div>
          <div className="pListTitle">
            <h1>Hotels</h1>
            <h2>3100 Hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <div className="imgContainer">
            <img src={img2} alt="property img" className="pListImg" />
          </div>
          <div className="pListTitle">
            <h1>Capins</h1>
            <h2>445 Hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <div className="imgContainer">
            <img src={img3} alt="property img" className="pListImg" />
          </div>
          <div className="pListTitle">
            <h1>Apartments</h1>
            <h2>117 Hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <div className="imgContainer">
            <img src={img4} alt="property img" className="pListImg" />
          </div>
          <div className="pListTitle">
            <h1>Resorts</h1>
            <h2>123 Hotels</h2>
          </div>
        </div>
        <div className="pListItem">
          <div className="imgContainer">
            <img src={img5} alt="property img" className="pListImg" />
          </div>
          <div className="pListTitle">
            <h1>Villas</h1>
            <h2>21 Hotels</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertyList;
