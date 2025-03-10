// hooks/usePersona.ts
import { useState, useEffect } from "react";

export interface Persona {
  foto: string;
  nombre: string;
  correo: string;
  cumpleanos: string;
  ubicacion: string;
  telefono: string;
  contrasena: string;
}

export function usePersona() {
  const [persona, setPersona] = useState<Persona | null>(null);
  const [history, setHistory] = useState<Persona[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPersona = async () => {
    setLoading(true);
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    const newPersona: Persona = {
      foto: data.results[0].picture.large,
      nombre: `${data.results[0].name.first} ${data.results[0].name.last}`,
      correo: data.results[0].email,
      cumpleanos: new Date(data.results[0].dob.date).toLocaleDateString(),
      ubicacion: `${data.results[0].location.city}, ${data.results[0].location.country}`,
      telefono: data.results[0].phone,
      contrasena: data.results[0].login.password,
    };
    setPersona(newPersona);
    setHistory((prev) => [...prev, newPersona]);
    setLoading(false);
  };

  // Al montar, se carga el primer perfil.
  useEffect(() => {
    fetchPersona();
  }, []);

  // Permite seleccionar un perfil del historial.
  const selectPersona = (selected: Persona) => {
    setPersona(selected);
  };

  return { persona, history, fetchPersona, selectPersona, loading };
}
