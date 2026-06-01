import React from "react";
import { useNavigate } from "react-router-dom";
import "./RetroToast.css";

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
                            <svg viewBox="0 0 16 16" width="60" height="60" shapeRendering="crispEdges" xmlns="http://www.w3.org/2000/svg">
                                {/* Black outline */}
                                <path fill="#000000" d="M5 1h6v1h2v2h1v6h-1v2h-2v1H5v-1H3v-2H2V4h1V2h2V1z" />
                                {/* Red background */}
                                <path fill="#F23030" d="M5 2h6v1h2v2h1v6h-1v2h-2v1H5v-1H3v-2H2V5h1V3h2V2z" />
                                {/* White X */}
                                <path fill="#FFFFFF" d="M4 4h2v2h4V4h2v2h-2v2h-2v2h2v2h-2v-2H8v2H6v-2h2v-2H6V8H4V6h2V4z" />
                            </svg>
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