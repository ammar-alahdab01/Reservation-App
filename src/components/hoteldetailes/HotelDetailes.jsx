import React from "react";
import "./hoteldetailes.css";
import img1 from "../../imgs/hoteldetailes/img1.jpg";
import img2 from "../../imgs/hoteldetailes/img2.jpg";
import img3 from "../../imgs/hoteldetailes/img3.jpg";
import img4 from "../../imgs/hoteldetailes/img4.jpg";
import img5 from "../../imgs/hoteldetailes/img5.jpg";
import img6 from "../../imgs/hoteldetailes/img6.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate  , useParams} from "react-router-dom";

const photos = [img1, img2, img3, img4, img5, img6];

function HotelDetailes() {
  const [opneSilder, setOpenSlider] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const navigate = useNavigate()
  const {destination} = useParams();
  const handleOpenSlider = (i) => {
    setOpenSlider(true);
    setSliderIndex(i);
  };
  const handleSliding = (type) => {
    let newSlideIndex;
    if (type === "dec") {
      newSlideIndex = sliderIndex === 0 ? photos.length - 1 : sliderIndex - 1;
    } else {
      newSlideIndex = sliderIndex === photos.length - 1 ? 0 : sliderIndex + 1;
    }
    setSliderIndex(newSlideIndex);
  };
  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div className="hotelDetailes">
      {opneSilder && (
        <div className="hotelDetailesSlider">
          <div className="sliderBox">
            <FontAwesomeIcon icon={faCircleArrowLeft} className="faSlideIcon left" onClick={() => handleSliding("dec")} />
            <img src={photos[sliderIndex]} alt="hotel" />
            <FontAwesomeIcon icon={faCircleArrowRight} className="faSlideIcon right" onClick={() => handleSliding("inc")} />
            <FontAwesomeIcon icon={faCircleXmark} className="faSlideIcon exitSlider" onClick={() => setOpenSlider(false)} />
          </div>
        </div>
      )}
      <div className="hotelDetaDescription">
        <div className="hotelDetaBox">
          <h1 className="hotelDetaName">{destination}</h1>
          <div className="btnBox">
            <button className="hotelDetaBookBtn" onClick={handleClick}>Go Back</button>
            <button className="hotelDetaBookBtn">Reserve or Book Now!</button>
          </div>
        </div>
        <p className="hotelDetaDescLocation">
          <FontAwesomeIcon icon={faLocationPin} className="hotelDetaDescLocationIcon" />
          Kings Street, King 4444-Ammar St, London UK
        </p>
        <p className="hotelDetaDescText">Excellent location - 500m from center</p>
        <p className="hotelDetaDescOffer">Book a stay over $114 at this property and get a FREE airpot taxi!</p>
      </div>
      <div className="hotelDetaImgsContainer">
        {photos.map((photo, i) => (
          <div className="hotelDetaImgBox" key={i}>
            <img src={photo} alt="hotel" onClick={() => handleOpenSlider(i)} />
          </div>
        ))}
      </div>
      <div className="hotelDetaTextBoxes">
        <div className="hotelDetaTextBoxOne">
          <h2 className="hotelDetaTitle">Stay in the heart of London</h2>
          <p className="hotelDetaFullText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nihil ut vel? Error recusandae consequuntur debitis sequi illum eius accusantium numquam provident?
            Libero officia voluptatum eaque, maxime porro ducimus sapiente? Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, corrupti vel perferendis maiores eos
            veritatis earum. Corporis eos suscipit ipsa dolor? Perferendis quis impedit, voluptates corrupti voluptatibus earum a laborum. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Animi dignissimos eligendi obcaecati aliquam, molestiae saepe? Quasi vero deleniti consequatur nesciunt laboriosam velit blanditiis tempora ab odio
            repudiandae. Quam, porro iure.
          </p>
        </div>
        <div className="hotelDetaTextBoxTwo">
          <h2>Perfect for a 9-night stay!</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores unde facere aliquam reiciendis cumque!</p>
          <p className="hotelDetaPrice">
            <span>$999</span>
            {" (9 nights)"}
          </p>
          <button className="hotelDetaBookBtn">Reserve or Book Now!</button>
        </div>
      </div>
    </div>
  );
}

export default HotelDetailes;
