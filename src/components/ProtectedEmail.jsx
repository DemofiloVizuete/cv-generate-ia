import React from 'react';

const ProtectedEmail = ({ email, className = "" }) => {
  // Codificar/decodificar en memoria para evitar HTML crudo en el DOM
  const encodedCharCodes = email.split('').map((char) => char.charCodeAt(0));
  const decodedEmail = encodedCharCodes.map((code) => String.fromCharCode(code)).join('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${decodedEmail}`;
  };

  return (
    <button
      type="button"
      className={`cursor-pointer hover:underline ${className}`}
      onClick={handleEmailClick}
      title="Hacer clic para enviar email"
    >
      {decodedEmail}
    </button>
  );
};

export default ProtectedEmail;
