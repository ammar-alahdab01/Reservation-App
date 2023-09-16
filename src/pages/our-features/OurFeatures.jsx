import React from "react";
import "./ourfeatures.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import OurFeaturesBoxes from "../../components/ourfeaturesboxes/OurFeaturesBoxes";
import FullScreenVideo from "../../components/fullscreenvideo/FullScreenVideo";

function OurFeatures() {
  return (
    <div className="ourFeatures">
      <Navbar />
      <Header type="mini" />
      <div className="container">
        <h1 className="ourFeaturesTitle">Our Features</h1>
        <OurFeaturesBoxes/>
      </div>
      <FullScreenVideo/>
      <Footer />
    </div>
  );
}

export default OurFeatures;
