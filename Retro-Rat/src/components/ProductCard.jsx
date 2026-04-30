import React from "react";
import "./ProductCard.css";

//used custom props instead of children so each thing can be generated dynamically and the text knows where it needs to go 
export default function ProductCard({ //props are all the info stuff needed
    title,
    year,
    username,
    price,
    condition,
    imgSrc,
    className 
}) {

    return (
        <>
            <div className={`product-container ${className || ""}`}>

                <div className="product-img">
                    <img src={imgSrc} alt={title} />
                </div>
                <div className="product-text">
                    <div className="product-row-top">

                        <div className="product-col">
                            <p className="product-title">{title}</p>
                        </div>
                            <div className="product-col">
                            <div className="product-year">
                                {year}
                            </div>
                        </div>
</div>
                        <div className="product-row">
                            <p className="seller-username">{username}</p>
                        </div>
                        


                    <div className="product-row">
                        <div className="price-container">
                        <div className="price-text">{price}</div>
                        <div className="condition-status">
                            {condition}
                        </div>
                    </div>
                    </div>
                    


                </div>

            </div>
        </>
    )

};