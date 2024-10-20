import React from 'react';

const About = () => {

  return (
    <div style={styles.container}>
      <h1>Tech Fusion</h1>
      <h2>Fill the form and we will get Back to you soon</h2>
      <a style={styles.formLink} id="myButton" target='_blank' href='https://forms.gle/B4ApbWvVZ7BndnMB7'>form</a><br />
      <h3>Contact Us :</h3>
      <h4>Email:Techfusioneducation.info@gmail.com<br />Whatsapp:+91 7012422309</h4>
      {/* Add your contact information here */}
    </div>
  );
};

const styles = {
  container: {
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  formLink:{
    fontSize:"18px",
  }
};

export default About;
