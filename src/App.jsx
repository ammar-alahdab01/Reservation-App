import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Flights from "./pages/flights/Flights";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import List from "./pages/list/List";
import OurFeatures from "./pages/our-features/OurFeatures";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Profile from "./pages/profile/Profile";
import { AuthProvider } from "./utilities/auth";
import RequireAuth from "./utilities/RequireAuth";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="hotels"
          element={
            <RequireAuth>
              <List />
            </RequireAuth>
          }
        />
        <Route path="hotels/:destination" element={<Hotel />} />
        <Route path="flights" element={<Flights />} />
        <Route path="our-features" element={<OurFeatures />} />
        <Route path="about" element={<About />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
      </Routes>
    </AuthProvider>
  );
}

export default App;
