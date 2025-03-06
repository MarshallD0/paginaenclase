'use client';
import React from 'react';
import Perfil from './components/perfil';
import Barrahistorial from './components/barrahistorial';

export default function Page() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
    }}>
      <h1 style={{ 
      fontSize: '3rem', 
      marginBottom: '20px', 
      color: 'gray' 
      }}>Bienvenido</h1>
      <Perfil></Perfil>
      <Barrahistorial history={[]}></Barrahistorial>
    </div>
  );
}