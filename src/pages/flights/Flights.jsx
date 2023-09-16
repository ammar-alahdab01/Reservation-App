import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import FlightsOffers from "../../components/flightsoffers/FlightsOffers";

function Flights() {
  return (
    <div className="flights">
      <Navbar />
      <Header type="mini" />
      <FlightsOffers />
      <Footer />
    </div>
  );
}

export default Flights;
