import "./CartPage.css";

import React, { useEffect, useState } from "react";
import { apiGet } from "../client";

// Importing components:
import CartProductComponent from "../components/CartProductComponent";

function CartPage() {
	const [listings, setListings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		apiGet("/listings")
			.then((data) => setListings(data))

			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	// useEffect(() => {
	// 	apiGet("/cart")
	// 		.then((data) => setListings(data))

	// 		.catch((err) => setError(err.message))
	// 		.finally(() => setLoading(false));
	// }, []);

	return (
		<div className="cart-main-content">
			<div className="cart-banner">
				<span className="cart-banner-title">Your shopping cart</span>
				<span className="cart-banner-sub-title">
					Share your retro electronics with collectors
				</span>
			</div>
			<div className="content-container">
				<div className="cart-products-container">
					{/* <CartProductComponent />
					<CartProductComponent />
					<CartProductComponent /> */}
					{listings.map((listings) => (
						<CartProductComponent
							key={listings._id} //react prop, used to know if something is the same or not when reloading the component.
							id={listings._id} //the actual id property of the listing
							title={listings.productName} //rest of this stuff just follows the schema
							username={listings.seller?.name || "unknown"} //if no name then show unknown
							price={`R${listings.price.toFixed(2)}`} //formatting done here*******
							//imgSrc={listings.mainImage} //we gonna get back to this (listing.mainImage is the actual thing to go here)
						/>
					))}
				</div>
				<div className="cart-order-summary-container"></div>
			</div>
		</div>
	);
}

export default CartPage;
