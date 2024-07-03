import React from 'react';

const Sidebar: React.FC = () => {
    return (
        <div className="bg-gray-200 w-64 min-h-screen p-4">
            <ul>
                <li className="mb-4"><a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 1</a></li>
                <li className="mb-4"><a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 2</a></li>
                <li className="mb-4"><a href="#" className="text-gray-700 hover:text-gray-900">Menu Item 3</a></li>
            </ul>
        </div>
    );
};

export default Sidebar;
