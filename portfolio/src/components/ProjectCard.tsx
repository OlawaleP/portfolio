import React from 'react';
import './ProjectCard.css';

interface Technology {
  name: string;
  color: string;
}

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  demoLink: string;
  githubLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  demoLink,
  githubLink
}) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
        <div className="project-links">
          <a href={demoLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fas fa-external-link-alt"></i> Live Demo
          </a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fab fa-github"></i> View Code
          </a>
        </div>
      </div>
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tech">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="tech-tag"
              style={{ backgroundColor: tech.color }}
            >
              {tech.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;