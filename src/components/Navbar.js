import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Images/logo.jpeg';

const Navbar = () => {
    const [activePage, setActivePage] = useState('/');
    const [isNavOpen, setIsNavOpen] = useState(false);

    const handleNavLinkClick = (path) => {
        setActivePage(path);
        setIsNavOpen(false);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <>
            {/* Navbar One */}
            <div id="top-container">
                <div className="auto-div-position-container">
                    <div className="top-link-right mr-20">
                        <div className="contact-container-top">
                            <ul className="mr-4">
                                <li className="mobile-style-call">
                                    <a href="/contacts" id="A1" target="_blank" className="text-bold">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="register-with-us">
                                    <a href="/register" id="A2" target="_blank" className="reg-style">
                                        Register With Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="clear"></div>
            </div>

            <div>
                <img src={logo} className="logo-image" alt="logo" style={{ width: "15%" }} />
            </div>

            <nav className="navbar navbar-expand-lg bg-dark justify-content-center">
                <div className="container-fluid" style={{ fontSize: "0.75rem" }}>
                    <button
                        className="navbar-toggler"
                        type="button"
                        onClick={toggleNav}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className={`collapse navbar-collapse justify-content-center${isNavOpen ? ' show' : ''}`}
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item mx-4">
                                <Link
                                    className={`nav-link ${activePage === '/' ? 'active' : ''}`}
                                    to="/"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/')}
                                >
                                    <b>Home</b>
                                </Link>
                            </li>
                            <li className="nav-item dropdown mx-4">
                                <a
                                    className={`nav-link dropdown-toggle ${activePage.startsWith('/about') ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/about')}
                                >
                                    <b>About IPEC</b>
                                </a>
                                <ul className="dropdown-menu dropdown-content">
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/about' ? 'active' : ''}`}
                                            to="/about"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/about')}
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/vision' ? 'active' : ''}`}
                                            to="/vision"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/vision')}
                                        >
                                            Vision & Mission
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/chairman' ? 'active' : ''}`}
                                            to="/chairman"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/chairman')}
                                        >
                                            Chairman's Message
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/policies' ? 'active' : ''}`}
                                            to="/policies"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/policies')}
                                        >
                                            Policies & other Info
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-4">
                                <a
                                    className={`nav-link dropdown-toggle ${activePage.startsWith('/exams') ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/exams')}
                                >
                                    <b>Exams</b>
                                </a>
                                <ul className="dropdown-menu dropdown-content">
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/iit-jee-advance' ? 'active' : ''}`}
                                            to="/iit-jee-advance"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/iit-jee-advance')}
                                        >
                                            IIT-JEE ADVANCE
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className={`dropdown-item ${activePage === '/jee-mains' ? 'active' : ''}`}
                                            to="/jee-mains"
                                            style={{ color: "black", textDecoration: "none" }}
                                            onClick={() => handleNavLinkClick('/jee-mains')}
                                        >
                                            JEE-MAINS
                                        </Link>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item mx-4">
                                <Link
                                    className={`nav-link ${activePage === '/courses' ? 'active' : ''}`}
                                    to="/courses"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/courses')}
                                >
                                    <b>Courses</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link
                                    className={`nav-link ${activePage === '/login' ? 'active' : ''}`}
                                    to="/login"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/login')}
                                >
                                    <b>Login</b>
                                </Link>
                            </li>
                            <li className="nav-item mx-4">
                                <Link
                                    className={`nav-link ${activePage === '/download' ? 'active' : ''}`}
                                    to="/download"
                                    style={{ color: "white", textDecoration: "none" }}
                                    onClick={() => handleNavLinkClick('/download')}
                                >
                                    <b>Downloads</b>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
