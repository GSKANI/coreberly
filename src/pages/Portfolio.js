import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Portfolio.css';

const Portfolio = () => {
  const [projects] = useState([
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      category: 'Web',
      image: '🛍️',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe']
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      description: 'Mobile app for tracking workouts and nutrition',
      category: 'Mobile',
      image: '💪',
      tech: ['React Native', 'Firebase', 'Redux']
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description: 'Real-time analytics and reporting dashboard',
      category: 'Web',
      image: '📊',
      tech: ['React', 'Chart.js', 'PostgreSQL', 'Python']
    },
    {
      id: 4,
      title: 'Travel Booking Platform',
      description: 'Complete travel booking system with reviews',
      category: 'Web',
      image: '✈️',
      tech: ['Vue.js', 'Laravel', 'MySQL']
    },
    {
      id: 5,
      title: 'Weather App',
      description: 'Real-time weather tracking application',
      category: 'Mobile',
      image: '🌤️',
      tech: ['Flutter', 'REST API', 'Geolocation']
    },
    {
      id: 6,
      title: 'Project Management Tool',
      description: 'Collaborative project management platform',
      category: 'Web',
      image: '📋',
      tech: ['React', 'GraphQL', 'PostgreSQL', 'Docker']
    }
  ]);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Web', 'Mobile'];
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="portfolio">
      <div className="portfolio-container">
        <section className="portfolio-hero">
          <h1>Our Portfolio</h1>
          <p>Explore the projects we've built for satisfied clients</p>
        </section>

        <section className="portfolio-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </section>

        <section className="portfolio-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="portfolio-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="project-image">{project.image}</div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <button className="view-btn">View Project →</button>
            </motion.div>
          ))}
        </section>

        <section className="portfolio-cta">
          <h2>Have a Project in Mind?</h2>
          <p>Let's discuss how we can bring your ideas to life</p>
          <button className="cta-button">Start Your Project</button>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
