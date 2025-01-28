import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; {currentYear} Tech Fusion by <a href="https://www.petaera.com">Petaera Technologies LLP</a>
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#96e3c9', // Match the green color used in the header
    color: '#000', // White text color
    textAlign: 'center',
    padding: '1px 2px',
    position: 'fixed',
    bottom: '10',
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;
