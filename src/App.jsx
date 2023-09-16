import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Flights from "./pages/flights/Flights";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import OurFeatures from "./pages/our-features/OurFeatures";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="hotels" element={<List />} />
      <Route path="hotels/:destination" element={<Hotel />} />
      <Route path="flights" element={<Flights/>} />
      <Route path="our-features" element={<OurFeatures/>} />
      <Route path="about" element={<About/>} />
    </Routes>
  );
}

export default App;
