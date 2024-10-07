import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OurTeam from './OurTeam'; // Import the OurTeam component
import './Header.css'; // Import CSS for additional styling
import { useUser } from '../UserContext';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTeam, setShowTeam] = useState(false);
  const { user } = useUser();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTeam = () => {
    setShowTeam(!showTeam);
  };

  return (
    <>
      {showTeam && <OurTeam />}
      <header style={styles.header}>
        <div style={styles.strip}></div>
        <button style={styles.menuButton} onClick={toggleMenu}>
          <div style={styles.menuIcon}></div>
          <div style={styles.menuIcon}></div>
          <div style={styles.menuIcon}></div>
        </button>
        <button style={styles.teamButton} onClick={toggleTeam}>
          Our Team
        </button>
      </header>
      <div style={{ ...styles.menu, transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        <ul style={styles.menuList}>
          {!user && <li style={styles.menuItem}><Link to="/login" onClick={toggleMenu} style={styles.link}>Login</Link></li>}
          <li style={styles.menuItem}><Link to="/internships" onClick={toggleMenu} style={styles.link}>Internships</Link></li>
          <li style={styles.menuItem}><Link to="/academic-tutoring" onClick={toggleMenu} style={styles.link}>Academic Tutoring</Link></li>
          <li style={styles.menuItem}><Link to="/contact-us" onClick={toggleMenu} style={styles.link}>Contact Us</Link></li>
          <li style={styles.menuItem}><Link to="/about" onClick={toggleMenu} style={styles.link}>About</Link></li>
        </ul>
      </div>
    </>
  );
};

const styles = {
  header: {
    backgroundColor: '#3bc999', // Updated green color
    color: '#fff', // White text color
    padding: '10px 20px',
    display: 'flex',
    flexDirection: 'column', // Stack strip and logoPlaceholder vertically
    alignItems: 'center',
    justifyContent: 'center',
    height: '70px', // Increased height to accommodate the strip
    position: 'relative', // Required for positioning the strip
  },
  strip: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '10px', // Height of the light green strip
    backgroundColor: '#3bc999', // Light green color for the strip
  },
  menuButton: {
    position: 'absolute',
    left: '10px',
    top: '30px', // Adjusted for visual balance
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    zIndex: 2, // Ensure button is above the menu
  },
  menuIcon: {
    width: '30px',
    height: '3px',
    backgroundColor: '#fff', // White color for the menu bars
    margin: '5px 0',
  },
  teamButton: {
    position: 'absolute',
    top: '30px', // Adjusted for visual balance
    right: '10px', // Positioned to the right
    background: 'transparent',
    border: 'none',
    color: '#fff', // White color for the button
    fontSize: '24px',
    cursor: 'pointer',
    zIndex: 2, // Ensure button is above the menu
  },
  menu: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '250px',
    height: '100%',
    backgroundColor: '#3bc999', // Updated green color for the menu
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '60px', // Space from the top
    boxShadow: '2px 0 5px rgba(0,0,0,0.3)',
    transform: 'translateX(-100%)', // Initially hidden off-screen
    transition: 'transform 0.3s ease', // Smooth transition
    zIndex: 1, // Ensure menu is below the button
  },
  menuList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    width: '100%',
    textAlign: 'center',
  },
  menuItem: {
    padding: '15px 0',
    borderBottom: '1px solid #fff',
    width: '100%',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: '#fff', // White color for links
  },
};

export default Header;
