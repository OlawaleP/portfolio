import React from 'react';
import Skill from '../components/Skill';
import './About.css';

const About: React.FC = () => {
  const frontendSkills = [
    { name: 'React', icon: 'fab fa-react', proficiency: 90 },
    { name: 'TypeScript', icon: 'fab fa-js', proficiency: 85 },
    { name: 'HTML5', icon: 'fab fa-html5', proficiency: 95 },
    { name: 'CSS3', icon: 'fab fa-css3-alt', proficiency: 90 },
    { name: 'Redux', icon: 'fas fa-code', proficiency: 80 },
  ];

  const otherSkills = [
    { name: 'Node.js', icon: 'fab fa-node-js', proficiency: 75 },
    { name: 'Git', icon: 'fab fa-git-alt', proficiency: 85 },
    { name: 'RESTful APIs', icon: 'fas fa-server', proficiency: 80 },
    { name: 'Testing (Jest)', icon: 'fas fa-vial', proficiency: 70 },
    { name: 'UI/UX Design', icon: 'fas fa-paint-brush', proficiency: 65 },
  ];

  return (
    <section className="about">
      <div className="about-header">
        <h1 className="section-title">About Me</h1>
        <p className="about-subtitle">Get to know me and my background</p>
      </div>

      <div className="about-content">
        <div className="about-image">
          {/* Placeholder for profile image */}
          <img
            src="https://res.cloudinary.com/dgny9bffu/image/upload/v1690222538/IMG_5472_oc6v6o.jpg"
            alt="Profile"
            className="profile-img-placeholder"
          />
          {/* <div className="profile-img-placeholder">
            <i className="fas fa-user"></i>
          </div> */}
        </div>
        <div className="about-text">
          <h3>Who I Am</h3>
          <p>
            I'm a passionate Frontend Developer specializing in React.js and TypeScript. With a
            background in [your background], I bring a unique perspective to web development that
            combines technical expertise with [your unique strength].
          </p>
          <p>
            I enjoy creating responsive, user-friendly interfaces that provide exceptional user
            experiences. My goal is to build applications that are not just functional, but also
            intuitive and enjoyable to use.
          </p>
          <p>
            When I'm not coding, you'll find me [your hobbies/interests].
          </p>

          <div className="experience">
            <h3>My Experience</h3>
            <div className="experience-item">
              <h4>Frontend Developer</h4>
              <p className="experience-company">Company Name | 2022 - Present</p>
              <p>
                Developed and maintained responsive web applications using React.js, TypeScript,
                and various modern frontend technologies. Collaborated with cross-functional teams
                to deliver high-quality user experiences.
              </p>
            </div>
            <div className="experience-item">
              <h4>Junior Web Developer</h4>
              <p className="experience-company">Previous Company | 2020 - 2022</p>
              <p>
                Started my journey in web development, working with HTML, CSS, JavaScript, and
                learning React.js. Assisted in the development of various web projects and gained
                valuable experience in frontend development.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-container">
          <div className="skills-category">
            <h4>Frontend Development</h4>
            <div className="skills-list">
              {frontendSkills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h4>Other Skills</h4>
            <div className="skills-list">
              {otherSkills.map((skill, index) => (
                <Skill
                  key={index}
                  name={skill.name}
                  icon={skill.icon}
                  proficiency={skill.proficiency}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>Bachelor's Degree in [Your Degree]</h4>
          <p>University Name | 2016 - 2020</p>
        </div>
        <div className="education-item">
          <h4>Relevant Certifications</h4>
          <ul>
            <li>Front End Development Certificate - Platform Name</li>
            <li>React Specialist Certificate - Platform Name</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;