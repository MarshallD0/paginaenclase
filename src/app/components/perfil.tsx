"use client";
import React, { useState, useEffect } from "react";
import "./perfil.css";
import { Persona } from "../hooks/usePersona";

interface PerfilProps {
  persona: Persona | null;
}

export default function Perfil({ persona }: PerfilProps) {
  const [selectedField, setSelectedField] = useState<string>("Pase el cursor sobre un ícono");

  useEffect(() => {
    if (persona) {
      setSelectedField(persona.nombre);
    }
  }, [persona]);

  if (!persona) return <div>Esperando...</div>;

  return (
    <div className="perfil">
      <img src={persona.foto} alt="Foto de perfil" />
      <div className="info">
        <h1>{selectedField}</h1>
      </div>
      <div className="icons">
        <img src="/iconopersona.png" alt="Nombre" onMouseEnter={() => setSelectedField(persona.nombre)} />
        <img src="/correo.png" alt="Correo" onMouseEnter={() => setSelectedField(persona.correo)} />
        <img src="/calendario.png" alt="Cumpleaños" onMouseEnter={() => setSelectedField(persona.cumpleanos)} />
        <img src="/ubicacion.png" alt="Ubicación" onMouseEnter={() => setSelectedField(persona.ubicacion)} />
        <img src="/telefono.png" alt="Teléfono" onMouseEnter={() => setSelectedField(persona.telefono)} />
        <img src="/candado.png" alt="Contraseña" onMouseEnter={() => setSelectedField(persona.contrasena)} />
      </div>
    </div>
  );
}
