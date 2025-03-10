// pages/page.tsx
'use client';
import React from 'react';
import Perfil from './components/perfil';
import Barrahistorial from './components/barrahistorial';
import { usePersona } from './hooks/usePersona';

export default function Page() {
  const { persona, history, fetchPersona, selectPersona, loading } = usePersona();

  return (
    <div style={{ position: 'relative', display: 'flex', flexDirection: 'row', height: '100vh' }}>
      <Barrahistorial history={history} selectPersona={selectPersona} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
         <h1 style={{ fontSize: '2rem', marginBottom: '10px', color: 'white' }}>Generador de personas aleatorio</h1>
        {loading ? <div>Cargando...</div> : <Perfil persona={persona} />}
      </div>
      <button 
        style={{ position: 'absolute', top: 20, right: 20, padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#4A90E2', color: 'white', cursor: 'pointer' }}
        onClick={fetchPersona}
        disabled={loading}
      >
        Nueva Persona
      </button>
    </div>
  );
}
