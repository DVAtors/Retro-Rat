import React, { useState }from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../assets/filter.svg';
import FilterArrow from '../assets/filterArrow.svg';
import "./Filter.css";


export default function FilterBar() {

    //to track what wave of buttons we are currently on, this is saved in the state react thingy
    const [currentWave, setCurrentWave] = useState(1); //TELLS REACT TO RERENDER THE COMPONENT WHENEVER THE WAVE NUMBER CHANGES

    const rotationAngle = (currentWave - 1) * 90; //make the filter rotate on click when cycling througbh each wave

    const handleFilterClick = () => {
        //if we're on the final wave 3 loop back to 1, otherwise move on to the next wave (if there is one o7)
        setCurrentWave((prevWave) => (prevWave === 3 ? 1 : prevWave + 1));
    };

    return (
        <>
            <BrowserRouter>
                <Container fluid>
                    <Row className="filter-bar">

                        <Col className="category-block">
                            <img src={Filter} />
                            Category:
                        </Col>

{/* THIS IS THE PART WHERE THE ARROW THINGY ROTATES AND THE DOTS CHANGE COLOURS */}
                        <Col className="filter-buttons-container">

                        
                        <button onClick={handleFilterClick}>
                            <img src={Filter} alt="filter icon" //REMEMBER TO CHANGE THIS TO THE SVG IN FIGMA
                            style={{ transform: `rotate(${rotationAngle}deg)`,
                                    transition: "transform 0.3s ease" 
                                    }} /> 
                            <img src={Filter} /> 
                        </button>

                        <div className="filter-buttons">

                            {/* THE && IS, sorry caps, ck ditional rendering: onlt show the wave that matches our current state >;D */}
                            {currentWave === 1 && (
                                <div className="first-wave">
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
                                <div className="second-wave">
                                
                                <div className="p-3">
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
                                <div className="third-wave">
                                    <div className="p-2">
                                        <button>All</button> {/*dl
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

            </BrowserRouter>

        </>
    );

};