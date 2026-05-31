import "./CartOrderSumComponent.css";

const SHIPPING = 50;

function CartOrderSummaryComp({ listings = [] }) {
  const subtotal = listings.reduce((sum, l) => sum + (l.price || 0), 0);
  const shipping = listings.length > 0 ? SHIPPING : 0;
  const total = subtotal + shipping;

  const fmt = (n) => `R ${n.toFixed(2)}`;

  return (
    <div className="cart-order-summary-container">
      <div className="cs-title">
        <span className="cart-sum-title">Order Summary</span>
      </div>
      <div className="cs-totals">
        <div className="itemP">
          <span className="item-price">Items: </span>
          <span className="item-price">{listings.length}</span>
        </div>
        <div className="subP">
          <span className="subtotal-price">Sub-Total: </span>
          <span className="subtotal-price">{fmt(subtotal)}</span>
        </div>
        <div className="ship">
          <span className="shipping-price">Shipping: </span>
          <span className="shipping-price">{fmt(shipping)}</span>
        </div>
      </div>
      <div className="total-price">
        <span className="totalP">Total</span>
        <span className="totalP">{fmt(total)}</span>
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
