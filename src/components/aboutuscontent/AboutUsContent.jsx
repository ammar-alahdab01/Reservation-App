import React from "react";
import "./aboutuscontent.css";
import img from "../../imgs/about/Untitled-1.png";
import SocialIcons from "../socialicons/SocialIcons";

function AboutUsContent() {
  return (
    <div className="AboutUsContent">
      <div className="AboutUsContentImg">
        <img src={img} alt="about" />
      </div>
      <div className="AboutUsContentText">
        <h1 className="AboutUsContentTitle">We are the best in the world in reservation, travel, and tourism services.</h1>
        <p className="AboutUsContentPara">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto iste sint consectetur soluta doloremque ducimus officiis error beatae, fugiat veritatis voluptates
          dolorem laboriosam nesciunt nemo doloribus. Fugiat nobis sapiente temporibu ipsum dolor sit amet consectetur, adipisicing elit. Placeat accusantium natus quia voluptatum
          excepturi nobis reprehenderit, pariatur similique dicta suscipit expedita facilis accusamus doloremque est molestiae obcaecati consequuntur veniam sit Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Nobis, autem. Cupiditate non laboriosam facere aliquid dolor molestiae et commodi possimus quam, quae voluptates. Labore eveniet
          assumenda fuga autem cum mollitia.
        </p>
      <div className="AboutUsContentSoical">
        <SocialIcons className={"aboutSoicalIcon"}/>
      </div>
      </div>
    </div>
  );
}

export default AboutUsContent;
