import "./CartProductComponent.css";

import React, { useState } from "react";

// import components
import CartDeleteProductComponent from "./CartDeleteProductComponent";

// component with listing stuff
function CartProductComponent({ listing }) {
	const [count, setCount] = useState(1);
	const increment = () => setCount(count + 1);
	const decrement = () => setCount(count - 1 ? count - 1 : 1);

	return (
		<div className="cart-card-container">
			<div className="cart-container-content">
				<img className="cart-product-image" src={listing.mainImg}></img>
				<div className="cart-product-info">
					<div className="product-info-upper">
						<div className="c-product-titles">
							<span className="c-product-title">{listing.productName}</span>
							<span className="c-product-subtitle">{listing.seller}</span>
						</div>
						<CartDeleteProductComponent />
					</div>
					<div className="product-info-lower">
						<div className="c-product-counter">
							<button className="c-counter-minus" onClick={decrement}>
								<div className="c-minus-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none">
										<path
											d="M4.16602 10H15.8327"
											stroke="black"
											stroke-width="1.66667"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</button>
							<span className="c-counter-number">{count}</span>
							<button className="c-counter-plus" onClick={increment}>
								<div className="c-plus-icon">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 20 20"
										fill="none">
										<path
											d="M4.16602 10H15.8327"
											stroke="black"
											stroke-width="1.66667"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
										<path
											d="M10 4.16663V15.8333"
											stroke="black"
											stroke-width="1.66667"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
								</div>
							</button>
						</div>
						<span className="product-price">R{listing.price}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

// Component without the listing stuff
// function CartProductComponent() {
// 	const [count, setCount] = useState(1);
// 	const increment = () => setCount(count + 1);
// 	const decrement = () => setCount(count - 1 ? count - 1 : 1);

// 	return (
// 		<div className="cart-card-container">
// 			<div className="cart-container-content">
// 				<img className="cart-product-image" src=""></img>
// 				<div className="cart-product-info">
// 					<div className="product-info-upper">
// 						<div className="c-product-titles">
// 							<span className="c-product-title">TesterName123</span>
// 							<span className="c-product-subtitle">TestSellerName</span>
// 						</div>
// 						<CartDeleteProductComponent />
// 					</div>
// 					<div className="product-info-lower">
// 						<div className="c-product-counter">
// 							<button className="c-counter-minus" onClick={decrement}>
// 								<div className="c-minus-icon">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										width="20"
// 										height="20"
// 										viewBox="0 0 20 20"
// 										fill="none">
// 										<path
// 											d="M4.16602 10H15.8327"
// 											stroke="black"
// 											stroke-width="1.66667"
// 											stroke-linecap="round"
// 											stroke-linejoin="round"
// 										/>
// 									</svg>
// 								</div>
// 							</button>
// 							<span className="c-counter-number">{count}</span>
// 							<button className="c-counter-plus" onClick={increment}>
// 								<div className="c-plus-icon">
// 									<svg
// 										xmlns="http://www.w3.org/2000/svg"
// 										width="20"
// 										height="20"
// 										viewBox="0 0 20 20"
// 										fill="none">
// 										<path
// 											d="M4.16602 10H15.8327"
// 											stroke="black"
// 											stroke-width="1.66667"
// 											stroke-linecap="round"
// 											stroke-linejoin="round"
// 										/>
// 										<path
// 											d="M10 4.16663V15.8333"
// 											stroke="black"
// 											stroke-width="1.66667"
// 											stroke-linecap="round"
// 											stroke-linejoin="round"
// 										/>
// 									</svg>
// 								</div>
// 							</button>
// 						</div>
// 						<span className="product-price">R200.00</span>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

export default CartProductComponent;
