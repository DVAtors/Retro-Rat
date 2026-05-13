import React from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

import Img1 from "../assets/product-img.png";
import Img2 from "../assets/Image (Classic Game Console Controller).png";
import Img3 from "../assets/Image (Sony Walkman Cassette Player).png";
import { Container, Row } from "react-bootstrap";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
//DEV MODE: HARD CODED ITEM DETAILS
const productList = [
  //array to hold data fetched from dadta base
  {
    id: 1,
    title: "VINTAGE MECHANICAL KEYBOARD",
    year: "1980",
    username: "technocollector",
    price: "R245.00", //a little nit-picky but we should have a built in conversion things for people that wanna see different currencies (i'm sure there's some api for that out there somewhere already)
    condition: "Excellent",
    imgSrc: Img1,
  },
  {
    id: 2,
    title: "Classic Game Console Controller",
    year: "1990",
    username: "retrogamer",
    price: "85.00", //we can add stuff to the math so that it adds the .00 for us yabe? or maybe it's fine
    condition: "Very good",
    imgSrc: Img2,
  },
  {
    id: 3,
    title: "sony walkman cassette player",
    year: "1980",
    username: "audiovintage",
    price: "120.00",
    condition: "good",
    imgSrc: Img3,
  },
];

export default function ProductsPage() {
  return (
    <>
      
      
      <Container fluid className="product-main-content">

<Container fluid className="product-header">
        <div className="header-text">
        <h1>Welcome to Retro Rat</h1>
        <p>Buy and sell authentic retro electronics from verified collectors</p>
        </div>
        </Container>

        <FilterBar/>
        
      {/* .map() function goes through the productList and build the productCard for evry item autonatically >:D */}
      <Row className="product-card-container">
        {productList.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            year={product.year}
            username={product.username}
            price={product.price}
            condition={product.condition}
            imgSrc={product.imgSrc}
          />
        ))}
      </Row>


      
      </Container>
<Footer/>

    </>
  );
}
