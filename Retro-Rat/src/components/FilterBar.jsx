import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Filter from "../assets/filter.svg";
import FilterArrow from "../assets/filterArrow.svg";
import "./FilterBar.css";

export default function FilterBar() {
	//to track what wave of buttons we are currently on, this is saved in the state react thingy
	const [currentWave, setCurrentWave] = useState(1); //TELLS REACT TO RERENDER THE COMPONENT WHENEVER THE WAVE NUMBER CHANGES

	const rotationAngle = (currentWave - 1) * 90; //make the filter rotate on click when cycling througbh each wave

	const handleFilterClick = () => {
		//if we're on the final wave 3 loop back to 1, otherwise move on to the next wave (if there is one o7)
		setCurrentWave((prevWave) => (prevWave === 3 ? 1 : prevWave + 1));
	};

	const totalWaves = [1, 2, 3];

	// OH MY DUCKING GAWD I HAVE TO DO A WHOLE USE STATE THING JUST TO CHANGE THE FCKN COLOURS OF A BUTTON LIKE I HATE THIS STUPID PIECE OF AHHHHEIBUWRHVBUREBVUGRBVUHIWVBHWEJHVBUIRVBUIHWEV ANYWAY, I'LL DO THIS BYYY THE END OF TOMORROR o7

	return (
		<>
			{/* <BrowserRouter> */}
			<Container fluid>
				<Row className="filter-bar">
					<Col className="category-block">
						<img className="category-icon" src={Filter} alt="Category Fcon" />
						Category:
					</Col>

					{/* THIS IS THE PART WHERE THE ARROW THINGY ROTATES AND THE DOTS CHANGE COLOURS */}
					<Col className="filter-buttons-container">
						<button className="filter-button" onClick={handleFilterClick}>
							<img
								className="filter-icon"
								src={FilterArrow}
								alt="Filter Icon" //REMEMBER TO CHANGE THIS TO THE SVG IN FIGMA
								style={{
									transform: `rotate(${rotationAngle}deg)`,
									transition: "transform 0.3s ease",
								}}
							/>

							<div className="filter-icon-dots">
								{totalWaves.map(
									(
										dotNum, //not copy pasting this 3 times, just using map to loop through the total waves and creates a dot for each one
									) => (
										<svg
											key={dotNum} //react needs unique keys when mapping over arrays
											xmlns="http://www.w3.org/2000/svg"
											width="8"
											height="8"
											viewBox="0 0 8 8"
											fill="none">
											<circle
												cx="4"
												cy="4"
												r="4"
												// CURRENT WAVE MATCHES THE DOT NUMBER, MAKE IT THE ACTIVE COLOUR >:D
												fill={
													currentWave === dotNum
														? "#0B8C8C"
														: "rgba(0, 0, 0, 0.50)"
												}
												style={{ transition: "fill 0.3s ease" }}
											/>
										</svg>
									),
								)}
							</div>
						</button>

						<div className="filter-buttons">
							{/* THE && IS, sorry caps, ck ditional rendering: onlt show the wave that matches our current state >;D */}
							{currentWave === 1 && (
								<div className="wave first-wave">
									<div className="p-2">
										<button>All</button>
									</div>

									<div className="p-2">
										<button>Computers</button>
									</div>

									<div className="p-2">
										<button>Gaming</button>
									</div>

									<div className="p-2">
										<button>Audio</button>
									</div>

									<div className="p-2">
										<button>Mobile</button>
									</div>

									<div className="p-2">
										<button>Video</button>
									</div>

									<div className="p-2">
										<button>Cameras</button>
									</div>
								</div>
							)}

							{currentWave === 2 && (
								<div className="wave second-wave">
									<div className="p-2 all">
										<button> All</button>
									</div>

									<div className="p-2">
										<button>2000s</button>
									</div>

									<div className="p-2">
										<button>1990s</button>
									</div>

									<div className="p-2">
										<button>1980s</button>
									</div>

									<div className="p-2">
										<button>1970s</button>
									</div>
								</div>
							)}

							{currentWave === 3 && (
								<div className="wave third-wave">
									<div className="p-2">
										<button>All</button>{" "}
										{/*dl
                                        o the onlick change to active colour css*/}
									</div>

									<div className="p-2">
										<button>Excellent</button>
									</div>

									<div className="p-2">
										<button>Great</button>
									</div>

									<div className="p-2">
										<button>Moderate</button>
									</div>

									<div className="p-2">
										<button>Low</button>
									</div>

									<div className="p-2">
										<button>Poor</button>
									</div>
								</div>
							)}
						</div>
					</Col>
				</Row>
			</Container>

			{/* </BrowserRouter> */}
		</>
	);
}
