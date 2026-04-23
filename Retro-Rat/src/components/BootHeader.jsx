import React from "react";
import ratImg from '../assets/bootRat2.png';
import "./BootHeader.css";

export default function BootHeader(){
    return(
        <>
        <header className="boot-header">
        <div className="boot-bars">
          <p>-------------------------------------</p>
          <p>-------------------------------------</p>
        </div>
        
        <div className="boot-header-text">
          <div className="boot-logo-row">
            <div className="boot-rat-wrapper">
              <img src={ratImg} alt="RAT" className="boot-rat" />
            </div>
            <div className="boot-titles">
              <p className="boot-title">RATTR0 OS</p>
              <p className="boot-version">v10.3.1</p>
              <p className="boot-tagline">"Old tech, New Hands"</p>
            </div>
          </div>
        </div>
        
        <div className="boot-bars">
          <p>-------------------------------------</p>
          <p>-------------------------------------</p>
        </div>
        </header>
        </>
    )
}
