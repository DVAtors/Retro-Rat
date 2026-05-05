// Imports
import "../components/SingleProductInformation.css";

import FlagButtonComponent from "./flagButtonComponent";
import SellerContainerComponent from "./SellerContainerComponent";

// Function

function SingleProductInformation() {
	return (
		<div className="singleProductContainer">
			<div className="titleContainer">
				<div className="titleContainer1">
					<h1>Vintage Mechanical Keyboard</h1>
					<div className="productTags">
						<p className="tag1">Computers</p>
						<p className="tag2">1980s</p>
						<p className="tag3">Verified</p>
					</div>
				</div>
				<FlagButtonComponent />
			</div>
			<div className="divider"></div>
			<div className="priceContainer">
				<h2 className="price">R250.00</h2>
			</div>
			{/* <h2 className="price">R250.00</h2> */}
			<div className="itemDescriptionContainer">
				<p>
					IBM Model M mechanical keyboard in excellent working condition. Cherry
					MX switches, all keys tested and working perfectly. Original cable
					included. This iconic keyboard has been carefully maintained and shows
					minimal signs of wear. Perfect for vintage computing enthusiasts or
					modern mechanical keyboard collectors.
				</p>
			</div>
			<SellerContainerComponent />
			{/* <div className="sellerContainer"></div> */}
			<div className="conditionContainer">
				<h3 className="">CONDITION</h3>
				<div className="conditionTag">
					<span className="conditionText">EXCELLENT</span>
				</div>
			</div>
			<div className="buttonsContainer">
				<button className="addToCartButton">
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
								stroke-width="2.08333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M19.7917 22.9163C20.367 22.9163 20.8333 22.45 20.8333 21.8747C20.8333 21.2994 20.367 20.833 19.7917 20.833C19.2164 20.833 18.75 21.2994 18.75 21.8747C18.75 22.45 19.2164 22.9163 19.7917 22.9163Z"
								stroke="white"
								stroke-width="2.08333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
							<path
								d="M2.13477 2.13574H4.2181L6.98893 15.0732C7.09058 15.5471 7.35421 15.9706 7.73446 16.271C8.11472 16.5714 8.58779 16.7299 9.07227 16.7191H19.2598C19.7339 16.7183 20.1936 16.5558 20.5629 16.2585C20.9322 15.9611 21.1891 15.5467 21.291 15.0837L23.0098 7.34408H5.33268"
								stroke="white"
								stroke-width="2.08333"
								stroke-linecap="round"
								stroke-linejoin="round"
							/>
						</svg>
					</div>
					<span className="buttonText">ADD TO CART</span>
				</button>
				<button className="buyNowBtn">
					<span className="buttonText">BUY NOW</span>
				</button>
			</div>
		</div>
	);
}

// Export

export default SingleProductInformation;
