import React from "react";
import "./about.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AboutUsContent from "../../components/aboutuscontent/AboutUsContent";

function About() {
  return (
    <div className="about">
      <Navbar />
      <Header type="mini" />
        <AboutUsContent/>
      <Footer/>
    </div>
  );
}

export default About;
