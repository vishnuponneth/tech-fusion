import React, { useState, useEffect } from 'react';
import './Internship.css'; // Import CSS for additional styling

const Internship = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = ['https://picsum.photos/id/237/400/300', 'https://picsum.photos/id/238/400/300', 'https://picsum.photos/id/239/400/300'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div style={styles.container}>
      <div style={styles.slider}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Internship ${index}`}
            style={{
              ...styles.image,
              opacity: index === currentIndex ? 1 : 0
            }}
          />
        ))}
      </div>
     
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  slider: {
    position: 'relative',
    width: '80%', // Adjust as needed
    height: '60%', // Adjust as needed
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'opacity 1s ease-in-out',
  },
 
};

export default Internship;
