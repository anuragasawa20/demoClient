import React from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import Footer2 from "./Footer2";

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <h3>Institute of Pre Engineering Coaching</h3>
                            <ul>
                                <li>
                                    <Link to="/about" style={{ color: "white" }}>About Us</Link>
                                </li>
                                <li>
                                    <Link to="/legal/privacy" style={{ color: "white" }}>Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/legal/terms" style={{ color: "white" }}>Terms and Conditions</Link>
                                </li>
                                <li>
                                    <Link to="/about" style={{ color: "white" }}>Syllabus</Link>
                                </li>
                                <li>
                                    <Link to="/contact" style={{ color: "white" }}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-6 col-lg-6 col-xl-6">
                            <div className="d-flex justify-content-center justify-content-md-end mb-4">
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://zetapp.in/_next/static/media/linkedin.99e56649.svg"
                                        alt="LinkedIn Icon"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://zetapp.in/_next/static/media/instagram.146ba33a.svg"
                                        alt="Instagram Icon"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://zetapp.in/_next/static/media/facebook.cccadfff.svg"
                                        alt="Facebook Icon"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://zetapp.in/_next/static/media/TelegramImg.2d51b03f.svg"
                                        alt="Telegram Icon"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                                <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer">
                                    <img
                                        src="https://zetapp.in/_next/static/media/WhatsappImg.a5c0a9a6.svg"
                                        alt="WhatsApp Icon"
                                        width={32}
                                        height={32}
                                    />
                                </a>
                            </div>
                            <div className="text-center text-md-end">
                                <p>Contact: +91-9999999999 | Email: example@email.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <Footer2 />
        </>
    );
};

export default Footer;
