import React from 'react';

const ContactUs = () => {
  return (
    <div style={styles.container}>
      <h1>Tech Fusion</h1>
      <h2>Fill the form and we will get Back to you soon</h2>
      <button id="myButton">form</button><br/>
      <h3>Contact Us :</h3>
      <h4>Email:Techfusioneducation.info@gmail.com<br/>Whatsapp:+91 7012422309</h4>
      {/* Add your contact information here */}
    </div>
  );
};
document.getElementById("myButton").onclick = function () {
  window.location.href = "https://forms.gle/B4ApbWvVZ7BndnMB7"; // Link to the URL
};
const styles = {
  container: {
    padding: '20px',
  },
};

export default ContactUs;
