import React from 'react';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-shrink-0 text-white">
                        <h1>Biblioteca</h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
