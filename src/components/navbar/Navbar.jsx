import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../utilities/auth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const auth = useAuth();
  return (
    <div className="navbar">
      <div className="container">
        <span className="logo">
          <span className="logoColor">Mar</span>Booking
        </span>
        <div className="navItem">
          {!auth.user ? (
            <button className="navButton registerButton" onClick={() => navigate("/signup")}>
              Signup
            </button>
          ) : (
            <button className="navButton userInfo" onClick={() => navigate("/profile")}>
              <FontAwesomeIcon className="userInfoIcon" icon={faUser} />
              {auth.user}
            </button>
          )}
          {!auth.user ? (
            <button className="navButton loginButton" onClick={() => navigate("/login")}>
              Login
            </button>
          ) : (
            <button className="navButton loginButton" onClick={() => auth.logout()}>
              Logout
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
