// Header.tsx
import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-licenciaDarkGreen h-20 flex items-center justify-between px-8">
            <h1 className="text-white text-4xl font-bold">LicencIA</h1>
            <h1 className='text-white text-2x1 font bold'>Teste</h1>
            <h1 className='text-white text-2x1 font bold'>Teste2</h1>
        </header>
    );
};

// App.tsx
const App: React.FC = () => {
    return (
        <div>
            <Header />
            <div className="container mx-auto mt-8">
                <p>This is the content of your website...</p>
            </div>
        </div>
    );
};

export default App;

