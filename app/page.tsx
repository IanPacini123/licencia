"use client";

import '../app/globals.css';

import React from 'react';
import Login from './login/page';

const Header: React.FC = () => {
    return (
        <header className="bg-LicenciaDarkGreen h-20 flex items-center justify-between px-8">
            <div className='flex items-end'>
            <h1 className="text-white text-4xl font-bold">LicencIA</h1>
            <h1 className="text-white text-md font-bold ml-4">Prefeitura de lugar nenhum</h1>
            </div>

            <text className='font-bold text-sm'>Sou colaborador</text>
        </header>
    );
};

// App.tsx
const App: React.FC = () => {
    return (
        <div className="bg-LicenciaLightGreen h-screen">
            <Header />
            <div className="flex items-center justify-center">
                <Login />
            </div>
        </div>
    );
};

export default App;

