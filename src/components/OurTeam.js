import React from 'react';
import './OurTeam.css'; // Import CSS for additional styling

const profiles = [
  { name: 'Alice', description: 'Front-End Developer', image: 'https://picsum.photos/id/1011/100/100' },
  { name: 'Bob', description: 'Back-End Developer', image: 'https://picsum.photos/id/1012/100/100' },
  { name: 'Charlie', description: 'Designer', image: 'https://picsum.photos/id/1013/100/100' },
  { name: 'Dave', description: 'Project Manager', image: 'https://picsum.photos/id/1014/100/100' },
  { name: 'Eve', description: 'Quality Analyst', image: 'https://picsum.photos/id/1015/100/100' }
];

const OurTeam = () => (
  <div style={styles.container}>
    {profiles.map((profile, index) => (
      <div key={index} style={styles.profile}>
        <img src={profile.image} alt={profile.name} style={styles.image} />
        <div style={styles.text}>
          <h3 style={styles.name}>{profile.name}</h3>
          <p style={styles.description}>{profile.description}</p>
        </div>
      </div>
    ))}
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '10px',
    width: '300px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)'
  },
  profile: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
    width: '100%'
  },
  image: {
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    marginRight: '10px',
    objectFit: 'cover'
  },
  text: {
    display: 'flex',
    flexDirection: 'column'
  },
  name: {
    margin: 0,
    fontSize: '16px',
    fontWeight: 'bold'
  },
  description: {
    margin: 0,
    fontSize: '14px'
  }
};

export default OurTeam;
