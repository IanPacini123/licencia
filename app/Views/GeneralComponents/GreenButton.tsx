import React from "react";

const GreenButton: React.FC<{ label: String, onClick: ()=> void }> = ({label, onClick}) => {
    return (
        <button className="bg-LicenciaDarkGreen rounded-lg p-3 px-8"
                onClick={onClick}>
            <text className="text-xl">{label}</text>
        </button>
    );
};

export default GreenButton;