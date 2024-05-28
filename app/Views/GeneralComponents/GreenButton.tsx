import React from "react";

const GreenButton: React.FC<{ label: string, onClick: () => void, isTransparent?: boolean }> = ({ label, onClick, isTransparent = false }) => {
    return (
        <button
            className={`rounded-lg p-3 px-8 ${
                isTransparent ? "bg-transparent text-transparent" : "bg-LicenciaDarkGreen text-white"
            }`}
            onClick={onClick}
        >
            <span className="text-xl">{label}</span>
        </button>
    );
};

export default GreenButton;
