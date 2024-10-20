import React, { useState, useEffect } from 'react';
import { getCoursesByType } from '../functions/firestore';
import './Internship.css'; // Import CSS for additional styling

const Internship = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
       
          const filteredCourses = await getCoursesByType("internship");
          console.log(filteredCourses);
          setCourses(filteredCourses);
        
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []); // Re-fetch data when filter changes
  return (<>
    <h1>Internships</h1>

    {
      courses.map(course=>(
        <div key={course.id} class="internship">
        <h2>{course.title}</h2>
        <p>{course.description}</p>
        <a href={course.syllabus}>Syllabus</a>
  
      </div>
      ))
    }
{/* 
    <div class="internship">
      <h2>Digital Design Internship</h2>
      <p>Join our 4-week Digital Design Internship, where you'll explore fundamental concepts in digital electronics. Engage in hands-on projects, culminating in the implementation of an ALU using logic gates in CircuitVerse. Weekly assignments will enhance your understanding and practical skills. This internship is perfect for first-year students eager to delve into digital design and circuit development.</p>
      <a href="https://drive.google.com/file/d/1V4So05brybIfEjrZ8nAAUxFsnjH7vwFf/view?usp=sharing">Syllabus</a>

    </div>

    <div class="internship">
      <h2>Front-End Web Development Internship</h2>
      <p>Embark on a 4-week Front-End Web Development Internship tailored for first-year students. Learn essential skills in HTML, CSS, and JavaScript while creating responsive web applications. Weekly assignments and projects will build your portfolio and enhance your coding abilities. This internship is an excellent opportunity to kickstart your career in web development and design.</p>
      <a href="https://drive.google.com/file/d/1yAMhVylm_N2lVnqPBQRWDHV7enBB_GUZ/view?usp=sharing">Syllabus</a>
    </div>

    <div class="internship">
      <h2>Verilog Internship</h2>
      <p>Our 4-week Verilog Internship focuses on teaching Verilog to electronics and electrical engineering students. You'll gain a solid understanding of hardware description languages and their applications in digital design. Each week includes structured lessons and practical assignments to reinforce learning. This internship is designed for second-year students ready to advance their knowledge in digital systems.</p>
      <a href="pdf/Verilog Internship_syllabus.pdf">Syllabus</a>
    </div> */}
  </>
  );
};

export default Internship;
