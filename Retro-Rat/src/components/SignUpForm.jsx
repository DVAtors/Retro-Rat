import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TunePassword from "../components/TunePassword";

import "../pages/LoginPage.css";

export default function SignUpForm() {
	const [email, setEmail] = useState("");
	const [username, setUsername] = useState("");
	const [tunePassword, setTunePassword] = useState("--------");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setErrorMessage("");

		try {
			const response = await fetch("http://localhost:5001/api/users/register", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ name: username, email, password: tunePassword }),
			});

			const data = await response.json();
			if (!response.ok) {
				setErrorMessage(data.error || "Something went wrong");
				return;
			}

			alert("Account created! Please log in.");
			console.log("Account Created Successfully");
			navigate("/login"); // ← redirect to login after signup
		} catch (error) {
			setErrorMessage("Failed to connect to the server.");
			console.log(errorMessage);
		}
	};

	return (
		<Container fluid className="account-details-main-container">
			<Row className="account-details-signup-container">
				<Col className="account-details">
					<h1>Account Details</h1>
					{errorMessage && (
						<p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
					)}

					<form id="auth-form" onSubmit={handleSubmit}>
						<div className="input-container">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								id="username"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								placeholder="e.g. RetroRat123"
								required
							/>
						</div>
						<div className="input-container">
							<label htmlFor="email">Email</label>
							<input
								type="email"
								id="email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
								placeholder="e.g. leeBernersTimCERN@hotmail.com"
								required
							/>
						</div>
					</form>
				</Col>
			</Row>

			<Row className="password-details-container">
				<Col className="account-details">
					<h1>Password</h1>
					{errorMessage && (
						<p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>
					)}
					<TunePassword onPasswordChange={(pw) => setTunePassword(pw)} />
				</Col>
			</Row>

			<Container fluid className="login-sign-up-submit-button-container">
				<Row className="login-sign-up-submit-button">
					<Col className="login-submit-button">
						<button type="submit" form="auth-form">
							Submit
						</button>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
