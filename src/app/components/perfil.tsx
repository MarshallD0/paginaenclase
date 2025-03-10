"use client";
import React, { useState, useEffect } from "react";
import "./perfil.css";
import { Persona } from "../hooks/usePersona";

interface PerfilProps {
  persona: Persona | null;
}

export default function Perfil({ persona }: PerfilProps) {
  const [selectedField, setSelectedField] = useState<string>("Pase el cursor sobre un ícono");
  const [activeIcon, setActiveIcon] = useState<string>("nombre");

  useEffect(() => {
    if (persona) {
      setSelectedField(persona.nombre);
      setActiveIcon("nombre");
    }
  }, [persona]);

  if (!persona) return <div>Esperando...</div>;

  const iconData = [
    { src: "/iconopersona.png", alt: "Nombre", field: "nombre", value: persona.nombre },
    { src: "/correo.png", alt: "Correo", field: "correo", value: persona.correo },
    { src: "/calendario.png", alt: "Cumpleaños", field: "cumpleanos", value: persona.cumpleanos },
    { src: "/ubicacion.png", alt: "Ubicación", field: "ubicacion", value: persona.ubicacion },
    { src: "/telefono.png", alt: "Teléfono", field: "telefono", value: persona.telefono },
    { src: "/candado.png", alt: "Contraseña", field: "contrasena", value: persona.contrasena },
  ];

  return (
    <div className="perfil">
      <img src={persona.foto} alt="Foto de perfil" />
      <div className="info">
        <h1>{selectedField}</h1>
      </div>
      <div className="icons">
        {iconData.map((icon) => (
          <img
            key={icon.field}
            src={icon.src}
            alt={icon.alt}
            onMouseEnter={() => {
              setSelectedField(icon.value);
              setActiveIcon(icon.field);
            }}
            className={`icon ${activeIcon === icon.field ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
