import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Homepage.css'
import { apiGet } from "../client";
import bootRatWhite from '../assets/bootRatWhite.svg';
import ProductCard from "../components/ProductCard";


export default function Homepage() {

        const [listings, setListings] = useState([]);

        useEffect(() => {
            apiGet("/listings")
                .then((data) => setListings(data))
        }, []);

    return (
        <>
        
        <div className="home-container">
            <div className="home-content">

                <Container fluid className="hero-section">
                <Row className="hero-container">
                    <Col className="hero-img-container">
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

                <Container fluid className="popular-section">
                    <div className="popular-container">
                        <div className="popular-banner">
                            <div className="popular-text">
                                <h2>popular tech on the marketplace</h2>
                                <p>These are some popular items from  fellow Vendors!!</p>
                            </div>
</div>
                            <Row className="popular-items">

                                <Col md={4}>
                                                    {listings.map((listing) => (
                                                        <ProductCard
                                                            key={listing._id} //react prop, used to know if something is the same or not when reloading the component.
                                                            id={listing._id} //the actual id property of the listing
                                                            title={listing.productName} //rest of this stuff just follows the schema
                                                            year={listing.era}
                                                            username={listing.seller?.name || "unknown"} //if no name then show unknown
                                                            price={`R${listing.price.toFixed(2)}`} //formatting done here*******
                                                            condition={listing.condition}
                                                            imgSrc={listing.mainImage} //we gonna get back to this (listing.mainImage is the actual thing to go here)
                                                        />
                                                    ))}
                                </Col>

                                <Col md={4}>
                                InsertCard
                                </Col>

                                <Col md={4}>
                                Insertcard
                                </Col>
                            </Row>

                            <div className="view-listed-btn">
                                <button>View Listed items!!</button>
                            </div>



                    </div>
                </Container>

                <Container fluid className="join-section">
                    <Row className="join-container">

                        <Col className="join-banner">
                        <div className="join-text">
                            <h2>become a vendor and sell your tech</h2>
                            <p>join our community of vintage tech enthusiasts</p>
                        </div>
                        </Col>

                        <Col className="join-hero">
                        <div className="join-content">

                            <div className="join-text">
                                <h2>Log In or Register to become a fellow vendor or collector!!</h2>
                                <p>Start buying and selling now!!</p>
                            </div>
                        </div>
                        </Col>

                        <Col className="join-btn-container">
                        <button>Sign Up</button>
                        <button>Log In</button>
                        </Col>
                    </Row>

                </Container>

                <Container fluid className="already-a-menber-section">
                    <div className="already-banner">
                        <div className="already-text">
                            <h2>Already A Member??</h2>
                            <p>Add your items to sell and View Your Listings for pending approval!</p>
                        </div>
                    </div>

                    <Row>
                        <Col className="already-col add-yor-listing">
                            <div className="text-container">
                                <div className="title-text">
                                    <h2>Add and Sell your items!!</h2>
                                    <p>Upload your items and get selling!</p>
                                </div>
                            </div>
                        </Col>

                        <Col className="already-col view-product-approval-status">
                        <div className="text-container">
                            <div className="title-text">
                                <h2>Unsure if people are buying your items yet?</h2>
                                <p>View your listings approval status  and check if your items are selling yet!!</p>
                            </div>
                        </div>
                        </Col>
                    </Row>

                    <div className="already-btn-container">
                        <button>Add your listing!!</button>

                        <button>View Your Product approval Status!!</button>
                    </div>

                </Container>
            </div>
        </div>

        </>
    )
}