import React from 'react';
import "./About.css";
const currentYear = new Date().getFullYear();
const About = () => {

  return (
    <div className="about-us">
    <div className="about-us-header">
      <h1 className="about-us-h1">About Us</h1>
    </div>
    <div className="about-us-container">
      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">Welcome to Tech Fusion</h2>
        <p>Your gateway to advanced learning and skill development!</p>
        <p>
          At Tech Fusion, we are dedicated to bridging the gap between traditional education and industry needs by offering specialized online tuition and internships for BTech students. Our goal is to empower the next generation of engineers with the knowledge and practical skills necessary to excel in both their academic and professional careers.
        </p>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">Who We Are</h2>
        <p>
          Tech Fusion is an innovative online platform designed to provide high-quality education and hands-on training in various BTech subjects and technologies. With a focus on delivering both theoretical understanding and real-world application, we help students master their subjects and enhance their technical expertise.
        </p>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">Our Mission</h2>
        <p>At Tech Fusion, our mission is to create an accessible, online-only learning platform where BTech students can:</p>
        <ul className="about-us-ul">
          <li><strong>Master Core Concepts:</strong> Through our tailored tuition sessions, students can strengthen their understanding of core engineering subjects across various disciplines.</li>
          <li><strong>Gain Practical Skills:</strong> Our skill-oriented internships provide hands-on experience with real-world projects that are essential for industry readiness.</li>
        </ul>
        <p>We aim to equip students with both academic knowledge and the practical skills necessary to thrive in today’s competitive job market.</p>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">What We Offer</h2>
        <h3 className="about-us-h3">BTech Tuition</h3>
        <p>
          We offer expert-led tuition in a variety of BTech subjects, ensuring that students receive personalized attention and comprehensive support to excel in their studies. From foundational subjects like digital electronics and programming to more advanced topics, we provide the guidance needed for academic success.
        </p>

        <h3 className="about-us-h3">Internship Programs</h3>
        <p>
          Our internships are designed to give students hands-on experience with real-world projects, covering areas such as front-end web development and digital electronics. These programs focus on practical applications, ensuring that students gain the skills necessary to prepare for their professional careers.
        </p>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">Why Choose Tech Fusion?</h2>
        <ul className="about-us-ul">
          <li><strong>Comprehensive Online Learning:</strong> We offer flexible learning options, including live online classes, recorded sessions, and interactive tutorials, all accessible from the comfort of your home.</li>
          <li><strong>Expert Tutors and Mentors:</strong> Our instructors are seasoned professionals with deep knowledge and practical experience in their fields.</li>
          <li><strong>Hands-on Experience:</strong> Our internship programs provide real-world exposure and build skills that are highly valued by employers.</li>
          <li><strong>Tailored Learning Paths:</strong> We understand that every student is unique, and we offer personalized learning plans to ensure that each student can achieve their academic and career goals.</li>
        </ul>
      </div>

      <div className="about-us-section">
        <h2 className="about-us-section-title about-us-h2">Our Vision for the Future</h2>
        <p>
          We aim to become a leading online platform for BTech students and aspiring engineers, recognized for excellence in education, training, and skill development. As we continue to expand, our goal is to offer a diverse range of courses and internships in the latest technological fields, keeping pace with the evolving demands of the industry.
        </p>
        <p>
          At Tech Fusion, we are committed to shaping the engineers of tomorrow by offering an education that goes beyond textbooks. Join us on this journey of learning, innovation, and success.
        </p>
      </div>
    </div>

    <div className="about-us-footer">
      <p>© {currentYear} Tech Fusion. All rights reserved.</p>
    </div>
  </div>

  );
};


export default About;
