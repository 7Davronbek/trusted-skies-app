// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    const [burger, setBurger] = useState(false);

    const [navbar, setNavbar] = useState(false);


    const changeNavbar = () => {
        if (window.scrollY >= 50) {
            setNavbar(true);
        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeNavbar);
    return (
        <>
            <div className={`Navbar ${navbar ? 'active' : ''}`}>
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-3">
                            <Link to="/" className="logo"><img className='w-100' src="img/logo.svg" alt="" /></Link>
                        </div>
                        <div className={`col-6 d-flex justify-content-evenly nav_box ${burger ? 'active' : ''}`}>
                            <Link to="/" className={`nav_a ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                            <Link to="/Business" className={`nav_a ${location.pathname === '/Business' ? 'active' : ''}`}>Best deals</Link>
                            <Link to="/Offers" className={`nav_a ${location.pathname === '/Offers' ? 'active' : ''}`}>Offers</Link>
                            {/* <Link to="/About" className={`nav_a ${location.pathname === '/About' ? 'active' : ''}`}>About us</Link> */}
                            <Link to="/Contacts" className={`nav_a ${location.pathname === '/Contacts' ? 'active' : ''}`}>Contacts</Link>
                            {/* <Link to="/" className="nav_lang">Eng</Link> */}
                        </div>
                        <div onClick={() => setBurger(!burger)} className={`burger pr-4 ml-auto d-flex d-lg-none ${burger ? 'burgered' : ''}`}>
                            <div className="burger_up "></div>
                            <div className="burger_down"></div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="navbarline">

            </div>
            <div className="phone">
                {/* <a href=""><img src="/img/Phone.svg" alt="" className="phone_img" /></a> */}
            </div>
        </>
    )
}

export default Navbar