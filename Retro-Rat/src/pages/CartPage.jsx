import "./CartPage.css";

function CartPage() {
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
					<div className="testCard1">Test Card 1</div>
					<div className="testCard1">Test Card 2</div>
					<div className="testCard1">Test Card 3</div>
				</div>
				<div className="cart-order-summary-container"></div>
			</div>
		</div>
	);
}

export default CartPage;
