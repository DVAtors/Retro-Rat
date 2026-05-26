import "../pages/AdminConsolePage.css";
import ACBlockListItem from "./ACBlockListItem";

function ACBlockComponent() {
	return (
		<div className="ac-main-block">
			<div className="ac-tab-title">
				<span className="tab-title">Pending Listings For Review</span>
			</div>
			<div className="ac-block-items-list">
				{/* Item list goes here */}
				<ACBlockListItem />
				{/* <ACBlockListItem /> */}
				{/* <ACBlockListItem /> */}
				{/* <ACBlockListItem /> */}
			</div>
		</div>
	);
}

export default ACBlockComponent;
