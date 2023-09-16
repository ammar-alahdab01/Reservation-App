import React from "react";
import "./lovedProperty.css";
import img1 from "../../imgs/lovedproperty/img1.jpg";
import img2 from "../../imgs/lovedproperty/img2.jpg";
import img3 from "../../imgs/lovedproperty/img3.jpg";
import img4 from "../../imgs/lovedproperty/img4.jpg";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LovedProperty() {
  return (
    <div className="lovedProperty">
      <div className="lovedPropertyContainer">
        <div className="lovedPropertyBox">
          <div className="lovedPropertyImgContainer">
            <img src={img1} alt="loved property" className="lovedPropertyImg" />
          </div>
          <div className="lovedPropertyText">
            <span className="lovedPropertyName">Alperto Santiago Hotel</span>
            <span className="lovedPropertyCity">Madrid</span>
            <span className="lovedPropertyPrice">Starting From 120$</span>
            <div className="starRating">
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
            </div>
            <div className="lovedPropertyRating">
              <button>9.7</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="lovedPropertyBox">
          <div className="lovedPropertyImgContainer">
            <img src={img2} alt="loved property" className="lovedPropertyImg" />
          </div>
          <div className="lovedPropertyText">
            <span className="lovedPropertyName">Joilla Hotel</span>
            <span className="lovedPropertyCity">Paris</span>
            <span className="lovedPropertyPrice">Starting From 310$</span>
            <div className="starRating">
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className=""/>
            </div>
            <div className="lovedPropertyRating">
              <button>8.9</button>
              <span>Very Good</span>
            </div>
          </div>
        </div>
        <div className="lovedPropertyBox">
          <div className="lovedPropertyImgContainer">
            <img src={img3} alt="loved property" className="lovedPropertyImg" />
          </div>
          <div className="lovedPropertyText">
            <span className="lovedPropertyName">Brenjham Hotel</span>
            <span className="lovedPropertyCity">London</span>
            <span className="lovedPropertyPrice">Starting From 299$</span>
            <div className="starRating">
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
            </div>
            <div className="lovedPropertyRating">
              <button>9.3</button>
              <span>Excellent</span>
            </div>
          </div>
        </div>
        <div className="lovedPropertyBox">
          <div className="lovedPropertyImgContainer">
            <img src={img4} alt="loved property" className="lovedPropertyImg" />
          </div>
          <div className="lovedPropertyText">
            <span className="lovedPropertyName">Burj Al Arab Hotel</span>
            <span className="lovedPropertyCity">Dubai</span>
            <span className="lovedPropertyPrice">Starting From 199$</span>
            <div className="starRating">
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className="filled"/>
              <FontAwesomeIcon icon={faStar} className=""/>
            </div>
            <div className="lovedPropertyRating">
              <button>8.5</button>
              <span>Very Good</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LovedProperty;
