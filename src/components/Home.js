import React from "react";
import "./Home.css";
import teacherImage from "../assets/images/teacher-5635919_1920.png";
import btechClassesIcon from "../assets/images/btech classes.png";
import coreConceptIcon from "../assets/images/core concept.png";
import alumniIcon from "../assets/images/alumni.png";
import resumeIcon from "../assets/images/resume.png";
import virtualImage from "../assets/images/virtual-7071998_1920.png";
import webcamImage from "../assets/images/webcam-7109621_1920.png";
import anytimeImage from "../assets/images/anytime.png";
import certificationImage from "../assets/images/certification-3242594_1920.png";
import happyStudentImage from "../assets/images/happy student.png";

export function Home() {
    return (
        <>
            <header>
                Tech Fusion
                <p>Empowering B.Tech Students through Quality Tutoring</p>
            </header>
            <div className="content">
                <div className="section">
                    <img src={teacherImage} alt="Image 1" />
                    <div className="section-content">
                        <p>“Welcome to Tech Fusion” At Tech Fusion, we believe in merging knowledge with practical experience. Our mission is to empower aspiring engineers through high-quality online tutoring tailored to the needs of B.Tech students.</p>
                    </div>
                </div>

                <div>
                    <center>
                        <h2>Why Choose Tech Fusion?</h2>
                    </center>
                    <div className="container">
                        <div className="card">
                            <div className="icon">
                                <img src={btechClassesIcon} alt="Icon 1" />
                            </div>
                            <h3>B.Tech Subject Classes:</h3>
                            <p>We provide comprehensive tutoring in B.Tech subjects, ensuring you build a strong foundation in core concepts while also delving into specialized areas.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={coreConceptIcon} alt="Icon 2" />
                            </div>
                            <h3>Comprehensive Curriculum:</h3>
                            <p>Our carefully designed curriculum ensures you grasp essential engineering principles and stay updated with the latest advancements in technology.</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={alumniIcon} alt="Icon 3" />
                            </div>
                            <h3>Classes by CUSAT Alumnus:</h3>
                            <p>Learn from the best! Our instructors are accomplished alumni from Cochin University of Science and Technology (CUSAT).</p>
                        </div>
                        <div className="card">
                            <div className="icon">
                                <img src={resumeIcon} alt="Icon 4" />
                            </div>
                            <h3>Build Your Resume:</h3>
                            <p>Stand out in a competitive job market! Our courses and internships enhance your knowledge and add significant value to your resume.</p>
                        </div>
                    </div>
                </div>

                <div className="c">
                    <center><h1>Our Services</h1></center>
                    <div className="section2">
                        <img src={virtualImage} alt="Image 2" />
                        <div className="section-content">
                            <p>
                                <h2>Engaging Video Lessons:</h2> Our dynamic video lessons are designed to keep you engaged and make learning enjoyable. With interactive content, quizzes, and discussions, studying with us is both effective and fun!
                            </p>
                        </div>
                    </div>
                    <div className="section2">
                        <img src={webcamImage} alt="Image 3" />
                        <div className="section-content">
                            <p>
                                <h2>1-on-1 Mentoring:</h2> Receive personalized attention through dedicated 1-on-1 mentoring sessions. Our experienced tutors will address your specific challenges and provide tailored guidance.
                            </p>
                        </div>
                    </div>
                    <div className="section2">
                        <img src={anytimeImage} alt="Image 4" />
                        <div className="section-content">
                            <p>
                                <h2>Flexible Scheduling:</h2> Learn at your own pace with classes that fit your busy lifestyle. Our flexible scheduling allows you to balance your studies with other commitments.
                            </p>
                        </div>
                    </div>
                    <div className="section2">
                        <img src={certificationImage} alt="Image 5" />
                        <div className="section-content">
                            <p>
                                <h2>Certification:</h2> Upon completion of your courses and internships, receive a certification that showcases your expertise and commitment to your professional development.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="section" style={{ paddingLeft: "15%" }}>
                    <img src={happyStudentImage} alt="Happy Students" />
                    <div className="section-content">
                        <div><b style={{ fontSize: "70px" }}>10+ </b><b style={{ fontSize: "70px" }}>Happy Students</b></div>
                    </div>
                </div>
            </div>
            <center>
                <h2>Join the Tech Fusion Community!</h2>
                <p>Ready to take your engineering career to the next level? <br />
                    Enroll today and experience the perfect blend of theoretical knowledge and practical application.<br />
                </p>
            </center>
            <footer>
                <h2>Get Started Now</h2>
                <p>Stay connected with us on social media for updates, tips, and success stories from our students!<br />
                    <a href="https://www.instagram.com/tech.fusion.education/" target="_blank"><i className="fab fa-instagram"></i> Instagram</a><br />
                    <a href="https://www.linkedin.com/company/tech-fusion-ml/" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a><br />
                    <a href="https://wa.me/917012422309" target="_blank"><i className="fab fa-whatsapp"></i> WhatsApp: +91 7012422309</a><br />
                </p>
            </footer>
        </>
    );
}
