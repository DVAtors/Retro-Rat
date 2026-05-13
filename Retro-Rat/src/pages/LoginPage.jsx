import React, { useState } from "react";

import "./LoginPage.css";
import { Container, Row, Col } from "react-bootstrap";
import TunePassword from "../components/TunePassword";

//import LoginForm from "../components/LoginForm";
//import SignUpForm from "../components/SignUpForm";

export default function LoginPage() {
	//start login mode as true (i have an acoount, LET ME IIIIIIIIIN)
	const [isLogin, setIsLogin] = useState(true);

	return (
		<>
			<div className="login-sign-up-page">
				<div className="login-sign-up-container">
					<div className="login-sign-up-header">
						{isLogin ? (
							<div className="login-header">
								<h1 style={{ marginBottom: 0 }}> DONT HAVE AN ACCOUNT YET?</h1>
								<p style={{ color: "#FFE500" }}>Sign-up to get started!!</p>
							</div>
						) : (
							<div className="sign-up-header">
								<h1 style={{ marginBottom: 0 }}> ALREADY HAVE AN ACCOUNT? </h1>
								<p style={{ color: "#FFE500" }}>
									Log-in to continue where you left off{" "}
								</p>
							</div>
						)}
					</div>

					<div className="login-sign-up-button-container">
						<Row className="login-sign-up-buttons">
							<Col md={4} className="login-button">
								<button
									className={isLogin ? "active" : ""}
									onClick={() => setIsLogin(true)}>
									Log-in
								</button>
							</Col>

							<Col md={4} className="sign-up-button">
								<button
									className={!isLogin ? "active" : ""}
									onClick={() => setIsLogin(false)}>
									Sign-Up
								</button>
							</Col>
						</Row>
					</div>

					<div>
						{isLogin ? (
							<Row className="account-details-container">
								<Col className="account-details">
									<h1> Account Details</h1>
									<form>
										<div className="input-container">
											<label htmlFor="username">Username</label>
											<input
												type="text"
												id="username"
												name="username"
												placeholder="e.g. RetroRat123"
												required
											/>
										</div>

										<div className="input-container">
											<label htmlFor="Email">Email</label>
											<input
												type="email"
												id="email"
												name="email"
												placeholder="e.g. leeBernersTimCERN@hotmail.com"
												required
											/>
										</div>
									</form>

									<TunePassword />
								</Col>
							</Row>
						) : (
							<div className="sign-up-form">
								<h1>
									SIGN UP FORM GOES HERE UNTIK I MAKE IT A SEPERATE COMPONENT
								</h1>
							</div>
						)}
					</div>

					<div className="login-sign-up-submit-button-container">
						<Row className="login-sign-up-submit-button">
							<Col className="login-submit-button">
								<button>Submit</button>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</>
	);
}
