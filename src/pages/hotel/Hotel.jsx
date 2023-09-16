import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import HotelDetailes from "../../components/hoteldetailes/HotelDetailes";
import MailList from "../../components/maillist/MailList";
import Footer from "../../components/footer/Footer";

function Hotel() {
  return (
    <div className="hotel">
      <Navbar />
      <Header type="mini" />
      <div className="container">
        <HotelDetailes />
      </div>
      <MailList />
        <Footer />
    </div>
  );
}

export default Hotel;
