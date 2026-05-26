import "./ACBlockListItem.css";

function ACBlockListItem(params) {
	return (
		<div className="ac-list-item">
			<div className="ac-list-item-image">
				<img src="" alt="" />
			</div>
			<div className="ac-list-item-information">
				<div className="ac-info-top">
					<div className="top-info">
						<span className="prod-name">Temp Prod name</span>
						<span className="prod-price">R245.00</span>
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
						<button className="ac-approve-item-btn">
							<span className="ac-approve-item">Approve</span>
						</button>
						<button className="ac-delete-item-btn">
							<span className="ac-delete-item">Deny</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ACBlockListItem;
