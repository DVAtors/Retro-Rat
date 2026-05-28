import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SubmitProduct.css";
import { Container, Row, Col } from "react-bootstrap";

import Footer from "../components/Footer";
import UploadIcon from "../assets/uploadIcon.svg";
import TagIcon from "../assets/tagIcon.svg";
import CalenderIcon from "../assets/calenderIcon.svg";
import LocationIcon from "../assets/locationIcon.svg";
import DescriptionIcon from "../assets/descriptionIcon.svg";

import { uploadImage } from "../cloudinary";

// TEMP: hardcoded seller until i get around to auth
const TEMP_SELLER_ID = "6a031ed938a375e22177a08c";

export default function SubmitProduct() {
	const navigate = useNavigate();

	const [form, setForm] = useState({
		productName: "",
		category: "",
		price: "",
		era: "",
		condition: "",
		location: "",
		description: "",
		shippingOptions: [],
		authenticityAgreed: false,
	});

	const [imageFile, setImageFile] = useState(null);
	const [submitting, setSubmitting] = useState(false);
	const [error, setError] = useState(null);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleShippingChange = (e) => {
		const { value, checked } = e.target;
		setForm((prev) => ({
			...prev,
			shippingOptions: checked
				? [...prev.shippingOptions, value]
				: prev.shippingOptions.filter((opt) => opt !== value),
		}));
	};

	const handleFileChange = (e) => {
		const file = e.target.files[0];
		if (!file) return;

		if (file.size > 5 * 1024 * 1024) {
			setError("Image must be under 5MB");
			return;
		}
		setError(null);
		setImageFile(file);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);

		if (!imageFile) {
			setError("Please upload a product photo");
			return;
		}
		if (!form.authenticityAgreed) {
			setError("You must agree to the authenticity policy");
			return;
		}

		setSubmitting(true);
		try {
			// Step 1: Get the JWT passport
			const token = localStorage.getItem("token");
			if (!token) {
				throw new Error("Authentication error: Please log in again.");
			}

			// Step 2: Get everything into a FormData object (This converts the image into a binary stream)
			const formDataPayload = new FormData();
			formDataPayload.append("productName", form.productName);
			formDataPayload.append("description", form.description);
			formDataPayload.append("price", form.price);
			formDataPayload.append("condition", form.condition);
			formDataPayload.append("era", form.era);
			formDataPayload.append("category", form.category);
			formDataPayload.append("location", form.location);
			
			// Append each shipping option
			form.shippingOptions.forEach(opt => {
				formDataPayload.append("shippingOptions", opt);
			});

			// IMPORTANTTT: This name 'image' must perfectly match upload.single('image') in the backend route
			// because multer looks for that key to extract the file from the request
			formDataPayload.append("image", imageFile);

			// Step 3: Send the package at your backend pipeline
			const res = await fetch("http://localhost:5001/api/listings", {
				method: "POST",
				headers: {
					// Present the token to the backend for verification and authentication
					"Authorization": `Bearer ${token}`
				},
				body: formDataPayload,
			});

			if (!res.ok) {
				const errData = await res.json();
				throw new Error(errData.error || "Submission failed");
			}

		} catch (err) {
			setError(err.message);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<>
			<div className="submit-product-container">
				<div className="submit-product-header">
					<h1 style={{ margin: "0" }}>list your vintage tech</h1>
					<p style={{ margin: "0" }}>
						Share your retro electronics with collectors
					</p>
				</div>

				<form className="submit-product-form" onSubmit={handleSubmit}>
					<Container fluid className="product-photo-container">
						<div className="product-photo-form">
							<label htmlFor="product-photo" className="form-label">
								Product Photos
							</label>
							<div className="photo-instructions">
								<img src={UploadIcon} alt="Upload Icon" />
								<p style={{ color: "#000" }}>
									{imageFile
										? imageFile.name
										: "Drag and drop your images here"}
								</p>
								<p style={{ color: "#5B2C91", marginTop: "0" }}>or</p>
								<button
									type="button"
									className="upload-button"
									onClick={() =>
										document.getElementById("product-photo").click()
									}>
									Browse Files
								</button>
								<input
									type="file"
									id="product-photo"
									name="product-photo"
									accept="image/*"
									onChange={handleFileChange}
									style={{ display: "none" }}
								/>
								<p style={{ color: "#5B2C91" }}>
									Supported JPG, PNG. Max size: 5MB.
								</p>
							</div>
						</div>
					</Container>

					<Container fluid className="product-details-container">
						<div className="product-classification">
							<label className="form-label">Item Classification</label>

							<div className="product-details-form">
								<Col>
									<label htmlFor="product-title">
										<img src={TagIcon} alt="Tag Icon" />
										Item Name
									</label>
									<input
										type="text"
										id="product-title"
										name="productName"
										placeholder="e.g. Vintage Mechanical Keyboard"
										value={form.productName}
										onChange={handleChange}
										required
									/>
								</Col>

								<Col>
									<Row className="product-details-row">
										<Col>
											<label htmlFor="product-category">Category</label>
											<select
												id="product-category"
												name="category"
												value={form.category}
												onChange={handleChange}
												required>
												<option value="">Select category</option>
												<option value="Computers">Computers</option>
												<option value="Gaming">Gaming</option>
												<option value="Audio">Audio</option>
												<option value="Mobile">Mobile</option>
												<option value="Video">Video</option>
												<option value="Cameras">Cameras</option>
												<option value="Other">Other</option>
											</select>
										</Col>
										<Col>
											<label htmlFor="product-price">R Price (ZAR)</label>
											<input
												type="number"
												id="product-price"
												name="price"
												placeholder="e.g. 150.00"
												step="0.01"
												value={form.price}
												onChange={handleChange}
												required
											/>
										</Col>
									</Row>
								</Col>

								<Col>
									<Row className="product-details-row">
										<Col>
											<label htmlFor="era-decade">
												<img src={CalenderIcon} alt="Calendar Icon" />
												Era/Decade
											</label>
											<select
												id="era-decade"
												name="era"
												value={form.era}
												onChange={handleChange}
												required>
												<option value="">Select era/decade</option>
												<option value="70s">1970s</option>
												<option value="80s">1980s</option>
												<option value="90s">1990s</option>
												<option value="2000s">2000s</option>
											</select>
										</Col>

										<Col>
											<label htmlFor="product-condition">Condition</label>
											<select
												id="product-condition"
												name="condition"
												value={form.condition}
												onChange={handleChange}
												required>
												<option value="">Select condition</option>
												<option value="Excellent">Excellent</option>
												<option value="Great">Great</option>
												<option value="Moderate">Moderate</option>
												<option value="Low">Low</option>
												<option value="Poor">Poor</option>
											</select>
										</Col>
									</Row>
								</Col>
							</div>
						</div>
					</Container>

					<Container fluid className="product-description-container">
						<Row className="product-description-form">
							<label>Item Information</label>

							<Col className="product-location-col">
								<label htmlFor="product-location" className="form-label">
									<img src={LocationIcon} alt="Location Icon" />
									Location
								</label>
								<input
									type="text"
									id="product-location"
									name="location"
									placeholder="eg. Cape Town, South Africa"
									value={form.location}
									onChange={handleChange}
									required
								/>
							</Col>

							<Col className="product-description-col">
								<label htmlFor="product-description" className="form-label">
									<img src={DescriptionIcon} alt="Description Icon" />
									Description
								</label>
								<input
									type="text"
									id="product-description"
									name="description"
									placeholder="Describe your item's history, condition, functionality, and any unique features.."
									value={form.description}
									onChange={handleChange}
									required
								/>
								<p style={{ color: "#FFE500" }}>
									Tip: Include details about functionality, original packaging,
									and any included accessories
								</p>
							</Col>
						</Row>
					</Container>

					<Container fluid className="product-shipping-container">
						<Row className="product-shipping-form">
							<label className="form-label">Shipping Options</label>
							<Col>
								<fieldset className="shipping-options">
									<li>
										<input
											type="checkbox"
											id="local-pickup"
											value="local_pickup"
											checked={form.shippingOptions.includes("local_pickup")}
											onChange={handleShippingChange}
										/>
										<label htmlFor="local-pickup">Local Pickup Available</label>
									</li>
									<li>
										<input
											type="checkbox"
											id="domestic-shipping"
											value="domestic"
											checked={form.shippingOptions.includes("domestic")}
											onChange={handleShippingChange}
										/>
										<label htmlFor="domestic-shipping">
											Domestic Shipping (SA)
										</label>
									</li>
									<li>
										<input
											type="checkbox"
											id="international-shipping"
											value="international"
											checked={form.shippingOptions.includes("international")}
											onChange={handleShippingChange}
										/>
										<label htmlFor="international-shipping">
											International Shipping
										</label>
									</li>
								</fieldset>
							</Col>
						</Row>

						<div className="shipping-conditions">
							<input
								type="checkbox"
								id="authenticity-policy"
								checked={form.authenticityAgreed}
								onChange={(e) =>
									setForm({ ...form, authenticityAgreed: e.target.checked })
								}
							/>
							<p>
								I certify that this item is authentic vintage/retro tech and
								accurately described. I agree to RetroTech Market's
								<span
									style={{
										color: "#FFE500",
										fontWeight: "800",
										textTransform: "uppercase",
									}}>
									{" "}
									Seller terms
								</span>{" "}
								and{" "}
								<span
									style={{
										color: "#FFE500",
										fontWeight: "800",
										textTransform: "uppercase",
									}}>
									authenticity policy
								</span>
								.
							</p>
						</div>
					</Container>

					{error && (
						<p style={{ color: "red", textAlign: "center" }}>{error}</p>
					)}

					<div className="submit-button-container">
						<div className="button-controls">
							<button
								type="button"
								className="cancel-button"
								onClick={() => navigate("/")}>
								Cancel
							</button>
							<button
								type="submit"
								className="submit-button"
								disabled={submitting}>
								{submitting ? "Submitting..." : "Submit For Review"}
							</button>
						</div>
					</div>
				</form>
			</div>
		</>
	);
}
