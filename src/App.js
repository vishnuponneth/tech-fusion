import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Internships from './components/Internships';
import AcademicTutoring from './components/AcademicTutoring';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Footer from './components/Footer';
import OurTeam from './components/OurTeam';
import { auth, googleProvider } from './firebase';  
import { Home } from './components/Home';
import { UserProvider } from './UserContext';
import Video from './components/Video';

const App = () => {
  
  return (
    <UserProvider>

    <Router>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/home" element={<Home />} />
        <Route path="/internships" element={<Internships />} />
        <Route path="/academic-tutoring" element={<AcademicTutoring />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/>
    </Router>
    </UserProvider>
  );
};

export default App;
