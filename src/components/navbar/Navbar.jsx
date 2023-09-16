import React from 'react'
import "./navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
      <div className="container">
        <span className="logo"><span className='logoColor'>Mar</span>Booking</span>
        <div className="navItem">
          <button className="navButton registerButton">Register</button>
          <button className="navButton loginButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar