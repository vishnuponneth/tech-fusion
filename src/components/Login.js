import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup } from "firebase/auth";
import { useUser } from '../UserContext';

const Login = () => {

  const { user } = useUser();
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      console.log('User info:', result.user);
    } catch (error) {
      console.error('Error during sign-in:', error);
    }
  };

  if(user)
    navigate("/home");
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.title}>Login</h1>
        <button style={styles.gLoginButton} onClick={handleGoogleLogin}>
          Login with Gmail
        </button>
        <div style={styles.help}>
          <p style={styles.helpText}>Need help?</p>
          <Link to="/contact-us" style={styles.helpLink}>Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f0f0f0', // Light gray background
  },
  box: {
    backgroundColor: '#fff', // White background for the box
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    width: '300px',
    textAlign: 'center',
  },
  title: {
    color: '#000', // Title color matching the green theme
    marginBottom: '20px',
  },
  gLoginButton: {
    backgroundColor: '#4285F4', // Gmail button color
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '20px',
    transition: 'background-color 0.3s ease',
  },
  gLoginButtonHover: {
    backgroundColor: '#357AE8', // Darker shade on hover
  },
  help: {
    marginTop: '10px',
  },
  helpText: {
    fontSize: '14px',
    color: '#555', // Dark gray for help text
  },
  helpLink: {
    display: 'block',
    marginTop: '5px',
    textDecoration: 'none',
    color: '#307D7E', // Link color matching the green theme
  },
};

export default Login;
