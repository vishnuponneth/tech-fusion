import React from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {

  const navigate = useNavigate();
  return (
    <div style={styles.container}>
      <h1>Tech Fusion</h1>
      <h2>Fill the form and we will get Back to you soon</h2>
      <button id="myButton" onClick={()=>navigate("https://forms.gle/B4ApbWvVZ7BndnMB7")}>form</button><br/>
      <h3>Contact Us :</h3>
      <h4>Email:Techfusioneducation.info@gmail.com<br/>Whatsapp:+91 7012422309</h4>
      {/* Add your contact information here */}
    </div>
  );
};
const styles = {
  container: {
    padding: '20px',
  },
};

export default ContactUs;
