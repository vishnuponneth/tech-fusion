import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./ContactUs.css";

const ContactUs = () => {

  const navigate = useNavigate();
  return (
    <div class="contact-us-page">
      <div class="contact-container">
        <h1 class="contact-title">Help & Support</h1>

        <div class="contact-info">
          <h2 class="section-title">Contact Us</h2>
          <p class="section-text">If you need any help, feel free to reach out to us through the following details:</p>
          <p class="section-text"><strong>Email:</strong> <a href="mailto:Techfusioneducation.info@gmail.com"> Techfusioneducation.info@gmail.com</a></p>
          <p class="section-text"><strong>Phone:</strong> +91 7012422309</p>
        </div>

        <div class="form-link">
          <h2 class="section-title">Submit a Request</h2>
          <p class="section-text">Fill out the form with your inquiry, and we will get back to you soon!</p>
          <a href="https://forms.gle/FHEgWy1xHYSwhJwB8" target="_blank" class="button-link">Go to Google Form</a>
        </div>

        <div class="social-media">
          <h2 class="section-title">Connect with Us on Social Media</h2>
          <p class="section-text">Stay connected with us through our social media platforms:</p>
          <a href="https://wa.me/917012422309" class="social-link whatsapp" target="_blank">
            <i class="fab fa-whatsapp"></i> WhatsApp
          </a>
          <a href="https://www.instagram.com/tech.fusion.education/" class="social-link instagram" target="_blank">
            <i class="fab fa-instagram"></i> Instagram
          </a>
          <a href="https://www.linkedin.com/company/tech-fusion-ml/" class="social-link linkedin" target="_blank">
            <i class="fab fa-linkedin-in"></i> LinkedIn
          </a>
        </div>
      </div>
    </div>

  );
};

export default ContactUs;
