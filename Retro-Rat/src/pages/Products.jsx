import React from "react";
import ProductCard from "../components/ProductCard";

//DEV MODE: HARD CODED ITEM DETAILS
const productList = [ //array to hold data fetched from dadta base
    {
        id: 1,
        title: "VINTAGE MECHANICAL KEYBOARD",
        year: "1980",
        username: "technocollector",
        price: "R245.00", //a little nit-picky but we should have a built in conversion things for people that wanna see different currencies (i'm sure there's some api for that out there somewhere already)
        condition: "Excellent",
        imgSrc: "../assets/product-img.png"
    },
    {
        id: 2,
        title: "Classic Game Console Controller",
        year: "1990",
        username: "retrogamer",
        price: "85.00", //we can add stuff to the math so that it adds the .00 for us yabe? or maybe it's fine
        condition: "Very good",
        imgSrc: "../assets/Image (Classic Game Console Controller).png"
    },
    {
        id: 3,
        title: "sony walkman cassette player",
        year: "1980",
        username: "audiovintage",
        price: "120.00",
        condition: "good",
        imgSrc: "../assets/Image (Sony Walkman Cassette Player).png"
    }
];

export default function ProductsPage(){
    return(
        <>
        {/* .map() function goes through the productList and build the productCard for evry item autonatically >:D */}
        <div className="products-container">
        {productList.map((product) => (
            <ProductCard key={product.id}
            title={product.title}
            year={product.year}
            username={product.username}
            price={product.price}
            condition={product.condition}
            imgSrc={product.imgSrc}
            />
        ))}
        </div>
        </>
    );
}