import React from 'react';

const ProtectedEmail = ({ email, className = "" }) => {
  // Codificar/decodificar en memoria para evitar HTML crudo en el DOM
  const encodedCharCodes = email.split('').map((char) => char.charCodeAt(0));
  const visibleEmail = encodedCharCodes.map((code) => String.fromCharCode(code)).join('');

  return (
    <a
      href={`mailto:${visibleEmail}`}
      className={`cursor-pointer hover:underline ${className}`}
      title="Hacer clic para enviar email"
      aria-label="Enviar email de contacto"
    >
      {visibleEmail}
    </a>
  );
};

export default ProtectedEmail;
