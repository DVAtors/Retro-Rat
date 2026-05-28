import React, { useState, useEffect } from "react";
import "./UserConsolePage.css";
import Img1 from "../assets/product-img.png";
import Img2 from "../assets/Image (Classic Game Console Controller).png";
import Img3 from "../assets/Image (Sony Walkman Cassette Player).png";

import LogoutBtnComp from "../components/LogOutBtnComponent";

import { Link, Route, Routes, NavLink } from "react-router-dom";

import SubmitProduct from "./SubmitProduct";

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
	approved: { label: "ACTIVE", className: "status-active" },
	pending: { label: "PENDING REVIEW", className: "status-pending" },
	rejected: { label: "DENIED", className: "status-sold" },
};

function UserConsolePage({ id }) {
	// Updating the signed in user's name on the card
	const [user, setUser] = useState(null);

	useEffect(() => {
		const fetchUser = async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await fetch("http://localhost:5001/api/users/me", {
					headers: { Authorization: `Bearer ${token}` },
				});
				const data = await res.json();
				setUser(data);
			} catch (err) {
				console.error("Failed to fetch user:", err);
			}
		};
		fetchUser();
	}, []);

	// fetch signed in user's listings
	const [listings, setListings] = useState([]);
	const [listingsLoading, setListingsLoading] = useState(true);
	const [listingsError, setListingsError] = useState(null);

	useEffect(() => {
		const fetchMyListings = async () => {
			try {
				const token = localStorage.getItem("token");
				const res = await fetch("http://localhost:5001/api/listings/my", {
					headers: { Authorization: `Bearer ${token}` },
				});
				if (!res.ok) throw new Error("Failed to fetch listings");
				const data = await res.json();
				setListings(data);
			} catch (error) {
				setListingsError(error.message);
			} finally {
				setListingsLoading(false);
			}
		};
		fetchMyListings();
	}, []);

	const [activeTab, setActiveTab] = useState("listings");
	// const [listings, setListings] = useState(mockListings);

	const handleDelete = (id) => {
		setListings((prev) => prev.filter((l) => l.id !== id));
	};

	const renderListings = () => {
		const activeAndPending = listings.filter(
			(item) => item.status === "approved" || item.status === "pending",
		);

		return (
			<div className="uc-panel">
				<h2 className="uc-panel-title">Active and Pending Review Listings:</h2>
				{listingsLoading && <p>Loading...</p>}
				{listingsError && <p style={{ color: "red" }}>{listingsError}</p>}
				{!listingsLoading && activeAndPending.length === 0 && (
					<p className="uc-empty">
						No Active Listings or Listings Pending Review...
					</p>
				)}
				<div className="uc-listing-list">
					{activeAndPending.map((item) => {
						const statusCfg = STATUS_CONFIG[item.status];
						return (
							<div className="uc-listing-card" key={item._id}>
								<img
									src={item.mainImage}
									alt={item.productName}
									className="uc-listing-img"
								/>
								<div className="uc-listing-body">
									<div className="uc-listing-top">
										<div>
											<p className="uc-listing-title">{item.productName}</p>
											<p className="uc-listing-price">
												R{Number(item.price).toFixed(2)}
											</p>
											{item.status === "pending" && (
												<p className="uc-listing-note">
													<span className="uc-clock-icon">🕐</span> AWAITING
													ADMIN APPROVAL
												</p>
											)}
											<p className="uc-listing-meta">
												<span>
													<span className="uc-icon">👁</span> {item.views} VIEWS
												</span>
											</p>
										</div>
										<span className={`uc-status-badge ${statusCfg.className}`}>
											{statusCfg.label}
										</span>
									</div>
									<div className="uc-listing-actions">
										<button className="uc-btn uc-btn-view">VIEW</button>
										{item.status === "approved" && (
											<button className="uc-btn uc-btn-edit">✏ EDIT</button>
										)}
										<button
											className="uc-btn uc-btn-delete"
											onClick={() => handleDelete(item._id)}>
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
	};

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
			<h2 className="uc-panel-title">YOUR LISTINGS:</h2>
			{listingsLoading && <p>Loading...</p>}
			{listingsError && <p style={{ color: "red" }}>{listingsError}</p>}
			{!listingsLoading && listings.length === 0 && (
				<p className="uc-empty">No listings yet.</p>
			)}
			<div className="uc-listing-list">
				{listings.map((item) => {
					const statusCfg = STATUS_CONFIG[item.status] || {
						label: item.status.toUpperCase(),
						className: "status-pending",
					};
					return (
						<div className="uc-listing-card" key={item._id}>
							<img
								src={item.mainImage}
								alt={item.productName}
								className="uc-listing-img"
							/>
							<div className="uc-listing-body">
								<div className="uc-listing-top">
									<div>
										<p className="uc-listing-title">{item.productName}</p>
										<p className="uc-listing-price">
											R{Number(item.price).toFixed(2)}
										</p>
										{item.status === "pending" && (
											<p className="uc-listing-note">
												<span className="uc-clock-icon">🕐</span> AWAITING ADMIN
												APPROVAL
											</p>
										)}
										<p className="uc-listing-meta">
											<span>
												<span className="uc-icon">👁</span> {item.views} VIEWS
											</span>
										</p>
									</div>
									<span className={`uc-status-badge ${statusCfg.className}`}>
										{statusCfg.label}
									</span>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);

	return (
		<div className="uc-page">
			{/* Profile Header */}
			<div className="uc-profile-header">
				<div className="uc-profile-left">
					<div className="uc-avatar">
						{user?.name?.[0]?.toUpperCase() || "?"}
					</div>
					<div className="uc-profile-info">
						<h1 className="uc-username">{user?.name || "Loading..."}</h1>
						<p className="uc-member-since">
							MEMBER SINCE{" "}
							{user
								? new Date(user.createdAt).toLocaleDateString("en-US", {
										month: "long",
										year: "numeric",
									})
								: ""}
						</p>
						<p className="uc-stats">
							<span className="uc-star">★</span> {mockUser.rating} RATING
							<span className="uc-dot">•</span> {mockUser.sales} SALES
						</p>
					</div>
				</div>
				<div className="uc-card-btns">
					<LogoutBtnComp />
					{/* <button className="uc-list-new-btn">LIST NEW ITEM</button> */}
					<NavLink to="/sell" className="uc-list-new-btn">
						LIST NEW ITEM
					</NavLink>
				</div>
				{/* Test 1: For Linking to Submit Form Page... - Need to do */}
				{/* <Link
					to={`./Pages/SubmitProduct.jsx`}
					style={{ textDecoration: "none", color: "inherit" }}>
					<button className="uc-list-new-btn">LIST NEW ITEM</button>
				</Link> */}
				{/* Test 2 */}
				{/* <Routes>
					<Route path="/sell" element={<SubmitProduct />}>
						<button className="uc-list-new-btn">LIST NEW ITEM</button>
					</Route>
				</Routes> */}
			</div>

			{/* Tab Navigation */}
			<div className="uc-tabs">
				<button
					className={`uc-tab ${activeTab === "notifications" ? "uc-tab-active" : ""}`}
					onClick={() => setActiveTab("notifications")}>
					♡ All Listings
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
