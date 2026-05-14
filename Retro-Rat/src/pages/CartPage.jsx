import "./CartPage.css";

// Importing components:
import CartProductComponent from "../components/CartProductComponent";

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
					<CartProductComponent />
					<CartProductComponent />
					<CartProductComponent />
				</div>
				<div className="cart-order-summary-container"></div>
			</div>
		</div>
	);
}

export default CartPage;
