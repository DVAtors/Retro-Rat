import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./AdminConsolePage.css";
import Img1 from "../assets/product-img.png";
import Img2 from "../assets/Image (Classic Game Console Controller).png";
import Img3 from "../assets/Image (Sony Walkman Cassette Player).png";

import ACBanner from "../components/AdminConsoleBanner";
import ACTopContentComp from "./ACTopContent";
import ACBlockComponent from "../components/ACReviewBlockPending";

import PendingListings from "./PendingListingsPage";
import PastRequests from "./PastRequestsPage";
import InboxAC from "./InboxPage";

function AdminConsolePage() {
	return (
		<div className="ac-page">
			{/* Admin Banner */}
			<ACBanner />

			<div className="ac-content">
				{/* Top Section: Profile + Nav Buttons */}
				<ACTopContentComp />

				{/* Main Panel */}
				{/* <div className="ac-content">
					{activeView === "pending" && renderPending()}
					{activeView === "past" && renderPastRequests()}
					{activeView === "inbox" && renderInbox()}
				</div> */}
				{/* <ACBlockComponent /> */}
				<Routes>
					{/* <Route index element={<Navigate to="pending" replace />} /> */}
					<Route path="pending" element={<PendingListings />} />
					<Route path="past-requests" element={<PastRequests />} />
					<Route path="inbox" element={<InboxAC />} />
				</Routes>
			</div>
		</div>
	);
}

export default AdminConsolePage;

// Mock data — swap with real API calls later
// const mockAdmin = {
// 	username: "ADMIN #1",
// 	adminSince: "January 2026",
// 	approvals: 23,
// 	initial: "A",
// };
// ``;
// const initialPending = [
// 	{
// 		id: 1,
// 		title: "VINTAGE MECHANICAL KEYBOARD",
// 		price: "R245.00",
// 		views: 156,
// 		messages: 5,
// 		status: "pending",
// 		imgSrc: Img1,
// 	},
// 	{
// 		id: 2,
// 		title: "RETRO CRT MONITOR",
// 		price: "R180.00",
// 		views: null,
// 		messages: null,
// 		note: "AWAITING ADMIN APPROVAL",
// 		status: "pending",
// 		imgSrc: Img3,
// 	},
// 	{
// 		id: 3,
// 		title: "CLASSIC GAME CONTROLLER",
// 		price: "R85.00",
// 		views: 234,
// 		messages: 18,
// 		status: "pending",
// 		imgSrc: Img2,
// 	},
// ];

// const mockPastRequests = [];
// const mockInbox = [];

// function AdminConsolePage() {
// 	// const [activeView, setActiveView] = useState("pending");
// 	// const [pendingListings, setPendingListings] = useState(initialPending);
// 	// const [approvedCount, setApprovedCount] = useState(mockAdmin.approvals);

// 	// const handleApprove = (id) => {
// 	// 	setPendingListings((prev) => prev.filter((l) => l.id !== id));
// 	// 	setApprovedCount((c) => c + 1);
// 	// };

// 	// const handleDelete = (id) => {
// 	// 	setPendingListings((prev) => prev.filter((l) => l.id !== id));
// 	// };

// 	// const renderPending = () => (
// 	// 	<div className="ac-panel">
// 	// 		<h2 className="ac-panel-title">PENDING LISTINGS</h2>
// 	// 		<div className="ac-listing-list">
// 	// 			{pendingListings.length === 0 ? (
// 	// 				<p className="ac-empty">
// 	// 					No pending listings. You're all caught up! ✓
// 	// 				</p>
// 	// 			) : (
// 	// 				pendingListings.map((item) => (
// 	// 					<div className="ac-listing-card" key={item.id}>
// 	// 						<img
// 	// 							src={item.imgSrc}
// 	// 							alt={item.title}
// 	// 							className="ac-listing-img"
// 	// 						/>
// 	// 						<div className="ac-listing-body">
// 	// 							<div className="ac-listing-top">
// 	// 								<div>
// 	// 									<p className="ac-listing-title">{item.title}</p>
// 	// 									<p className="ac-listing-price">{item.price}</p>
// 	// 									{item.note && (
// 	// 										<p className="ac-listing-note">
// 	// 											<span>🕐</span> {item.note}
// 	// 										</p>
// 	// 									)}
// 	// 									{(item.views || item.messages) && (
// 	// 										<p className="ac-listing-meta">
// 	// 											{item.views != null && (
// 	// 												<span>👁 {item.views} VIEWS</span>
// 	// 											)}
// 	// 											{item.messages != null && (
// 	// 												<span>💬 {item.messages} MESSAGES</span>
// 	// 											)}
// 	// 										</p>
// 	// 									)}
// 	// 								</div>
// 	// 								<span className="ac-status-badge">PENDING REVIEW</span>
// 	// 							</div>
// 	// 							<div className="ac-listing-actions">
// 	// 								<button className="ac-btn ac-btn-view">VIEW</button>
// 	// 								<button
// 	// 									className="ac-btn ac-btn-approve"
// 	// 									onClick={() => handleApprove(item.id)}>
// 	// 									✏ APPROVE
// 	// 								</button>
// 	// 								<button
// 	// 									className="ac-btn ac-btn-delete"
// 	// 									onClick={() => handleDelete(item.id)}>
// 	// 									🗑 DELETE
// 	// 								</button>
// 	// 							</div>
// 	// 						</div>
// 	// 					</div>
// 	// 				))
// 	// 			)}
// 	// 		</div>
// 	// 	</div>
// 	// );

// 	// const renderPastRequests = () => (
// 	// 	<div className="ac-panel">
// 	// 		<h2 className="ac-panel-title">PAST REQUESTS</h2>
// 	// 		{mockPastRequests.length === 0 ? (
// 	// 			<p className="ac-empty">No past requests on record.</p>
// 	// 		) : null}
// 	// 	</div>
// 	// );

// 	// const renderInbox = () => (
// 	// 	<div className="ac-panel">
// 	// 		<h2 className="ac-panel-title">INBOX</h2>
// 	// 		{mockInbox.length === 0 ? (
// 	// 			<p className="ac-empty">Your inbox is empty.</p>
// 	// 		) : null}
// 	// 	</div>
// 	// );

// 	return (
// 		<div className="ac-page">
// 			{/* Admin Banner */}
// 			<ACBanner />

// 			<div className="ac-content">
// 				{/* Top Section: Profile + Nav Buttons */}
// 				<ACTopContentComp />

// 				{/* Main Panel */}
// 				{/* <div className="ac-content">
// 					{activeView === "pending" && renderPending()}
// 					{activeView === "past" && renderPastRequests()}
// 					{activeView === "inbox" && renderInbox()}
// 				</div> */}
// 				<ACBlockComponent />
// 			</div>
// 		</div>
// 	);
// }

// export default AdminConsolePage;
