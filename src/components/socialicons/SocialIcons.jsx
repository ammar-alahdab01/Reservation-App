import React from "react";
import "./socialicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

function SocialIcons({className}) {
  return (
    <div className={`${className} SocialIcons`}>
      <span>Follow us: </span>
      <div>
      <FontAwesomeIcon className="soicalIcon" icon={faFacebookSquare} />
      <FontAwesomeIcon className="soicalIcon" icon={faInstagramSquare} />
      <FontAwesomeIcon className="soicalIcon" icon={faTwitterSquare} />
      </div>
    </div>
  );
}

export default SocialIcons;
