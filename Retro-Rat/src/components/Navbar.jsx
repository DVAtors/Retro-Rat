import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col, Form } from 'react-bootstrap';

import "./Navbar.css";
import bootRatWhite from "../assets/bootRatWhite.svg"

export default function Navbar() {

    return (
        <>
            <BrowserRouter>
                <Container fluid>
                    <Row className="navbar">
                        <Col md={3}>
                            <Link className="navbar-brand" to="/">
                                <img src={bootRatWhite} width="52" height="52" alt="Retro Rat Logo" />
                                Retro Rat
                            </Link>
                        </Col>

                        <Col md={6}>
                            <Form id="search-bar" role="search">
                                <input type="search" placeholder="Search" aria-label="Search" />
                            </Form>
                        </Col>

                        <Col md={3} className="nav-links">

                            <div className="p-2">
                                <Link to="/">Home</Link>
                            </div>

                            <div className="p-2">
                                <Link to="/browse">Browse</Link>
                            </div>

                            <div className="p-2">
                                <Link to="/sell">Sell</Link>
                            </div>

                            <div className="p-2">
                                <Link to="/cart">Cart</Link>
                            </div>

                            <div className="p-2">
                                <Link to="/account">Account</Link>
                            </div>

                            <div className="p-2">
                                <Link to="/logout">Logout</Link>
                            </div>

                        </Col>
                    </Row>
                </Container>

                <Routes>
                    {/* <Route path="/" element={<App />} /> */}
                    {/* i'm not doing the whole routing thing cause Robert said he was on that o7 */}
                </Routes>
            </BrowserRouter>

        </>
    )

};