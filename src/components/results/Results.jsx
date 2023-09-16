import React from "react";
import "./results.css";
import img1 from "../../imgs/results/img1.jpg";
import img2 from "../../imgs/results/img2.jpg";
import img3 from "../../imgs/results/img3.jpg";
import img4 from "../../imgs/results/img4.jpg";
import img5 from "../../imgs/results/img5.jpg";

function Results() {
  return (
    <div className="result">
      <div className="resultCard">
        <div className="imgResultCardContainer">
          <img className="imgResultCard" src={img1} alt="Result Card" />
        </div>
        <div className="detailsBox">
          <div className="detailsBoxOne">
            <div className="headerBox">
              <h1 className="placeName">Tower Street Apartments</h1>
              <div className="placeRating">
                <span className="textRating">Excellent</span>
                <span className="numberRating">9.3</span>
              </div>
            </div>
            <p className="farAway">500m from center</p>
            <p className="offer">FREE airport taxi</p>
            <p className="feature">
              <strong>Studio Apartment with Air Conditioning</strong>
            </p>
          </div>
          <div className="detailsBoxTwo">
            <div className="descAndPrice">
              <p className="description">
                Entire Studio • 1 Bathroom • 21m<sup>2</sup> 1 full bed
              </p>
              <span className="price">$125</span>
            </div>
            <div className="cancellation">
              <span className="cancel">FREE Cacellation</span>
              <span className="cancelTax">includes taxes and fees</span>
            </div>
            <div className="availabilityBox">
              <p>You can cancel later, so lock in this great price today!</p>
              <button className="availabilityButton">See Availability</button>
            </div>
          </div>
        </div>
      </div>
      <div className="resultCard">
        <div className="imgResultCardContainer">
          <img className="imgResultCard" src={img2} alt="Result Card" />
        </div>
        <div className="detailsBox">
          <div className="detailsBoxOne">
            <div className="headerBox">
              <h1 className="placeName">Alperto Santiago Hotel</h1>
              <div className="placeRating">
                <span className="textRating">Excellent</span>
                <span className="numberRating">9.9</span>
              </div>
            </div>
            <p className="farAway">50m from center</p>
            <p className="offer">FREE airport taxi</p>
            <p className="feature">
              <strong>Studio Apartment with Air Conditioning</strong>
            </p>
          </div>
          <div className="detailsBoxTwo">
            <div className="descAndPrice">
              <p className="description">
                Entire Studio • 1 Bathroom • 21m<sup>2</sup> 1 full bed
              </p>
              <span className="price">$199</span>
            </div>
            <div className="cancellation">
              <span className="cancel">FREE Cacellation</span>
              <span className="cancelTax">includes taxes and fees</span>
            </div>
            <div className="availabilityBox">
              <p>You can cancel later, so lock in this great price today!</p>
              <button className="availabilityButton">See Availability</button>
            </div>
          </div>
        </div>
      </div>
      <div className="resultCard">
        <div className="imgResultCardContainer">
          <img className="imgResultCard" src={img3} alt="Result Card" />
        </div>
        <div className="detailsBox">
          <div className="detailsBoxOne">
            <div className="headerBox">
              <h1 className="placeName">Joilla Hotel</h1>
              <div className="placeRating">
                <span className="textRating">Excellent</span>
                <span className="numberRating">9.6</span>
              </div>
            </div>
            <p className="farAway">300m from center</p>
            <p className="offer">FREE airport taxi</p>
            <p className="feature">
              <strong>Studio Apartment with Air Conditioning</strong>
            </p>
          </div>
          <div className="detailsBoxTwo">
            <div className="descAndPrice">
              <p className="description">
                Entire Studio • 1 Bathroom • 21m<sup>2</sup> 1 full bed
              </p>
              <span className="price">$109</span>
            </div>
            <div className="cancellation">
              <span className="cancel">FREE Cacellation</span>
              <span className="cancelTax">includes taxes and fees</span>
            </div>
            <div className="availabilityBox">
              <p>You can cancel later, so lock in this great price today!</p>
              <button className="availabilityButton">See Availability</button>
            </div>
          </div>
        </div>
      </div>
      <div className="resultCard">
        <div className="imgResultCardContainer">
          <img className="imgResultCard" src={img4} alt="Result Card" />
        </div>
        <div className="detailsBox">
          <div className="detailsBoxOne">
            <div className="headerBox">
              <h1 className="placeName">Burj Al Arab Hotel</h1>
              <div className="placeRating">
                <span className="textRating">Excellent</span>
                <span className="numberRating">9.1</span>
              </div>
            </div>
            <p className="farAway">100m from center</p>
            <p className="offer">FREE airport taxi</p>
            <p className="feature">
              <strong>Studio Apartment with Air Conditioning</strong>
            </p>
          </div>
          <div className="detailsBoxTwo">
            <div className="descAndPrice">
              <p className="description">
                Entire Studio • 1 Bathroom • 21m<sup>2</sup> 1 full bed
              </p>
              <span className="price">$115</span>
            </div>
            <div className="cancellation">
              <span className="cancel">FREE Cacellation</span>
              <span className="cancelTax">includes taxes and fees</span>
            </div>
            <div className="availabilityBox">
              <p>You can cancel later, so lock in this great price today!</p>
              <button className="availabilityButton">See Availability</button>
            </div>
          </div>
        </div>
      </div>
      <div className="resultCard">
        <div className="imgResultCardContainer">
          <img className="imgResultCard" src={img5} alt="Result Card" />
        </div>
        <div className="detailsBox">
          <div className="detailsBoxOne">
            <div className="headerBox">
              <h1 className="placeName">Brenjham Hotel</h1>
              <div className="placeRating">
                <span className="textRating">Excellent</span>
                <span className="numberRating">9.8</span>
              </div>
            </div>
            <p className="farAway">900m from center</p>
            <p className="offer">FREE airport taxi</p>
            <p className="feature">
              <strong>Studio Apartment with Air Conditioning</strong>
            </p>
          </div>
          <div className="detailsBoxTwo">
            <div className="descAndPrice">
              <p className="description">
                Entire Studio • 1 Bathroom • 21m<sup>2</sup> 1 full bed
              </p>
              <span className="price">$159</span>
            </div>
            <div className="cancellation">
              <span className="cancel">FREE Cacellation</span>
              <span className="cancelTax">includes taxes and fees</span>
            </div>
            <div className="availabilityBox">
              <p>You can cancel later, so lock in this great price today!</p>
              <button className="availabilityButton">See Availability</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Results;
