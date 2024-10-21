import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ContactUs.css";

const ContactUs = () => {

  const navigate = useNavigate();
  return (
    <div class="container contact-us">
      <h1>Help & Support</h1>

      <div class="contact-info">
        <h2>Contact Us</h2>
        <p>If you need any help, feel free to reach out to us through the following details:</p>
        <p><strong>Email:</strong> <a href="mailto:Techfusioneducation.info@gmail.com"> Techfusioneducation.info@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 7012422309</p>
      </div>

      <div class="form-link">
        <h2>Submit a Request</h2>
        <p>Fill out the form with your inquiry and we will get back to you soon !</p>
        <a href="https://forms.gle/FHEgWy1xHYSwhJwB8" target="_blank">Go to Google Form</a>
      </div>

      <div class="social-media">
        <h2>Connect with Us on Social Media</h2>
        <p>Stay connected with us through our social media platforms:</p>
        <a href="https://wa.me/917012422309" class="whatsapp" target="_blank">
          <i class="fab fa-whatsapp"></i> WhatsApp
        </a>

        <a href="https://www.instagram.com/tech.fusion.education/" class="instagram" target="_blank">
          <i class="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://www.linkedin.com/company/tech-fusion-ml/" class="linkedin" target="_blank">
          <i class="fab fa-linkedin-in"></i> LinkedIn
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
