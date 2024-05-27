"use client";

import React from "react";
import UserRegistrationView from "../Views/UserRegistration/UserRegistrationView";

const Header: React.FC = () => {
    return (
        <header className="bg-LicenciaDarkGreen h-20 flex items-center justify-between px-8">
            <div className='flex items-end'>
            <h1 className="text-white text-4xl font-bold">LicencIA</h1>
            <h1 className="text-white text-md font-bold ml-4">Prefeitura de lugar nenhum</h1>
            </div>
        </header>
    );
};

const Registration: React.FC = () => {
    return (
        <div className="bg-LicenciaLightGreen h-screen">
            <Header />
            <div className="flex items-center justify-center">
            <UserRegistrationView />
            </div>
        </div>
    );
};

export default Registration;
