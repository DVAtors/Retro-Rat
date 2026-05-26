import "./SingleProductInformation.css";
import { useNavigate } from "react-router-dom";
import { apiPost } from "../client";
import FlagButtonComponent from "./flagButtonComponent";
import SellerContainerComponent from "./SellerContainerComponent";

function SingleProductInformation({ listing }) {
	const navigate = useNavigate();

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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								className="location-icon">
								<path
									d="M16.6673 8.33329C16.6673 12.4941 12.0515 16.8275 10.5015 18.1658C10.3571 18.2744 10.1813 18.3331 10.0007 18.3331C9.81999 18.3331 9.64421 18.2744 9.49982 18.1658C7.94982 16.8275 3.33398 12.4941 3.33398 8.33329C3.33398 6.56518 4.03636 4.86949 5.28661 3.61925C6.53685 2.36901 8.23254 1.66663 10.0007 1.66663C11.7688 1.66663 13.4645 2.36901 14.7147 3.61925C15.9649 4.86949 16.6673 6.56518 16.6673 8.33329Z"
									stroke="white"
									stroke-width="1.66667"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
								<path
									d="M10 10.8334C11.3807 10.8334 12.5 9.71409 12.5 8.33337C12.5 6.95266 11.3807 5.83337 10 5.83337C8.61929 5.83337 7.5 6.95266 7.5 8.33337C7.5 9.71409 8.61929 10.8334 10 10.8334Z"
									stroke="white"
									stroke-width="1.66667"
									stroke-linecap="round"
									stroke-linejoin="round"
								/>
							</svg>
							<span className="location-text">Gauteng</span>
							{/* <p>{listing.productLocation}</p> */}
						</div>
					</div>
					<FlagButtonComponent listingId={listing._id} />
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
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="25"
								height="25"
								viewBox="0 0 25 25"
								fill="none">
								<path
									d="M8.33268 22.9163C8.90798 22.9163 9.37435 22.45 9.37435 21.8747C9.37435 21.2994 8.90798 20.833 8.33268 20.833C7.75739 20.833 7.29102 21.2994 7.29102 21.8747C7.29102 22.45 7.75739 22.9163 8.33268 22.9163Z"
									stroke="white"
									strokeWidth="2.08333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M19.7917 22.9163C20.367 22.9163 20.8333 22.45 20.8333 21.8747C20.8333 21.2994 20.367 20.833 19.7917 20.833C19.2164 20.833 18.75 21.2994 18.75 21.8747C18.75 22.45 19.2164 22.9163 19.7917 22.9163Z"
									stroke="white"
									strokeWidth="2.08333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M2.13477 2.13574H4.2181L6.98893 15.0732C7.09058 15.5471 7.35421 15.9706 7.73446 16.271C8.11472 16.5714 8.58779 16.7299 9.07227 16.7191H19.2598C19.7339 16.7183 20.1936 16.5558 20.5629 16.2585C20.9322 15.9611 21.1891 15.5467 21.291 15.0837L23.0098 7.34408H5.33268"
									stroke="white"
									strokeWidth="2.08333"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<span className="buttonText" onClick={handleAddToCart}>ADD TO CART</span>
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