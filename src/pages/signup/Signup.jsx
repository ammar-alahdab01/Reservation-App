import React, { useState } from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { Link } from "react-router-dom";
import "./signup.css";

const userInitVal = {
  fname: "",
  lname: "",
  pass: "",
  email: "",
};

function Signup() {
  const [user, setUser] = useState(userInitVal);
  const handleClick = () => {};
  return (
    <>
      <Navbar />
      <Header type={"mini"} />
      <div className="signup">
        <div className="container">
          <div className="signupBox">
            <span className="sigTitle">Sign Up</span>
            <div className="sigUserInput">
              <input name="fuser" id="fuser" placeholder="First Name" type="text" value={user.fname} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </div>
            <div className="sigUserInput">
              <input name="luser" id="luser" placeholder="Last Name" type="text" value={user.lname} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </div>
            <div className="sigUserInput">
              <input name="email" id="email" placeholder="Email..." type="text" value={user.email} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </div>
            <div className="sigUserInput">
              <input name="pass" id="pass" placeholder="Password" type="password" value={user.pass} onChange={(e) => setUser({ ...user, [e.target.name]: e.target.value })} />
            </div>
            <div className="loginAndSingUP">
              <button className="sinBtn" onClick={handleClick}>
                Signup
              </button>
              <p className="loginText">
                Already a Member?{" "}
                <Link to="/login" className="loginLink">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
