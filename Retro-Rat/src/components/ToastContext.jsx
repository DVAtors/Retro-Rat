// ToastContext.jsx
import React, { createContext, useContext, useState } from "react";

// import RetroToast from "../components/RetroToast";
import ErrorToast from "./ErrorToast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
    const [activeToast, setActiveToast] = useState(null); // hold { type, message }

    const showRetroToast = (message) => {
        setActiveToast({ type: "retro", message });
        setTimeout(() => setActiveToast(null), 3000); // Auto-hide after 3s
    };

    const showErrorToast = (message) => {
        setActiveToast({ type: "error", message });
        setTimeout(() => setActiveToast(null), 4000); // Errors get an extra second to read!
    };

    return (
        <ToastContext.Provider value={{ showRetroToast, showErrorToast }}>
            {children}

            {/* Render the specific component based on the active type */}
            {activeToast && activeToast.type === "retro" && (
                <div className="toast-fixed-wrapper">
                    {/* <RetroToast message={activeToast.message} /> */}
                    <div className="mock-retro-toast">✨ {activeToast.message}</div>
                </div>
            )}

            {activeToast && activeToast.type === "error" && (
                <div className="toast-fixed-wrapper">
                    <ErrorToast message={activeToast.message} />
                    <div className="mock-error-toast">❌ ERROR: {activeToast.message}</div>
                </div>
            )}
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);