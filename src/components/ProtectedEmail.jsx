import React from 'react';

const ProtectedEmail = ({ email, className = "" }) => {
  // Codificar el email para protegerlo de bots
  const encodedEmail = email.split('').map((char, index) => {
    return `&#${char.charCodeAt(0)};`;
  }).join('');

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Decodificar y abrir el cliente de correo
    const decodedEmail = email;
    window.location.href = `mailto:${decodedEmail}`;
  };

  return (
    <span 
      className={`cursor-pointer hover:underline ${className}`}
      onClick={handleEmailClick}
      dangerouslySetInnerHTML={{ __html: encodedEmail }}
      title="Hacer clic para enviar email"
    />
  );
};

export default ProtectedEmail;
