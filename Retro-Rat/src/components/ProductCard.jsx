import React from "react";
import Product from "../assets/product-img.png"
import "./ProductCard.css";

export default function ProductCard() {

    return (
        <>
            <div className="product-container">

                <div className="product-img">
                    <img src={Product} alt="Image of Product" />
                </div>
                <div className="product-text">
                    <div className="product-row-top">

                        <div className="product-col">
                            <p className="product-title">Lorem ipsum dolor sit amet. </p>
                        </div>
                            <div className="product-col">
                            <div className="product-year">
                                1980's
                            </div>
                        </div>
</div>
                        <div className="product-row">
                            <p className="seller-username"> by consectetur adipiscing.</p>
                        </div>
                        


                    <div className="product-row">
                        <div className="price-container">
                        <div className="price-text">R$$$</div>
                        <div className="condition-status">
                            Great
                        </div>
                    </div>
                    </div>
                    


                </div>

            </div>
        </>
    )

};