import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <p>© {currentYear} Evergreen Civil Consultant. All Rights Reserved.</p>
        <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: 0.5 }}>
          Engineering Excellence • Structural Innovation
        </p>
      </div>
    </footer>
  );
}
