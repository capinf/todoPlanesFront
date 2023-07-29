import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'black', padding: '20px', textAlign: 'center' }}>
      <p>
        &copy; {new Date().getFullYear()} TodoPlanes. Todos los derechos reservados.{' '}
        <a href="/terms">Términos y Condiciones</a>
      </p>
    </footer>
  );
};

export default Footer;