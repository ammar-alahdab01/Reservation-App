import { faBoltLightning, faCheck, faGem, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./ourfeaturesboxes.css";

function OurFeaturesBoxes() {
  return (
    <div>
      <div className="ourFeaturesBoxes">
        <div className="ourFeaturesBox">
          <FontAwesomeIcon className="ourFeaturesIcon" icon={faShieldAlt} />
          <h2 className="ourFeaturesBoxTitle">Safety</h2>
          <p className="ourFeaturesBoxText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae non, culpa laudantium magni minima dolorem necessitatibus.</p>
        </div>
        <div className="ourFeaturesBox">
          <FontAwesomeIcon className="ourFeaturesIcon" icon={faCheck} />
          <h2 className="ourFeaturesBoxTitle">Reliability</h2>
          <p className="ourFeaturesBoxText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae non, culpa laudantium magni minima dolorem necessitatibus.</p>
        </div>
        <div className="ourFeaturesBox">
          <FontAwesomeIcon className="ourFeaturesIcon" icon={faGem} />
          <h2 className="ourFeaturesBoxTitle">Quality</h2>
          <p className="ourFeaturesBoxText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae non, culpa laudantium magni minima dolorem necessitatibus.</p>
        </div>
        <div className="ourFeaturesBox">
          <FontAwesomeIcon className="ourFeaturesIcon" icon={faBoltLightning} />
          <h2 className="ourFeaturesBoxTitle">Speed</h2>
          <p className="ourFeaturesBoxText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus molestiae non, culpa laudantium magni minima dolorem necessitatibus.</p>
        </div>
      </div>
    </div>
  );
}

export default OurFeaturesBoxes;
