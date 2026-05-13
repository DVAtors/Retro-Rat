import React from "react";

import "./SubmitProduct.css";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import UploadIcon from "../assets/uploadIcon.svg";
import TagIcon from "../assets/tagIcon.svg";
import CalenderIcon from "../assets/calenderIcon.svg";
import LocationIcon from "../assets/locationIcon.svg";
import DescriptionIcon from "../assets/descriptionIcon.svg";

export default function SubmitProduct() {
    return (
        <>
            <div className="submit-product-container">
                <div className="submit-product-header">
                    <h1 style={{ margin: "0" }}>list your vintage tech</h1>
                    <p style={{ margin: "0" }}>
                        Share your retro electronics with collectors
                    </p>
                </div>

                <div className="submit-product-form">
                    <Container fluid className="product-photo-container">
                        <div className="product-photo-form">
                            <label htmlFor="product-photo" className="form-label">Product Photos</label>

                            <div className="photo-instructions">
                                <img src={UploadIcon} alt="Upload Icon" />
                                <p style={{ color: "#000" }}>Drag and drop your images here</p>
                                <p style={{ color: "#5B2C91", marginTop: "0" }}>or</p>

                                <button className="upload-button">
                                    Browse Files
                                    <input
                                        type="file"
                                        id="product-photo"
                                        name="product-photo"
                                        accept="image/*"
                                    />
                                </button>

                                <p style={{ color: " #5B2C91" }}>
                                    Supported JPG, PNG. Max size: 5MB.
                                </p>
                            </div>
                        </div>
                    </Container>

                    <Container fluid className="product-details-container">
                        <div className="product-classification">
                            <label htmlFor="product-details-header" className="form-label">
                                Item Classification
                            </label>

                            <form className="product-details-form">
                                <Col>
                                    <label htmlFor="product-title">
                                        <img src={TagIcon} alt="Tag Icon" />
                                        Item Name
                                    </label>
                                    <input
                                        type="text"
                                        id="product-title"
                                        name="product-title"
                                        placeholder="e.g. Vintage Mechanical Keyboard"
                                        required
                                    />
                                </Col>

                                <Col>
                                    <Row className="product-details-row">
                                        <Col>
                                            <label htmlFor="product-category">Category</label>
                                            <textarea
                                                id="product-category"
                                                name="product-category"
                                                required
                                            ></textarea>
                                        </Col>
                                        <Col>
                                            <label htmlFor="product-price">R Price (ZAR)</label>
                                            <input
                                                type="number"
                                                id="product-price"
                                                name="product-price"
                                                placeholder="e.g. 150.00"
                                                step="0.01"
                                                required
                                            />
                                        </Col>
                                    </Row>
                                </Col>

                                <Col>
                                    <Row className="product-details-row">
                                        <Col>
                                            <label htmlFor="era-decade">
                                                <img src={CalenderIcon} alt="Calendar Icon" />
                                                Era/Decade
                                            </label>

                                            <select id="era-decade" name="era-decade" required>
                                                <option value="">Select era/decade</option>
                                                <option value="1970s">1970s</option>
                                                <option value="1980s">1980s</option>
                                                <option value="1990s">1990s</option>
                                                <option value="2000s">2000s</option>
                                                <option value="2010s">2010s</option>
                                            </select>
                                        </Col>

                                        <Col>
                                            <label htmlFor="product-condition">Condition</label>
                                            <select
                                                id="product-condition"
                                                name="product-condition"
                                                required
                                            >
                                                <option value="">Select condition</option>
                                                <option value="excellent">Excellent</option>
                                                <option value="great">Great</option>
                                                <option value="moderate">Moderate</option>
                                                <option value="low">Low</option>
                                                <option value="poor">Poor</option>
                                            </select>
                                        </Col>
                                    </Row>
                                </Col>
                            </form>
                        </div>
                    </Container>

                    <Container fluid className="product-description-container">
                        <Row className="product-description-form">
                            <label htmlFor="product-description">Item Information</label>

                            <Col className="product-location-col">
                                <label htmlFor="product-location" className="form-label">
                                    <img src={LocationIcon} alt="Location Icon" />
                                    Location
                                </label>
                                <input
                                    type="text"
                                    id="product-location"
                                    name="product-location"
                                    placeholder="eg. Cape Town, South Africa"
                                    required
                                />
                            </Col>

                            <Col className="product-description-col">
                                <label htmlFor="product-description" className="form-label">
                                    <img src={DescriptionIcon} alt="Description Icon" />
                                    Description
                                </label>

                                <input
                                    type="text"
                                    id="product-description"
                                    name="product-description"
                                    placeholder="Describe your item's history, condition, functionality, and any unique features.."
                                    required
                                />

                                <p style={{ color: "#FFE500" }}>
                                    Tip: Include details about functionality, original packaging,
                                    and any included accessories
                                </p>
                            </Col>
                        </Row>
                    </Container>

                    <Container fluid className="product-shipping-container">
                        <Row className="product-shipping-form">
                            <label htmlFor="product-shipping" className="form-label">Shipping Options</label>

                            <Col>
                                <fieldset className="shipping-options">
                                    <li>
                                        <input type="checkbox" id="local-pickup" name="local-pickup" value={"local-pickup"}  />
                                        <label htmlFor="local-pickup">Local Pickup Available</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="domestic-shipping" name="domestic-shipping" value={"domestic-shipping"} />
                                        <label htmlFor="domestic-shipping">Domestic Shipping (SA)</label>
                                    </li>

                                    <li>
                                        <input type="checkbox" id="international-shipping" name="international-shipping" value={"international-shipping"} />
                                        <label htmlFor="internationl-shipping">International Shipping</label>
                                    </li>

                                </fieldset>
                            </Col>
                        </Row>

                        <div className="shipping-conditions">
                            <input type="checkbox" id="authenticity-policy" name="authenticity-policy" value={"authenticity-policy"}/>

                            <p>
                                I certify that this item is authentic vintage/retro tech and
                                accurately described. I agree to RetroTech Market's
                            <span style={{ color: "#FFE500", fontWeight: "800", textTransform: "uppercase" }}> Seller terms</span> and <span style={{ color: "#FFE500", fontWeight: "800", textTransform: "uppercase"}}>authenticity policy</span>.
                            </p>
                        </div>
                    </Container>
                </div>

                <div className="submit-button-container">
                    <div className="button-controls">
                        <button className="cancel-button">Cancel</button>
                        <button className="submit-button">Submit For Review</button>
                    </div>
                </div>
            </div>
        </>
    );
}
