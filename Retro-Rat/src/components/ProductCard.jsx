import React from "react";
import Product from "../assets/product-img.png"
import "./ProductCard.css";

export default function ProductCard(){

    return(
        <>
        <div className="product-container">

        <div className="product-img">
            <img src={Product} alt="Image of Product" />
        </div>
        <div className="product-text">
            <h3>Lorem ipsum dolor.</h3>

            <p className="product-paragraph">Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.</p>

            <div className="price-container">
                <h3 className="price-text">R$$$</h3>
                <div className="condition-status">
                    Great
                </div>
            </div>


        </div>
        
        </div>
        </>
    )

};