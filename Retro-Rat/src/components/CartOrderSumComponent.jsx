import "./CartOrderSumComponent.css";

function CartOrderSummaryComp() {
	return (
		<div className="cart-order-summary-container">
			<div className="cs-title">
				<span className="cart-sum-title">Order Summary</span>
			</div>
			<div className="cs-totals">
				<div className="itemP">
					<span className="item-price">Item Price: </span>
					<span className="item-price">R ${}</span>
				</div>
				<div className="subP">
					<span className="subtotal-price">Sub-Total: </span>
					<span className="subtotal-price">R ${}</span>
				</div>
				<div className="ship">
					<span className="shipping-price">Shipping: </span>
					<span className="shipping-price">R ${}</span>
				</div>
				{/* <span className="item-price">Item Price: ${item.price}</span>
				<span className="subtotal-price">Sub-Total: ${subtotal}</span>
				<span className="shipping-price">Shipping: ${shippingPrice}</span> */}
			</div>
			<div className="total-price">
				<span className="totalP">Total</span>
				<span className="totalP">R ${}</span>
			</div>
			<div className="cs-actions">
				<button className="checkoutBtn">
					<span className="checkout-text">Proceed to Checkout</span>
				</button>
				<button className="contShopBtn">
					<span className="cont-shop-text">Continue Shopping</span>
				</button>
			</div>
		</div>
	);
}

export default CartOrderSummaryComp;
