import React, { useState } from 'react';

export default function App() {
  const [name, setName] = useState('');
  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Mecanografía Lopez Andres - EduNotas</h1>
      <input
        className="border p-2 w-full mb-4"
        placeholder="Nombre completo"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hola, {name || 'invitado'}</p>
    </div>
  );
}