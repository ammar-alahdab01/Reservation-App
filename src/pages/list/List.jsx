import React from "react";
import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Search from "../../components/search/Search";
import Results from "../../components/results/Results";
import { useLocation } from "react-router-dom";

function List() {
  const location = useLocation();
  return (
    <div className="list">
      <Navbar />
      <Header type="mini" />
      <div className="container list">
        <Search dateSearch={location.state === null? undefined : location.state.date} desSearch={location.state === null? "" : location.state.destination} optSearch={location.state === null? {} : location.state.optionBox} />
        <Results />
      </div>
    </div>
  );
}

export default List;
