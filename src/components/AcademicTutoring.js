import React, { useState, useEffect } from 'react';
import { getCoursesByType } from '../functions/firestore';
import "./AcademicTutoring.css";
import { useUser } from '../UserContext';
import { createSearchParams, useNavigate } from 'react-router-dom';

const AcademicTutoring = () => {
  const [courses, setCourses] = useState([]);
  const { user, logout } = useUser();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
       
          const filteredCourses = await getCoursesByType("subject");
          console.log(filteredCourses);
          setCourses(filteredCourses);
        
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    };

    fetchCourses();
  }, []); // Re-fetch data when filter changes

  return (
    <>
     <h1>Subject Descriptions</h1>
    {
      courses.map(course=>(
        <div key={course.id} className="subject">
        <h2>{course.title}</h2>
        <p><span className="scheme">{course.scheme}:</span> {course.description}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div></div>
            {user && <button onClick={() => navigate({
              pathname: "/videos",
              search: createSearchParams({
                id: course.id
              }).toString()
            })}>View course</button>}
          </div>
    </div>
      ))
    }
    {/* <div class="subject">
        <h2>Complex Analysis and Partial Differential Equations</h2>
        <p><span class="scheme">(S3:CS,EC,IT,EEE; S4:CE,SFE,ME) 2023 SCHEME:</span> This course covers analytic functions, complex analysis, and partial differential equations. Topics include Cauchy’s theorems, Taylor expansions, singularities, and applications in signal processing, quantum mechanics, machine learning, and materials science. Advanced differential equations such as wave and heat equations are explored, emphasizing modern applications in various engineering fields. 30+ Questions including previous year questions are discussed in each module.</p>
    </div>

    <div class="subject">
        <h2>Digital System Design</h2>
        <p><span class="scheme">(S3:EC) 2023 SCHEME:</span> Gain a comprehensive understanding of digital logic design and its applications. This course covers standard combinational modules, including decoders, encoders, multiplexers, and shifters. Study synchronous sequential systems like Mealy and Moore machines, analyze canonical forms, and design networks with flip-flops. Explore timing characteristics and issues in VLSI system design, focusing on setup time, hold time, and clocking challenges.</p>
    </div>

    <div class="subject">
        <h2>Solid State Devices</h2>
        <p><span class="scheme">(S3:EC) 2023 SCHEME:</span> Explore the fundamental principles of solid-state physics and how they apply to electronic devices. This course covers topics such as semiconductors, diodes, transistors, and integrated circuits. You’ll learn about the operation and application of these devices in modern technology.</p>
    </div>

    <div class="subject">
        <h2>Computer Programming in C</h2>
        <p><span class="scheme">(S1, S2) 2023 SCHEME:</span> Explore the fundamentals of C programming, focusing on problem-solving methodologies and essential programming concepts. Learn about control structures, functions, arrays, and pointers, while developing algorithms for practical applications. This course equips you with the skills to tackle real-world programming challenges and lays a solid foundation for advanced computer science topics.</p>
    </div>

    <div class="subject">
        <h2>Computer Programming Laboratory</h2>
        <p><span class="scheme">(S1, S2) 2023 SCHEME:</span> Enhance your C programming skills through hands-on laboratory exercises. Engage with application packages, implement decision-making and looping constructs, and work with arrays, strings, and functions. Explore recursion, structures, and pointers to solve practical problems. This lab course complements theoretical knowledge and prepares you for real-world programming challenges.</p>
    </div>
     */}
    </>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
};

export default AcademicTutoring;
