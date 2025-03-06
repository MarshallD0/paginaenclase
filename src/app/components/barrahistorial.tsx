'use client';
import React from 'react';

interface Person {
    picture: string;
    name: string;
}

const Barrahistorial = ({ history }: { history: Person[] }) => {
    return (
        <div className="w-1/4 h-screen bg-gray-900 p-4 overflow-y-auto border-r border-gray-700 fixed left-0 top-0">
            <h2 className="text-white text-xl mb-4">Historial</h2>
            {history.map((person, index) => (
                <div 
                    key={index} 
                    className="flex items-center p-2 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <img src={person.picture} alt={person.name} className="w-12 h-12 rounded-full mr-3 border border-gray-600" />
                    <p className="text-white text-sm">{person.name}</p>
                </div>
            ))}
        </div>
    );
};

export default Barrahistorial;
