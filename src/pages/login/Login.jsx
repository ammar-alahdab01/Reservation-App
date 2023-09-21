import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useAuth } from "../../utilities/auth";

function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const redirectPath = (location.state && location.state.path) || "/";
  const handleClick = () => {
    auth.login(user);
    navigate(redirectPath, { replace: true });
  };
  return (
    <>
      <Navbar />
      <Header type={"mini"} />
      <div className="login">
        <div className="container">
          <div className="loginBox">
            {redirectPath === "/hotels" ? (
              <span className="logTitle" style={{ fontSize: "20px" }}>
                You Should Login To Continue!
              </span>
            ) : (
              <span className="logTitle">Welcome Back!</span>
            )}
            <div className="logUserInput">
              <input name="user" id="user" placeholder="Username" type="text" value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div className="logUserInput">
              <input name="pass" id="pass" placeholder="Password" type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
            </div>
            <div className="logUserInputCheck">
              <input type="checkbox" name="remember" id="remember" />
              Remember Passowrd
            </div>
            <div className="loginAndSingUp">
              <button className="logBtn" onClick={handleClick}>
                Login
              </button>
              <p className="signUpText">
                Not Registered?{" "}
                <Link to="/signup" className="singUpLink">
                  Signup
                </Link>
              </p>
            </div>
            <div className="logViaSoical">
              <p className="logViaSoicalText">Login Via:</p>
              <div className="logViaSoicalIconsBox">
                <FontAwesomeIcon className="logViaSoicalIcon" icon={faFacebook} />
                <FontAwesomeIcon className="logViaSoicalIcon" icon={faGoogle} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
