import React from "react";
import "./lovedProperty.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import hotels from "../../api/fakeApiLovedProperty";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "var(--main-color)", borderRadius: "50%" }} onClick={onClick} />;
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return <div className={className} style={{ ...style, display: "block", background: "var(--main-color)", borderRadius: "50%" }} onClick={onClick} />;
}

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

function LovedProperty() {
  return (
    <div className="lovedProperty">
      <Slider {...settings} className="lovedPropertyContainer">
        {hotels.map((hotel) => {
          let textRate = hotel.numRate >= 9 ? "Excellent" : hotel.numRate >= 8 ? "Very Good" : "Good";
          return (
            <div className="lovedPropertyBox">
              <div className="lovedPropertyImgContainer">
                <img src={`${hotel.img}`} alt="loved property" className="lovedPropertyImg" />
              </div>
              <div className="lovedPropertyText">
                <span className="lovedPropertyName">{`${hotel.name}`}</span>
                <span className="lovedPropertyCity">{`${hotel.city}`}</span>
                <span className="lovedPropertyPrice">Starting From {`${hotel.price}`}$</span>
                <div className="starRating">
                  <FontAwesomeIcon icon={faStar} className={hotel.starRate >= 1 ? "filled" : ""} />
                  <FontAwesomeIcon icon={faStar} className={hotel.starRate >= 2 ? "filled" : ""} />
                  <FontAwesomeIcon icon={faStar} className={hotel.starRate >= 3 ? "filled" : ""} />
                  <FontAwesomeIcon icon={faStar} className={hotel.starRate >= 4 ? "filled" : ""} />
                  <FontAwesomeIcon icon={faStar} className={hotel.starRate >= 5 ? "filled" : ""} />
                </div>
                <div className="lovedPropertyRating">
                  <button>{`${hotel.numRate}`}</button>
                  <span>{textRate}</span>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default LovedProperty;
