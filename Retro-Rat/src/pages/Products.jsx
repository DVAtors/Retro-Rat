import React, { useEffect, useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";
import "./Products.css";

import { Container, Row } from "react-bootstrap";
import FilterBar from "../components/FilterBar";
import Footer from "../components/Footer";
import { apiGet } from "../client";

//import Img1 from "../assets/product-img.png"; //NOTE: TEMP, until we get something decided on for images.

/*filter labels -> schema values  category and condition match the schema 
im not gonna touch the filter bar so ima do this
*/
const ERA_MAP = {
	"2000S": "2000s",
	"1990S": "90s",
	"1980S": "80s",
	"1970S": "70s",
};

const toTitleCase = (s) =>
	s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

//all filter labels per wave: for "everything in this wave is selected"
const WAVES = {
	category: ["ALL", "COMPUTERS", "GAMING", "AUDIO", "MOBILE", "VIDEO", "CAMERAS"],
	era: ["ALL", "2000S", "1990S", "1980S", "1970S"],
	condition: ["ALL", "EXCELLENT", "GREAT", "MODERATE", "LOW", "POOR"],
};

export default function ProductsPage() {
	const [listings, setListings] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedTags, setSelectedTags] = useState([]);

	useEffect(() => {
		apiGet("/listings")
			.then((data) => setListings(data))
			.catch((err) => setError(err.message))
			.finally(() => setLoading(false));
	}, []);

	const filteredListings = useMemo(() => {
		const tagSet = new Set(selectedTags);
		
		//for each wave figure out which schema values are selected- if "ALL" is in the wave or nothing is selected, we don't filter on that wave.
		const waveFilter = (waveName, transform) => {
			const tags = WAVES[waveName];
			const selectedInWave = tags.filter((t) => tagSet.has(t));

			if (selectedInWave.length === 0 || selectedInWave.includes("ALL")) {
				return null;
			}

			return new Set(
				selectedInWave.map(transform).filter(Boolean)
			);
		};

		const categoryFilter = waveFilter("category", toTitleCase);
		const eraFilter = waveFilter("era", (t) => ERA_MAP[t]);
		const conditionFilter = waveFilter("condition", toTitleCase);

		return listings.filter((l) => {
			if (categoryFilter && !categoryFilter.has(l.category)) return false;
			if (eraFilter && !eraFilter.has(l.era)) return false;
			if (conditionFilter && !conditionFilter.has(l.condition)) return false;
			return true;
		});
	}, [listings, selectedTags]);

	return (
		<>
			<Container fluid className="product-main-content">
				<Container fluid className="product-header">
					<div className="header-text">
						<h1>Welcome to Retro Rat</h1>
						<p>
							Buy and sell authentic retro electronics from verified collectors
						</p>
					</div>
				</Container>

				<FilterBar onFilterChange={setSelectedTags} />

				<Row className="product-card-container">
					{
						loading && (
							<p className="error-text">Loading listings...</p>
						) /*{} makes it a js expression in the html, this is just a one line if statement basically */
					}
					{
						error && (
							<p className="error-text">Couldn't load listings: {error}</p>
						) /*again another one wow*/
					}
					{!loading && !error && filteredListings.length === 0 && (
						<p className="error-text">
							{listings.length === 0
								? "No listings yet. Check back soon."
								: "No listings match your filters."}
						</p>
					)}

					{filteredListings.map((listing) => (
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
		</>
	);
}