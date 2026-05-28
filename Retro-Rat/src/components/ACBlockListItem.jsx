import "./ACBlockListItem.css";

function ACBlockListItem({ listing, onApprove, onDeny }) {
	const { _id, productName, price, mainImg, seller } = listing;

	return (
		<div className="ac-list-item">
			<div className="ac-list-item-image">
				<img src="{mainImg}" alt="{productName}" />
			</div>
			<div className="ac-list-item-information">
				<div className="ac-info-top">
					<div className="top-info">
						<span className="prod-name">{productName}</span>
						<span className="prod-price">R{Number(price).toFixed(2)}</span>
					</div>
					<div className="pending-tag">
						<span className="tag-text">Pending Review</span>
					</div>
				</div>

				<div className="ac-info-bot">
					<div className="ac-bot-info">
						<button className="ac-view-item-btn">
							<span className="ac-view-item">View Item</span>
						</button>
						<button
							className="ac-approve-item-btn"
							onClick={() => onApprove(_id)}>
							<span className="ac-approve-item">Approve</span>
						</button>
						<button className="ac-delete-item-btn" onClick={() => onDeny(_id)}>
							<span className="ac-delete-item">Deny</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ACBlockListItem;
