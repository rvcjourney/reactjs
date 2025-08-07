import MainiLogo from '../assets/Maini_Logo.png';
import MainLogoBlack from '../assets/Maini_Logo_Black.png';
import './Navbar.css';
import { useState, useEffect, useRef } from 'react';
import { RxCross1 } from "react-icons/rx";
// import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(prev => !prev);
    };

    // Auto-close mobile menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 992) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize); // cleanup
        };
    }, []); // run once on mount

    const location = useLocation();          // Get current URL path
    const isHome = location.pathname === '/';

    //For Mobile Auto close if click other than nav
    const menuRef = useRef();
    useEffect(() => {
        const handleClickOutside = (event) => {
            // Close if clicked outside of menu
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

    return (
        <>
            <nav
                className="navbar navbar-expand-lg px-4 py-4 position-absolute top-0 start-0 w-100 z-3"
            // style={{
            //     background: isHome ? "" : 'linear-gradient(to right,rgba(0,0,0,0.3), transparent),linear-gradient(to bottom,transparent,rgba(255, 255, 255))'
            // }}
            >

                <div className="container-fluid ">
                    <a className="navbar-brand logosize" href="/">
                        {
                            isHome ? (<img src={MainiLogo} alt="Maini Logo" height="60" />) : (<img src={MainLogoBlack} alt="Maini Logo" height="60" />)
                        }
                        {/* background : isHome ? <img src={MainiLogo} alt="Maini Logo" height="60" /> :<img src={MainLogoBlack} alt="Maini Logo" height="60" />  */}

                    </a>

                    <button
                        className="navbar-toggler border-1 p-1 m-1"
                        type="button"
                        onClick={toggleMenu}
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" ></span>
                    </button>

                    <div className="collapse navbar-collapse d-none d-lg-block" id="mainiNavbar">
                        <ul className="navbar-nav ms-auto mb-lg-0 gap-4 fw-bold">
            
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/brands">Brands</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/company">Group of Companies</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/newsgallery">News & Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className={({ isActive }) => "nav-link " + (isActive ? "text-danger fw-bold border-bottom border-danger" : "text-dark")} to="/contact">Contact Us</NavLink>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className={`mobile-menu-overlay ${menuOpen ? "open" : "closed"}`}>
                    {/* <div ref={menuRef} className="mobile-menu-content"> */}
                        {/* <button className="close-btn" onClick={() => setMenuOpen(false)}> */}
                        <button className='close-btn' onClick={toggleMenu}>
                            <RxCross1 size={32} color="white" />
                        </button>
                        <ul className="mobile-nav fw-bold">
                            <li>
                                <NavLink className={({ isActive }) =>
                                    "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                }
                                    to="/"
                                    // onClick={() => setMenuOpen(false)}>
                                    onClick={toggleMenu}
                                >
                                    Home</NavLink></li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                    }
                                    to="/about"
                                    // onClick={() => setMenuOpen(false)}
                                    onClick={toggleMenu}
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                    }
                                    to="/brands"
                                    // onClick={() => setMenuOpen(false)}
                                    onClick={toggleMenu}
                                >
                                    Brands
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                    }
                                    to="/company"
                                    // onClick={() => setMenuOpen(false)}
                                    onClick={toggleMenu}
                                >
                                    Group of Companies
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                    }
                                    to="/newsgallery"
                                    // onClick={() => setMenuOpen(false)}
                                    onClick={toggleMenu}
                                >
                                    News & Gallery
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        "nav-link " + (isActive ? "text-danger fw-bold" : "text-white")
                                    }
                                    to="/contact"
                                    // onClick={() => setMenuOpen(false)}
                                    onClick={toggleMenu}
                                >
                                    Contact Us
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                // </div>
            )}
        </>
    );
};

export default Navbar;
