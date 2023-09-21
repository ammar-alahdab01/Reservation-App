import React from "react";
import "./profile.css";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../../utilities/auth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const auth = useAuth();
  const handleClick = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <Navbar />
      <Header type={"mini"} />
      <div className="profile">
        <div className="container">
          <div className="profileBox">
            <span className="proTitle">Welcome {auth.user}</span>
            <div className="person">
              <FontAwesomeIcon className="profileIcon" icon={faUser} />
            </div>
            <button className="logoutBtn" onClick={handleClick}>
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
