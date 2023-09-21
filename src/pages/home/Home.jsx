import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import PropertyList from "../../components/propertylist/PropertyList";
import LovedProperty from "../../components/lovedproperty/LovedProperty";
import "./home.css";
import MailList from "../../components/maillist/MailList";
import Footer from "../../components/footer/Footer";
import SocialIcons from "../../components/socialicons/SocialIcons";

function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Featured />
      <div className="container">
        <h1 className="mainTitle">Browse By Property Type:</h1>
        <PropertyList />
        <h1 className="mainTitle">Home Guests Love:</h1>
      <LovedProperty />
      </div>
      <MailList />
      <SocialIcons className={"HomeSoicalIcons"} />
      <Footer />
    </div>
  );
}

export default Home;
