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

    const showErrorToast = (message, action = null) => {
        // Save both the message and the action button info into state
        setActiveToast({ type: "error", message, action });

        // If there is NO custom button, auto-hide it after 4 seconds.
        // If there IS a custom button, let it stay on screen until they click it!
        if (!action) {
            setTimeout(() => setActiveToast(null), 4000);
        }
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
                    <ErrorToast
                        isOpen={true}
                        onClose={() => setActiveToast(null)}
                        message={activeToast.message}
                        action={activeToast.action} // <-- Pass the action down!
                    />
                </div>
            )}
        </ToastContext.Provider>
    );
}

export const useToast = () => useContext(ToastContext);