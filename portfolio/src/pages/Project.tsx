import React from 'react';
import ProjectCard from '../components/ProjectCard';
import './Project.css';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: { name: string; color: string }[];
  demoLink: string;
  githubLink: string;
  category: string;
}

const Projects: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with product listings, shopping cart, and checkout functionality.',
      image: '/images/project-1.jpg', 
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'TypeScript', color: '#007acc' },
        { name: 'Redux', color: '#764abc' },
        { name: 'CSS Modules', color: '#1572b6' }
      ],
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/yourusername/project',
      category: 'frontend'
    },
    {
      id: 2,
      title: 'Task Manager App',
      description: 'A productivity app for managing tasks with drag-and-drop functionality and user authentication.',
      image: '/images/project-2.jpg', 
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'TypeScript', color: '#007acc' },
        { name: 'Firebase', color: '#ffca28' },
        { name: 'Styled Components', color: '#db7093' }
      ],
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/yourusername/project',
      category: 'fullstack'
    },
    {
      id: 3,
      title: 'Bank Dashboard',
      description: 'This is a bank card management dashboard displaying key metrics, analytics charts, recent card requests, and status distribution for monitoring card operations and revenue.',
      image: 'https://res.cloudinary.com/dgny9bffu/image/upload/v1748523998/kgib5yjus6wcuemhd19v.png', 
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'JavaScript', color: '#f7df1e' },
        { name: 'Chart.js', color: '#ff6384' },
        { name: 'TypeScript', color: '#007acc' },
        { name: 'React-Chartjs', color: '#ff6384' }
      ],
      demoLink: 'https://jam.dev/c/02876e2c-6710-468d-9229-5ef3263a7096',
      githubLink: 'https://github.com/OlawaleP/bank-dashboard',
      category: 'frontend'
    },
    {
      id: 4,
      title: 'Blog Platform',
      description: 'A content management system allowing users to create, edit, and publish blog posts.',
      image: '/images/project-4.jpg', 
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'Node.js', color: '#68a063' },
        { name: 'MongoDB', color: '#4db33d' },
        { name: 'Express', color: '#000000' }
      ],
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/yourusername/project',
      category: 'fullstack'
    },
    {
      id: 5,
      title: 'UI Component Library',
      description: 'A collection of reusable React components with comprehensive documentation and examples.',
      image: '/images/project-5.jpg',
      technologies: [
        { name: 'React', color: '#61dafb' },
        { name: 'TypeScript', color: '#007acc' },
        { name: 'Storybook', color: '#ff4785' },
        { name: 'Jest', color: '#c21325' }
      ],
      demoLink: 'https://demo-link.com',
      githubLink: 'https://github.com/yourusername/project',
      category: 'components'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="projects">
      <div className="projects-header">
        <h1 className="section-title">My Projects</h1>
        <p className="projects-subtitle">Check out some of my recent work</p>
      </div>

      <div className="project-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All Projects
        </button>
        <button 
          className={`filter-btn ${filter === 'frontend' ? 'active' : ''}`}
          onClick={() => setFilter('frontend')}
        >
          Frontend
        </button>
        <button 
          className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
          onClick={() => setFilter('fullstack')}
        >
          Full Stack
        </button>
        <button 
          className={`filter-btn ${filter === 'components' ? 'active' : ''}`}
          onClick={() => setFilter('components')}
        >
          Components
        </button>
      </div>

      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            demoLink={project.demoLink}
            githubLink={project.githubLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;