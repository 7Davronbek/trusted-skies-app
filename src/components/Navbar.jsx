import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-2">
              <div className="logo">Logo</div>
            </div>
            <div className="col-8 d-flex justify-content-evenly">
              <Link to="/" className="nav_a">Home</Link>
              <Link to="/register" className="nav_a">Register</Link>
              <Link to="/login" className="nav_a">Login</Link>
              {/* <Link to="/Business" className="nav_a">Business class flights</Link>
              <Link to="/Offers" className="nav_a">Offers</Link>
              <Link to="/About" className="nav_a">About us</Link>
              <Link to="/Contacts" className="nav_a">Contacts</Link> */}
            </div>
            {/* <div className="col-1">
              <a href="" className="nav_lang">Eng</a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar