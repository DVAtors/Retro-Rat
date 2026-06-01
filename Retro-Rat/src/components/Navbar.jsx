import React, { useState } from "react";
import {
	BrowserRouter,
	Routes,
	Route,
	Link,
	useLocation,
} from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";

import "./Navbar.css";
import bootRatWhite from "../assets/bootRatWhite.svg";

export default function Navbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const location = useLocation();

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};
	const isLoggedIn = !!localStorage.getItem("token");
	const isAdmin = localStorage.getItem("isAdmin") === "true";

	return (
		<>
			{/* <BrowserRouter> */}

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
							<input
								type="search"
								placeholder="Search..."
								aria-label="Search"
							/>
						</Form>

						<div className="nav-links">
							<Link
								to="/"
								className={location.pathname === "/" ? "active" : ""}
								onClick={() => setIsMenuOpen(false)}>
								Home
							</Link>
							<Link
								to="/browse"
								className={location.pathname === "/browse" ? "active" : ""}
								onClick={() => setIsMenuOpen(false)}>
								Browse
							</Link>
							<Link
								to="/sell"
								className={location.pathname === "/sell" ? "active" : ""}
								onClick={() => setIsMenuOpen(false)}>
								Sell
							</Link>
							<Link
								to="/cart"
								className={location.pathname === "/cart" ? "active" : ""}
								onClick={() => setIsMenuOpen(false)}>
								Cart
							</Link>
							{isLoggedIn ? (
    							<>
							        {/* If bro are logged in, bro gets an Account button */}
							        <Link
							            to="/account"
							            className={location.pathname === "/account" ? "active" : ""}
							            onClick={() => setIsMenuOpen(false)}>
							            Account
							        </Link>

							        {/* ONLY show this link if the bro is an admin */}
							        {isAdmin && (
							            <Link
							                to="/admin"
							                className={location.pathname.startsWith("/admin") ? "active" : ""}
							                onClick={() => setIsMenuOpen(false)}>
							                Admin
							            </Link>
							        )}
							    </>
							) : (
							    <Link
							        to="/login"
							        className={location.pathname.startsWith("/login") ? "active" : ""}
							        onClick={() => setIsMenuOpen(false)}>
							        Login
							    </Link>
							)}
						</div>
					</div>
				</div>
			</nav>

			{/* <Routes> */}
			{/* <Route path="/" element={<App />} /> */}
			{/* i'm not doing the whole routing thing cause Robert said he was on that o7 */}
			{/* </Routes> */}
			{/* </BrowserRouter> */}
		</>
	);
}
