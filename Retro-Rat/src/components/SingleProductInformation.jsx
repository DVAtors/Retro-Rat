import "./SingleProductInformation.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { apiGet, apiPost, apiDelete } from "../client";
import FlagButtonComponent from "./flagButtonComponent";
import SellerContainerComponent from "./SellerContainerComponent";
import DeleteItemBtn from "./AdminDeleteItemBtnComponent";

// FontAwesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faCartShopping,
	faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

function SingleProductInformation({ listing }) {
	const navigate = useNavigate();
	const [me, setMe] = useState(null);

	useEffect(() => {
		apiGet("/users/me")
			.then(setMe)
			.catch(() => setMe(null));
	}, []);

	const isOwner =
		me && listing.seller && (listing.seller._id || listing.seller) === me._id;

	const canManage =
		me &&
		(me.isAdmin ||
			(listing.seller && (listing.seller._id || listing.seller) === me._id));

	const handleAddToCart = async () => {
		try {
			await apiPost("/cart", { listingId: listing._id });
		} catch (err) {
			console.error("Couldn't add to cart:", err);
		}
	};

	const handleBuyNow = async () => {
		try {
			await apiPost("/cart", { listingId: listing._id });
			navigate("/cart");
		} catch (err) {
			console.error("Couldn't add to cart:", err);
		}
	};

	const handleDelete = async () => {
		if (!confirm("Delete this listing? This can't be undone.")) return;
		try {
			await apiDelete(`/listings/${listing._id}`);
			navigate("/console");
		} catch (err) {
			console.error("Couldn't delete listing:", err);
		}
	};

	return (
		<div className="singleProductContainer">
			<div className="product-title-info">
				<div className="titleContainer">
					<div className="titleContainer1">
						<h1>{listing.productName}</h1>
						<div className="productTags">
							<p className="tag1">{listing.category}</p>
							<p className="tag2">{listing.era}</p>
							<p className="tag3">Verified</p>
						</div>
						<div className="locationText">
							<FontAwesomeIcon
								className="locationMarker"
								icon={faLocationDot}
							/>
							<span className="location-text">{listing.location}</span>
						</div>
					</div>
					<div className="item-controls-container">
						{canManage && (
							<>
								{isOwner && (
									<FlagButtonComponent
										listingId={listing._id}
										onClick={() => navigate(`/sell/${listing._id}`)}
									/>
								)}
								<DeleteItemBtn listingId={listing._id} onClick={handleDelete} />
							</>
						)}
					</div>
				</div>
				<SellerContainerComponent seller={listing.seller} />
				<div className="divider"></div>
				<div className="item-information">
					<div className="priceContainer">
						<h2 className="price">R{listing.price.toFixed(2)}</h2>
					</div>
					<div className="itemDescriptionContainer">
						<p>{listing.description}</p>
					</div>
				</div>
			</div>

			<div className="condition-and-buttons">
				<div className="conditionContainer">
					<h3 className="">CONDITION</h3>
					<div className="conditionTag">
						<span className="conditionText">
							{listing.condition?.toUpperCase()}
						</span>
					</div>
				</div>
				<div className="buttonsContainer">
					<button className="addToCartButton" onClick={handleAddToCart}>
						<div className="cartIconContainer">
							<FontAwesomeIcon icon={faCartShopping} />
						</div>
						<span className="buttonText">ADD TO CART</span>
					</button>
					<button className="buyNowBtn" onClick={handleBuyNow}>
						<span className="buttonText">BUY NOW</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default SingleProductInformation;
