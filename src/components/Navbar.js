import React, { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../Images/logo.jpeg';

const Navbar = () => {
    const [activePage, setActivePage] = useState('/');
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenExams, setIsDropdownOpenExams] = useState(false);


    const handleNavLinkClick = (path) => {
        setActivePage(path);
        setIsNavOpen(false);
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const handleDropdownMouseEnter = () => {
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        setIsDropdownOpen(false);
    };


    const handleDropdownMouseEnterExams = () => {
        setIsDropdownOpenExams(true);
    };

    const handleDropdownMouseLeaveExams = () => {
        setIsDropdownOpenExams(false);
    };


    return (
        <>
            {/* Navbar One */}
            <div id="top-container" className="top-container">
                <div className="auto-div-position-container">
                    <div className="top-link-right mr-20">
                        <div className="contact-container-top">
                            <ul clas="mr:40px">

                                <li className="mobile-style-call  items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-telephone mr:10px" viewBox="0 0 16 16">
                                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <a href="/contacts" id="A1" target="_blank" className="text-bold">
                                        Contact Us
                                    </a>
                                </li>
                                <li className="register-with-us  ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                                    </svg>
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
                            {/* <li className="nav-item dropdown mx-4">
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

                            </li> */}
                            <li
                                className="nav-item dropdown mx-4"
                                onMouseEnter={handleDropdownMouseEnter}
                                onMouseLeave={handleDropdownMouseLeave}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activePage.startsWith('/about') ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    <b>About IPEC</b>
                                </a>
                                <ul className={`dropdown-menu dropdown-content ${isDropdownOpen ? 'show' : ''}`}>
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


                            {/* <li className="nav-item dropdown mx-4">
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
                            </li> */}
                            <li
                                className="nav-item dropdown mx-4"
                                onMouseEnter={handleDropdownMouseEnterExams}
                                onMouseLeave={handleDropdownMouseLeaveExams}
                            >
                                <a
                                    className={`nav-link dropdown-toggle ${activePage.startsWith('/exams') ? 'active' : ''}`}
                                    href="#"
                                    role="button"
                                    aria-expanded={isDropdownOpenExams ? 'true' : 'false'}
                                    style={{ color: "white", textDecoration: "none" }}
                                >
                                    <b>Exams</b>
                                </a>
                                <ul className={`dropdown-menu dropdown-content ${isDropdownOpenExams ? 'show' : ''}`}>
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
