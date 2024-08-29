import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Internships from './components/Internships';
import AcademicTutoring from './components/AcademicTutoring';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/academic-tutoring" element={<AcademicTutoring />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
