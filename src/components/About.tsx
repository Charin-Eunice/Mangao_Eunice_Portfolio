import React from 'react';
import './About.css';
import profilePicture from '../assets/about.jpg';


const About: React.FC = () => {
    return (
        <section id="about" className="about-section">
            <h2 className="section-title">About Me</h2>

            <div className="about-content">
              <div className="profile-picture">
                    <img src={profilePicture} alt="Eunice" className="main-img" />
                </div>
                <div className="about-text">
                    <h3 className="greeting">Hi, I am</h3>
                    <h1 className="name">Eunice Mangao</h1>
                    <p className="bio">
                        As a dedicated and driven third-year student pursuing a Bachelor of Science in 
                        Information Technology at Romblon State University - Romblon Campus, I have fully 
                        immersed myself in the dynamic world of technology, focusing on building a comprehensive 
                        and practical foundation in core subjects such as programming languages, network 
                        administration, and cybersecurity, all of which are crucial for a successful and i
                        mpactful career in the IT industry.
                    </p>
                </div>
            </div>

            <h2 className="education-title">Education</h2>

            <div className="education-cards">
                <div className="education-card">
                    <h3 className="card-title">Primary Level</h3>
                    <p className="school">San Agustin Elementary School</p>
                    <p className="years">2011-2016</p>
                </div>

                <div className="education-card">
                    <h3 className="card-title">Junior High School</h3>
                    <p className="school">Badjao Tablas College</p>
                    <p className="years">2017-2021</p>
                </div>
                <div className="education-card">
                    <h3 className="card-title">Senior High School</h3>
                    <p className="school">Badjao Tablas College</p>
                    <p className="course">General Academic Strand</p>
                    <p className="years">2021-2023</p>
                </div>

                <div className="education-card">
                    <h3 className="card-title">Tertiary Level</h3>
                    <p className="school">Romblon State University - Romblon Campus</p>
                    <p className="course">Bachelor of Science in Information Technology</p>
                    <p className="years">2023</p>
                </div>
            </div>
        </section>
    );
};

export default About;