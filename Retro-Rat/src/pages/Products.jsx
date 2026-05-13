import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

import { Container, Row } from "react-bootstrap";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import { apiGet } from "../client";

//import Img1 from "../assets/product-img.png"; //NOTE: TEMP, until we get something decided on for images.

export default function ProductsPage() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiGet("/listings")
      .then((data) => setListings(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <Container fluid className="product-main-content">
        <Container fluid className="product-header">
          <div className="header-text">
            <h1>Welcome to Retro Rat</h1>
            <p>Buy and sell authentic retro electronics from verified collectors</p>
          </div>
        </Container>

        <FilterBar />

        <Row className="product-card-container">
          {loading && <p className="error-text">Loading listings...</p> /*{} makes it a js expression in the html, this is just a one line if statement basically */}
          {error && <p className="error-text">Couldn't load listings: {error}</p> /*again another one wow*/}
          {!loading && !error && listings.length === 0 && (<p className="error-text">No listings yet. Check back soon.</p>)}
          
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
        </Row>
      </Container>
      <Footer />
    </>
  );
}