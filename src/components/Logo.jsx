import React from 'react';

export default function Logo() {
  return (
    <img 
      src="/logo.png" 
      alt="Evergreen Civil Consultant Logo" 
      style={{ 
        width: '45px', 
        height: '45px', 
        objectFit: 'contain', 
        borderRadius: '50%',
        backgroundColor: '#ffffff',
        display: 'block'
      }}
    />
  );
}
