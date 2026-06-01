import React from "react";
import { useNavigate } from "react-router-dom";
import "./RetroToast.css";
import ErrorIcon from "../assets/errorIcon.svg";
export default function RetroToast({ isOpen, onClose, message }) {
    const navigate = useNavigate();

    // If the toast isn't open, render absolute nothingness
    if (!isOpen) return null;

    const handleLoginClick = () => {
        onClose(); // Nuke the toast first
        navigate("/login"); // Beam them to the login screen
    };

    return (
        <div className="retro-toast-overlay">
            <div className="retro-toast-window">
                
                {/* THE PIXELATED DITHER HEADER */}
                <div className="retro-title-bar">
                    <div className="retro-title-text">Error &gt;:(</div>
                    <button className="retro-close-x" onClick={onClose}>
                        {/* Tiny CSS-drawn window close button */}
                        <div className="x-mark">✖</div>
                    </button>
                </div>

                {/* THE MEAT OF THE TOAST */}
                <div className="retro-window-body">
                    <div className="retro-content">
                        
                        {/* PURE INLINE SVG PIXEL ART. NO IMAGE IMPORTS NEEDED. */}
                        <div className="retro-icon">
                            <img src={ErrorIcon} alt="error icon" />
                        </div>

                        <div className="retro-message-text">
                            {message || "Critical error message. Please authenticate to continue."}
                        </div>
                    </div>

                    {/* THE WIN95 CHUNKY BUTTONS */}
                    <div className="retro-actions">
                        <button className="win95-btn" onClick={handleLoginClick}>
                            Login
                        </button>
                        <button className="win95-btn" onClick={onClose}>
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}