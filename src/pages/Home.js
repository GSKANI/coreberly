import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Home.css';
import Partners from '../components/Partners';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Pricing from '../components/Pricing';

const Home = () => {
  const services = [
    {
      number: '/01',
      title: 'Web Development',
      description: 'Full-stack web applications built with modern technologies and best practices.',
      features: ['React, Vue, Angular expertise', 'Node.js & Backend development', 'API design & Integration', 'Progressive Web Apps']
    },
    {
      number: '/02',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile solutions for iOS and Android.',
      features: ['React Native development', 'Flutter expertise', 'App store optimization', 'Real-time features']
    },
    {
      number: '/03',
      title: 'Cloud & DevOps',
      description: 'Expert cloud infrastructure design, deployment, and management.',
      features: ['AWS, GCP, Azure expertise', 'CI/CD pipelines', 'Kubernetes orchestration', 'Infrastructure as Code']
    },
    {
      number: '/04',
      title: 'AI & Machine Learning',
      description: 'Leverage cutting-edge AI to automate and optimize your business.',
      features: ['Computer vision solutions', 'Natural language processing', 'Predictive analytics', 'Deep learning models']
    },
    {
      number: '/05',
      title: 'Tech Education',
      description: 'Professional training programs designed by industry experts.',
      features: ['Bootcamp programs', 'Self-paced courses', 'Corporate training', 'Mentorship programs']
    },
    {
      number: '/06',
      title: 'Tech Consulting',
      description: 'Strategic guidance for technology adoption and digital transformation.',
      features: ['Architecture design', 'Performance optimization', 'Security audits', 'Startup acceleration']
    },
    {
      number: '/07',
      title: 'Data Analytics',
      description: 'Transform data into actionable insights with advanced analytics.',
      features: ['Big data processing', 'Business intelligence', 'Data visualization', 'Real-time dashboards']
    },
    {
      number: '/08',
      title: 'Enterprise Solutions',
      description: 'Robust systems built for scale, security, and reliability.',
      features: ['System modernization', 'Microservices architecture', 'Database optimization', 'Security & compliance']
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero::before"></div>
        <div className="hero::after"></div>
        <div className="hero-content">
          <h1>Bridging Vision to <span>Reality in Tech</span></h1>
          <p className="hero-tagline">A technology solutions company specializing in innovation, cloud infrastructure, and tech education. We build elegant solutions and empower developers.</p>

          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Start Now</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>

          <div className="floating-stats">
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">50K+</div>
              <div className="stat-label">Learners</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">98%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">4.9/5</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider">
        ✦ Custom Development ✦ Cloud Solutions ✦ AI/ML ✦ Education ✦ Consulting ✦
      </div>

      {/* Services Section */}
      <section className="services" id="services">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Building secure, scalable, and innovative solutions that transform your vision into reality</p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <div className="service-number">{service.number}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2 className="section-title">Why Choose Coreberly?</h2>

        <div className="features-intro">
          <div className="features-intro-content">
            <h2>Our Core Strengths</h2>
            <p>We combine deep technical expertise with a commitment to excellence. Our team is dedicated to delivering solutions that exceed expectations and drive real business impact.</p>

            <ul className="feature-list">
              <li>
                <strong>Expert Team</strong><br />
                <span>10+ years average experience</span>
              </li>
              <li>
                <strong>24/7 Support</strong><br />
                <span>Always available for you</span>
              </li>
              <li>
                <strong>Custom Solutions</strong><br />
                <span>Tailored to your needs</span>
              </li>
              <li>
                <strong>Quality Assured</strong><br />
                <span>Rigorous testing standards</span>
              </li>
              <li>
                <strong>Agile Approach</strong><br />
                <span>Flexible & iterative</span>
              </li>
              <li>
                <strong>Transparent Communication</strong><br />
                <span>Regular updates & visibility</span>
              </li>
            </ul>
          </div>
          <div className="features-image">
            <h3>✨</h3>
            <h3>Excellence in Every Detail</h3>
            <p>From concept to deployment, we ensure every aspect meets the highest standards.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Partners Section */}
      <Partners />

      {/* Pricing Section */}
      <Pricing />

      {/* Team Section */}
      <Team />
    </div>
  );
};

export default Home;
