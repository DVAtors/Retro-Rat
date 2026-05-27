import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ACTopContentComp(onTabChange) {
	// pull pending listing items fromm api endpoint goes here

	// on click swap active button

	// on click swap active display block contents
	// const [isPendingClicked, setIsPendingClicked] = useState(true);
	// const [isPastReqClicked, setIsPastReqClicked] = useState(false);
	// const [isInboxClicked, setIsInboxClicked] = useState(false);

	// const handleClick = (e) => {
	// 	if (e.target.className.includes("ac-pending")) {
	// 		setIsPendingClicked(true);
	// 		setIsPastReqClicked(false);
	// 		setIsInboxClicked(false);
	// 	} else if (e.target.className.includes("ac-past-req")) {
	// 		setIsPendingClicked(false);
	// 		setIsPastReqClicked(true);
	// 		setIsInboxClicked(false);
	// 	} else if (e.target.className.includes("ac-inbox")) {
	// 		setIsPendingClicked(false);
	// 		setIsPastReqClicked(false);
	// 		setIsInboxClicked(true);
	// 	}
	// };

	// const [activeTab, setActiveTab] = useState("pending");

	// const handleClick = (tab) => {
	// 	setActiveTab(tab);
	// 	onTabChange?.(tab); // notify parent if needed
	// };

	return (
		<div className="ac-user-row">
			<div className="ac-user-card">
				<div className="ac-user-icon">
					<span className="ac-ui-text">T</span>
				</div>
				<div className="ac-user-information">
					<span className="ac-user-name">Admin_01</span>
					<span className="ac-user-account">Administrator</span>
					<span className="ac-user-pending-list">23 Pending Listings</span>
				</div>
			</div>
			<div className="ac-user-actions">
				<NavLink
					to="/account/pending"
					className={({ isActive }) =>
						isActive ? "ac-pending ac-active" : "ac-pending"
					}>
					View Pending Listings
				</NavLink>
				<NavLink
					to="/account/past-requests"
					className={({ isActive }) =>
						isActive ? "ac-past-req ac-active" : "ac-past-req"
					}>
					View Past Requests
				</NavLink>
				{/* <NavLink
					to="/account/inbox"
					className={({ isActive }) =>
						isActive ? "ac-inbox ac-active" : "ac-inbox"
					}>
					Inbox
				</NavLink> */}
			</div>
			{/* <div className="ac-user-actions">
				<button className="ac-pending ac-active">
					<span className="pending-text ac-active-text">
						View Pending Listings
					</span>
				</button>
				<button className="ac-past-req">
					<span className="past-req-text">View Past Requests</span>
				</button>
				<button className="ac-inbox">
					<span className="inbox-text">Inbox</span>
				</button>
			</div> */}
			{/* <div className="ac-user-actions">
				<button
					className={`ac-pending ${activeTab === "pending" ? "ac-active" : ""}`}
					onClick={() => handleClick("pending")}>
					<span
						className={`pending-text ${activeTab === "pending" ? "ac-active-text" : ""}`}>
						View Pending Listings
					</span>
				</button>
				<button
					className={`ac-past-req ${activeTab === "past-req" ? "ac-active" : ""}`}
					onClick={() => handleClick("past-req")}>
					<span
						className={`past-req-text ${activeTab === "past-req" ? "ac-active-text" : ""}`}>
						View Past Requests
					</span>
				</button>
				<button
					className={`ac-inbox ${activeTab === "inbox" ? "ac-active" : ""}`}
					onClick={() => handleClick("inbox")}>
					<span
						className={`inbox-text ${activeTab === "inbox" ? "ac-active-text" : ""}`}>
						Inbox
					</span>
				</button>
			</div> */}
		</div>
	);
}

export default ACTopContentComp;
