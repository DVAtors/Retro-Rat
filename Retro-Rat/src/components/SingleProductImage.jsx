import React, { useState, useEffect } from "react";
import { apiGet } from "../client";
import "./SingleProductImage.css";
import SaveButtonComponent from "./SaveButtonComponent";

function SingleProductImage({ listing }) {
	const [isSaved, setIsSaved] = useState(false);

	useEffect(() => {
		if (!listing?._id) return;
		apiGet("/saved/ids")
			.then((ids) => setIsSaved(ids.includes(listing._id)))
			.catch((err) => console.error("failed to load saved ids:", err));
	}, [listing?._id]);

	if (!listing) return <p>Loading...</p>;

	return (
		<div className="imageBlock">
			<div className="productImage">
				<img src={listing.mainImage} alt="" className="product-image" />
			</div>
			<div className="imageBlockBar">
				<div className="singleProductViewCount">
					<div className="iconClock">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none">
							<path
								d="M9.99935 18.3337C14.6017 18.3337 18.3327 14.6027 18.3327 10.0003C18.3327 5.39795 14.6017 1.66699 9.99935 1.66699C5.39698 1.66699 1.66602 5.39795 1.66602 10.0003C1.66602 14.6027 5.39698 18.3337 9.99935 18.3337Z"
								stroke="#F0F8FF"
								strokeWidth="1.66667"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
							<path
								d="M10 5V10L13.3333 11.6667"
								stroke="#F0F8FF"
								strokeWidth="1.66667"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<span className="item-view-count">
						{listing.views} {listing.views === 1 ? "VIEW" : "VIEWS"}
					</span>
				</div>
				<SaveButtonComponent
					listingId={listing._id}
					initialSaved={isSaved}
				/>
			</div>
		</div>
	);
}

export default SingleProductImage;