import React from "react";

const GreenButton: React.FC<{ label: string, onClick: () => void, isTransparent?: boolean }> = ({ label, onClick, isTransparent = false }) => {
    if (isTransparent) {
        return (
            <div
                className={"rounded-lg p-3 px-8 bg-transparent text-transparent"}
                onClick={onClick}
            >
                <span className="text-xl">{label}</span>
            </div>
        );
    }

    return (
        <button
            className={"rounded-lg p-3 px-8 bg-LicenciaDarkGreen text-white"}
            onClick={onClick}
        >
            <span className="text-xl">{label}</span>
        </button>
    );
};

export default GreenButton;
