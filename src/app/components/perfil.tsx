"use client";
import React, { useState, useEffect } from "react";
import "./perfil.css";

interface Persona {
  foto: string;
  nombre: string;
  correo: string;
  cumpleanos: string;
  ubicacion: string;
  telefono: string;
  contrasena: string;
}

export default function Perfil() {
  const [persona, setPersona] = useState<Persona | null>(null);
  const [selectedField, setSelectedField] = useState<string>("Pase el cursor sobre un ícono");

  const fetchPersona = async () => {
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const newPersona = {
      foto: data.results[0].picture.large,
      nombre: `${data.results[0].name.first} ${data.results[0].name.last}`,
      correo: data.results[0].email,
      cumpleanos: new Date(data.results[0].dob.date).toLocaleDateString(),
      ubicacion: `${data.results[0].location.city}, ${data.results[0].location.country}`,
      telefono: data.results[0].phone,
      contrasena: data.results[0].login.password,
    };
    setPersona(newPersona);
  };

  useEffect(() => {
    fetchPersona();
  }, []);

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
