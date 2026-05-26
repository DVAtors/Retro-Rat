import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'Home.css'

import bootRatWhite from '../assets/bootRatWhite.svg';


export default function Home() {

    return (
        <>
        
        <div className="home-container">
            <div className="home-content">

                <Container fluid className="hero-section">
                <Row className="hero-container">
                    <Col>
                    <img src={bootRatWhite} alt="Boot Rat" className="hero-image" />
                    </Col>

                    <Col className="hero-text-container">
                    <div className="hero-text">
                        <h1>Vintage Market Place</h1>
                        <p>Buy and sell authentic retro electronics from verified collectors</p>
                    </div>

                    <button className="browse-button">
                        Browse Now!
                    </button>
                    
                    </Col>
                </Row>
                </Container>
            </div>
        </div>

        </>
    )
}