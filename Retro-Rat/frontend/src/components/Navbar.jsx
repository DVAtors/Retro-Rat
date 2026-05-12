import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap';

import "./Navbar.css";
import bootRatWhite from "../assets/bootRatWhite.svg"

export default function Navbar() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
}

    return (
        <>
            <BrowserRouter>

            <nav className="custom-navbar">
                <div className="nav-container">
                    
                    {/* HEADER: Always visible, holds Logo + Burger */}
                    <div className="nav-header">
                        <Link className="navbar-brand" to="/">
                            <img src={bootRatWhite} width="40" height="40" alt="Logo" />
                            <span>Retro Rat</span>
                        </Link>

                        <button className="hamburger" onClick={toggleMenu}>
                            {isMenuOpen ? "✖" : "☰"}
                        </button>
                    </div>

                    
                    <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
                        <Form id="search-bar" role="search">
                            <input type="search" placeholder="Search..." aria-label="Search" />
                        </Form>

                        <div className="nav-links">
                            <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
                            <Link to="/browse" onClick={() => setIsMenuOpen(false)}>Browse</Link>
                            <Link to="/sell" onClick={() => setIsMenuOpen(false)}>Sell</Link>
                            <Link to="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link>
                            <Link to="/account" onClick={() => setIsMenuOpen(false)}>Account</Link>
                            <Link to="/logout" className="logout-btn">Logout</Link>
                        </div>
                    </div>

                </div>
            </nav>

                <Routes>
                    {/* <Route path="/" element={<App />} /> */}
                    {/* i'm not doing the whole routing thing cause Robert said he was on that o7 */}
                </Routes>
            </BrowserRouter>

        </>
    )

};