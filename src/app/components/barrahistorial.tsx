// components/Barrahistorial.tsx
'use client';
import React from 'react';
import { Persona } from '../hooks/usePersona';

interface BarrahistorialProps {
  history: Persona[];
  selectPersona: (persona: Persona) => void;
}

const Barrahistorial = ({ history, selectPersona }: BarrahistorialProps) => {
    return (
        <div className="w-1/4 h-screen bg-gray-900 p-4 overflow-y-auto border-r border-gray-700 fixed left-0 top-0">
            {history.map((person, index) => (
                <div 
                    key={index} 
                    onClick={() => selectPersona(person)}
                    className="flex items-center p-2 mb-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg cursor-pointer"
                >
                    <img src={person.foto} alt={person.nombre} className="w-12 h-12 rounded-full mr-3 border border-gray-600" />
                    <p className="text-white text-sm">{person.nombre}</p>
                </div>
            ))}
        </div>
    );
};

export default Barrahistorial;
