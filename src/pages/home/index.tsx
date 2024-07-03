import React from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import LastReadBooks from '../../components/lastReadBooks';
import "../../app/globals.css";

const Home: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <main className="flex-1 p-4 bg-gray-50">
                    <LastReadBooks />
                </main>
            </div>
        </div>
    );
};

export default Home;
