import React, { useState, useEffect } from "react"; // IMPORTED EFFECT BECAUSE THE BACKEND BOYS NEED THEIR PAYLOADS o7
import { Container, Row, Col } from 'react-bootstrap';
import Filter from '../assets/filter.svg';
import FilterArrow from '../assets/filterArrow.svg';
import "./FilterBar.css";

// ADDED 'onFilterChange' PROP SO THE PARENT COMPONENT CAN SUCK UP THE FILTER DATA
export default function FilterBar({ onFilterChange }) {
    // TRACKING THE WAVE. REACT RERENDERS BECAUSE IT LIVES TO SERVE. o7
    const [currentWave, setCurrentWave] = useState(1);
    
    // UPDATE: NOW IT'S AN ARRAY BECAUSE USERS WANT TO SELECT EVERYTHING AT THE SAME TIME O_o 
    // WELCOME TO ARRAY METHOD HELL, POPULATION: US
    const [activeFilters, setActiveFilters] = useState([]); 

    const rotationAngle = (currentWave - 1) * 90; 

    // ========================================================================
    // ATTENTION BACKEND TEAM!!! LISTEN UP BOYS!!! o7
    // I decided to be a nice little angel <33 teehee :P so here is exactly how
    // you call this component in the parent file (like Marketplace.jsx or App.jsx):
    //
    // <FilterBar onFilterChange={(selectedTags) => {
    //     console.log("Look at these juicy tags for the DB query:", selectedTags);
    //     // Trigger your API fetch or item-filtering logic here!
    // }} />
    //
    // This useEffect fires EVERY TIME a user toggles a tag on or off.
    // It pipes the state array straight to the parent component via onFilterChange().
    //
    // DATA SHAPE EXAMPLE:
    // User clicks "GAMING", "1990S", and "GREAT" -> Payload: ['GAMING', '1990S', 'GREAT']
    // If they click nothing or uncheck everything -> Payload: [] (Empty array)
    // Map these bad boys directly to your database object product tags/categories!
    // ========================================================================
    useEffect(() => {
        if (typeof onFilterChange === "function") {
            onFilterChange(activeFilters);
        }
    }, [activeFilters, onFilterChange]);

    const handleFilterClick = () => {
        // IF WE HIT WAVE 3, BACK TO 1. CIRCLE OF LIFE. OR JUST BAD UI. IDK. 
        setCurrentWave((prevWave) => (prevWave === 3 ? 1 : prevWave + 1));
    };

    // TRANSLATING NUMBERS TO WORDS SO THE CSS DOESN'T CRY AND IGNORE US
    const waveNames = {
        1: "first-wave",
        2: "second-wave",
        3: "third-wave"
    };

    // OH MY DUCKING GAWD I HAVE TO DO A WHOLE USE STATE THING JUST TO CHANGE THE FCKN COLOURS OF A BUTTON 
    // LIKE I HATE THIS STUPID PIECE OF AHHHHEIBUWRHVBUREBVUGRBVUHIWVBHWEJHVBUIRVBUIHWEV 
    // ANYWAY, I'LL DO THIS BYYY THE END OF TOMORROR o7
    const wave3Colors = {
        "ALL": "#4A9090", "EXCELLENT": "#4A9090", "GREAT": "#42823E",
        "MODERATE": "#F4D03F", "LOW": "#C6934B", "POOR": "#C24932"
    };

    const waveConfigs = {
        1: ["ALL", "COMPUTERS", "GAMING", "AUDIO", "MOBILE", "VIDEO", "CAMERAS"],
        2: ["ALL", "2000S", "1990S", "1980S", "1970S"],
        3: ["ALL", "EXCELLENT", "GREAT", "MODERATE", "LOW", "POOR"]
    };

    // THE TOGGLE MONSTER: IF THE FILTER IS ALREADY SELECTED, FILTER IT OUT. 
    // IF NOT, SQUISH IT INTO THE ARRAY WITH THE SPREAD OPERATOR. BLISS.
    const toggleFilter = (category) => {
        setActiveFilters((prevFilters) =>
            prevFilters.includes(category)
                ? prevFilters.filter((item) => item !== category)
                : [...prevFilters, category]
        );
    };

    // NOT COPY PASTING THIS 3 TIMES, JUST USING MAP TO LOOP THROUGH THE TOTAL WAVES 
    // AND CREATES A DOT FOR EACH ONE. WORK SMARTER NOT HARDER >:D
    const renderButtons = (waveNum) => {
        return waveConfigs[waveNum].map((category) => {
            // IS THIS SPECIFIC BUTTON IN OUR ARRAY OF CURRENTLY SELECTED NIGHTMARES?
            const isActive = activeFilters.includes(category);

            return (
                <div 
                    className="p-2" 
                    key={category}
                    // MOVED THE STYLE UP HERE SO THE RAINBOW BG FILLS THE ENTIRE RETRO FIGMA BOX!!! >:D
                    style={currentWave === 3 && isActive ? { backgroundColor: wave3Colors[category] } : {}}
                >
                    <button
                        className={isActive ? "active-btn" : ""}
                        onClick={() => toggleFilter(category)}
                    >
                        {category}
                    </button>
                </div>
            );
        });
    };

    return (
        <Container fluid>
            <Row className="filter-bar">
                <Col className="category-block">
                    <img className="category-icon" src={Filter} alt="Category Icon" />
                    Category:
                </Col>

                {/* THIS IS THE PART WHERE THE ARROW THINGY ROTATES AND THE DOTS CHANGE COLOURS */}
                <Col className="filter-buttons-container">
                    <button className="filter-button" onClick={handleFilterClick}>
                        <img className="filter-icon" src={FilterArrow} alt="Filter Icon" 
                            style={{ transform: `rotate(${rotationAngle}deg)`, transition: "transform 0.3s ease" }} />

                        <div className="filter-icon-dots">
                            {[1, 2, 3].map((dotNum) => (
                                <svg key={dotNum} width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" 
                                        fill={currentWave === dotNum ? "#0B8C8C" : "rgba(0, 0, 0, 0.50)"} 
                                        style={{ transition: "fill 0.3s ease" }}/>
                                </svg>
                            ))}
                        </div>
                    </button>

                    <div className="filter-buttons">
                        {/* THE && IS CONDITIONAL RENDERING: ONLY SHOW THE WAVE THAT MATCHES OUR CURRENT STATE >;D */}
                        {/* FIXED: Using waveNames[currentWave] so it properly outputs 'first-wave', 'second-wave', etc. */}
                        <div className={`wave ${waveNames[currentWave]}`}>
                            {renderButtons(currentWave)}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}