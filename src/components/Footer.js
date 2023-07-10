import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Footer.css';
import Footer2 from "./Footer2";
import '../styles/ContactForm.css';

const Footer = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // TODO: Implement form submission logic here

        // Reset form fields
        setName('');
        setEmail('');
        setMessage('');
    };
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <div className="footer-contactForm">
                        <div>
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
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <label htmlFor="name">Name:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email:</label>
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message:</label>
                                    <textarea
                                        id="message"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                </div>

                                <button type="submit">Submit</button>
                            </form>
                        </div>

                    </div>
                    <div className="footer-socials">
                        <div className="flex space-x-4">
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
                        <div className="footer-contact">
                            <p>Contact: +91-9999999999 | Email: example@email.com</p>
                        </div>
                    </div>

                </div>

            </footer >
            <Footer2 />
        </>
    );
};

export default Footer;
