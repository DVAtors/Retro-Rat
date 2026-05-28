import "../pages/AdminConsolePage.css";
// import ACBlockListItem from "./ACBlockListItem";
import ACBlockPastRevItem from "./ACBlockPastRevItem";

import { useEffect, useState } from "react";

function ACReviewBlockPast() {
	// 1... Fetch the Listings
	// This should fetch past listings (new route in listingRoutes maybe...)
	const [pastListings, setPastListings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchPending = async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await fetch("http://localhost:5001/api/listings", {
					// this is for getting the past reviewed listings... we don't have a route for that yet ~Robert
					// const res = await fetch("http://localhost:5001/api/listings/past", {
					headers: { Authorization: `Bearer ${token}` },
				});
				if (!res.ok) throw new Error("Failed to fetch pending listings");
				const data = await res.json();
				setPastListings(data);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};
		fetchPending();
	}, []);

	return (
		<div className="ac-main-block">
			<div className="ac-tab-title">
				<span className="tab-title">Past Reviewed Products</span>
			</div>
			{/* <div className="ac-block-items-list"> */}
			{/* Item list goes here */}
			{/* <ACBlockPastRevItem /> */}
			{/* Item list goes here */}
			{/* </div> */}
			<div className="ac-block-items-list">
				{loading && <p>Loading...</p>}
				{error && <p style={{ color: "red" }}>{error}</p>}
				{!loading && pastListings.length === 0 && (
					<p>No pending past listings.</p>
				)}
				{pastListings.map((listing) => (
					<ACBlockPastRevItem key={listing._id} listing={listing} />
				))}
			</div>
		</div>
	);
}

export default ACReviewBlockPast;
