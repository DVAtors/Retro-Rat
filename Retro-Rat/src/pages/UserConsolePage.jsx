import React, { useState } from "react";
import "./UserConsolePage.css";
import Img1 from "../assets/product-img.png";
import Img2 from "../assets/Image (Classic Game Console Controller).png";
import Img3 from "../assets/Image (Sony Walkman Cassette Player).png";

// Mock data — swap with real API calls later
const mockUser = {
	username: "TECHCOLLECTOR",
	memberSince: "January 2026",
	rating: 4.9,
	sales: 23,
	initial: "T",
};

const mockListings = [
	{
		id: 1,
		title: "VINTAGE MECHANICAL KEYBOARD",
		price: "R245.00",
		views: 156,
		comments: 5,
		status: "active",
		imgSrc: Img1,
	},
	{
		id: 2,
		title: "RETRO CRT MONITOR",
		price: "R180.00",
		views: null,
		comments: null,
		status: "pending",
		note: "AWAITING ADMIN APPROVAL",
		imgSrc: Img3,
	},
	{
		id: 3,
		title: "CLASSIC GAME CONTROLLER",
		price: "R85.00",
		views: 234,
		comments: 18,
		status: "sold",
		imgSrc: Img2,
	},
];

const mockSavedItems = [];
const mockNotifications = [];

const STATUS_CONFIG = {
	active: { label: "ACTIVE", className: "status-active" },
	pending: { label: "PENDING REVIEW", className: "status-pending" },
	sold: { label: "SOLD", className: "status-sold" },
};

function UserConsolePage() {
	const [activeTab, setActiveTab] = useState("listings");
	const [listings, setListings] = useState(mockListings);

	const handleDelete = (id) => {
		setListings((prev) => prev.filter((l) => l.id !== id));
	};

	const renderListings = () => (
		<div className="uc-panel">
			<h2 className="uc-panel-title">YOUR LISTINGS</h2>
			<div className="uc-listing-list">
				{listings.map((item) => {
					const statusCfg = STATUS_CONFIG[item.status];
					return (
						<div className="uc-listing-card" key={item.id}>
							<img
								src={item.imgSrc}
								alt={item.title}
								className="uc-listing-img"
							/>
							<div className="uc-listing-body">
								<div className="uc-listing-top">
									<div>
										<p className="uc-listing-title">{item.title}</p>
										<p className="uc-listing-price">{item.price}</p>
										{item.note && (
											<p className="uc-listing-note">
												<span className="uc-clock-icon">🕐</span> {item.note}
											</p>
										)}
										{(item.views || item.comments) && (
											<p className="uc-listing-meta">
												{item.views && (
													<span>
														<span className="uc-icon">👁</span> {item.views}{" "}
														VIEWS
													</span>
												)}
												{item.comments && (
													<span>
														<span className="uc-icon">💬</span> {item.comments}{" "}
														COMMENTS
													</span>
												)}
											</p>
										)}
									</div>
									<span className={`uc-status-badge ${statusCfg.className}`}>
										{statusCfg.label}
									</span>
								</div>
								<div className="uc-listing-actions">
									<button className="uc-btn uc-btn-view">VIEW</button>
									{item.status === "active" && (
										<button className="uc-btn uc-btn-edit">✏ EDIT</button>
									)}
									<button
										className="uc-btn uc-btn-delete"
										onClick={() => handleDelete(item.id)}>
										🗑 DELETE
									</button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);

	const renderSaved = () => (
		<div className="uc-panel">
			<h2 className="uc-panel-title">SAVED ITEMS</h2>
			{mockSavedItems.length === 0 ? (
				<p className="uc-empty">No saved items yet.</p>
			) : null}
		</div>
	);

	const renderNotifications = () => (
		<div className="uc-panel">
			<h2 className="uc-panel-title">NOTIFICATIONS</h2>
			{mockNotifications.length === 0 ? (
				<p className="uc-empty">No new notifications.</p>
			) : null}
		</div>
	);

	return (
		<div className="uc-page">
			{/* Profile Header */}
			<div className="uc-profile-header">
				<div className="uc-profile-left">
					<div className="uc-avatar">{mockUser.initial}</div>
					<div className="uc-profile-info">
						<h1 className="uc-username">{mockUser.username}</h1>
						<p className="uc-member-since">
							MEMBER SINCE {mockUser.memberSince}
						</p>
						<p className="uc-stats">
							<span className="uc-star">★</span> {mockUser.rating} RATING
							<span className="uc-dot">•</span> {mockUser.sales} SALES
						</p>
					</div>
				</div>
				<button className="uc-list-new-btn">LIST NEW ITEM</button>
			</div>

			{/* Tab Navigation */}
			<div className="uc-tabs">
				<button
					className={`uc-tab ${activeTab === "notifications" ? "uc-tab-active" : ""}`}
					onClick={() => setActiveTab("notifications")}>
					♡ NOTIFICATIONS
				</button>
				<button
					className={`uc-tab ${activeTab === "listings" ? "uc-tab-active uc-tab-purple" : ""}`}
					onClick={() => setActiveTab("listings")}>
					📦 MY LISTINGS
				</button>
				<button
					className={`uc-tab ${activeTab === "saved" ? "uc-tab-active" : ""}`}
					onClick={() => setActiveTab("saved")}>
					♡ SAVED ITEMS
				</button>
			</div>

			{/* Tab Content */}
			<div className="uc-content">
				{activeTab === "listings" && renderListings()}
				{activeTab === "saved" && renderSaved()}
				{activeTab === "notifications" && renderNotifications()}
			</div>
		</div>
	);
}

export default UserConsolePage;
