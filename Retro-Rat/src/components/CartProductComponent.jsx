import "./CartProductComponent.css";

import React, { useState } from "react";

// import components
import CartDeleteProductComponent from "./CartDeleteProductComponent";

function CartProductComponent({ id, title, username, price, imgSrc, onRemove }) {
	const [count, setCount] = useState(1);
	const increment = () => setCount((prevCount) => prevCount + 1);
	const decrement = () => setCount((prevCount) => Math.max(prevCount - 1, 1));

	return (
		<div className="cart-card-container">
			<div className="cart-container-content">
				<img
					className="cart-product-image"
					src={imgSrc}
					alt={title}
				/>
				<div className="cart-product-info">
					<div className="product-info-upper">
						<div className="c-product-titles">
							<span className="c-product-title">{title}</span>
							<span className="c-product-subtitle">{username}</span>
						</div>
						<CartDeleteProductComponent onClick={() => onRemove(id)} />
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
						<span className="product-price">{price}</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CartProductComponent;