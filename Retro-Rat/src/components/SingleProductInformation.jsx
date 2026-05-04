// Imports
import "../components/SingleProductInformation.css";

// Function

function SingleProductInformation() {
	return (
		<div className="singleProductContainer">
			<div className="titleContainer">
				<div className="titleContainer1">
					<h1>Vintage Mechanical Keyboard</h1>
					<div className="productTags">
						<p className="tag1">tag1</p>
						<p className="tag2">tag2</p>
						<p className="tag3">tag3</p>
					</div>
				</div>
				<button className="flagIconBtn">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="25"
						height="25"
						viewBox="0 0 25 25"
						fill="none">
						<path
							d="M4.16602 15.6247C4.16602 15.6247 5.20768 14.583 8.33268 14.583C11.4577 14.583 13.541 16.6663 16.666 16.6663C19.791 16.6663 20.8327 15.6247 20.8327 15.6247V3.12467C20.8327 3.12467 19.791 4.16634 16.666 4.16634C13.541 4.16634 11.4577 2.08301 8.33268 2.08301C5.20768 2.08301 4.16602 3.12467 4.16602 3.12467V15.6247Z"
							fill="#ffffff"
							stroke="black"
							stroke-width="2.08333"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path
							d="M4.16602 22.9167V15.625"
							stroke="black"
							stroke-width="2.08333"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
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
			<div className="sellerContainer"></div>
			<div className=""></div>
			<div className="conditionContainer">
				<h3 className="">CONDITION</h3>
				<div className="conditionTag">EXCELLENT</div>
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
					<div className="ButtonText">ADD TO CART</div>
				</button>
				<button className="buyNowBtn">BUY NOW</button>
			</div>
		</div>
	);
}

// Export

export default SingleProductInformation;
