import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Hello, I'm <span className="highlight">Olawale Ojo</span>
          </h1>
          <h2 className="hero-subtitle">React Frontend Developer</h2>
          <p className="hero-description">
            I build modern, responsive web applications using React, TypeScript, NextJs and other cutting-edge technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">
              View My Work
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <div className="shape-container">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
          </div>
        </div>
      </div>

      <div className="home-skills">
        <h3 className="section-title">Tech Stack</h3>
        <div className="skill-icons">
          <div className="skill-icon-item">
            <i className="fab fa-react"></i>
            <span>React</span>
          </div>
          <div className="skill-icon-item">
            <i className="fab fa-js"></i>
            <span>JavaScript</span>
          </div>
          <div className="skill-icon-item">
            <i className="fab fa-typescript"></i>
            <span>TypeScript</span>
          </div>
          <div className="skill-icon-item">
            <i className="fab fa-html5"></i>
            <span>HTML5</span>
          </div>
          <div className="skill-icon-item">
            <i className="fab fa-css3-alt"></i>
            <span>CSS3</span>
          </div>
          <div className="skill-icon-item">
            <i className="fab fa-node-js"></i>
            <span>Node.js</span>
          </div>
        </div>
      </div>

      <div className="featured-projects">
        <h3 className="section-title">Featured Projects</h3>
        <div className="project-preview">
          {/* Just a placeholder for a featured project */}
          <div className="project-preview-card">
            <div className="project-preview-img"></div>
            <h4>Project Name</h4>
            <p>Brief project description showing your skills and achievements.</p>
            <Link to="/projects" className="btn btn-small">
              See All Projects
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;