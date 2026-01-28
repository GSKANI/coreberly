import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Services.css';

const Services = () => {
  const [services] = useState([
    {
      id: 1,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications with cutting-edge technologies',
      icon: '💻',
      features: ['Responsive Design', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development'],
      tech: ['React', 'Node.js', 'Next.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      icon: '📱',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps'],
      tech: ['Swift', 'Kotlin', 'React Native', 'Flutter']
    },
    {
      id: 3,
      title: 'UI/UX Design',
      description: 'Create stunning, user-centric interfaces that drive engagement',
      icon: '🎨',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      tech: ['Figma', 'Adobe XD', 'Sketch', 'InVision']
    },
    {
      id: 4,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and deployment services',
      icon: '☁️',
      features: ['Cloud Migration', 'DevOps', 'CI/CD Pipeline', 'Serverless Architecture'],
      tech: ['AWS', 'Azure', 'Google Cloud', 'Docker']
    },
    {
      id: 5,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence',
      icon: '🤖',
      features: ['Predictive Analytics', 'NLP Solutions', 'Computer Vision', 'Chatbots'],
      tech: ['TensorFlow', 'PyTorch', 'OpenAI', 'Python']
    },
    {
      id: 6,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to grow your business',
      icon: '📊',
      features: ['SEO Optimization', 'Social Media', 'Content Marketing', 'Analytics'],
      tech: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp']
    },
    {
      id: 7,
      title: 'Blockchain Development',
      description: 'Secure and transparent blockchain solutions',
      icon: '🔗',
      features: ['Smart Contracts', 'DApps', 'NFT Platforms', 'Crypto Wallets'],
      tech: ['Ethereum', 'Solidity', 'Web3.js', 'Hardhat']
    },
    {
      id: 8,
      title: 'Quality Assurance',
      description: 'Comprehensive testing to ensure flawless solution delivery',
      icon: '✅',
      features: ['Automated Testing', 'Manual Testing', 'Performance Testing', 'Security Audit'],
      tech: ['Selenium', 'Jest', 'Cypress', 'JMeter']
    }
  ]);

  return (
    <div className="services">
      <div className="services-container">
        <section className="services-hero">
          <h1>Our Services</h1>
          <p>Comprehensive technology solutions tailored to your business needs</p>
        </section>

        <section className="services-intro">
          <h2>What We Offer</h2>
          <p>
            At CoreBerly, we provide end-to-end technology services that help businesses thrive in the digital age.
            From concept to deployment and beyond, our expert team delivers solutions that drive real results.
          </p>
        </section>

        <section className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <div className="service-features">
                <h4>Key Features:</h4>
                <ul>
                  {service.features.map((feature, i) => (
                    <li key={i}>✓ {feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-tech">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {service.tech.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <button className="service-btn">Learn More</button>
            </motion.div>
          ))}
        </section>

        <section className="service-process">
          <h2>Our Strategic Approach</h2>
          <p className="process-subtitle">A proven methodology for successful project delivery</p>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Discovery & Planning</h3>
              <p>We analyze your requirements, define project scope, and create a detailed roadmap</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Design & Prototype</h3>
              <p>Our designers create intuitive interfaces and interactive prototypes for validation</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Development</h3>
              <p>Expert developers build your solution using best practices and modern technologies</p>
            </div>
            <div className="step-arrow">→</div>
            <div className="step">
              <div className="step-number">04</div>
              <h3>Testing & Launch</h3>
              <p>Rigorous testing ensures quality before deployment and ongoing support</p>
            </div>
          </div>
        </section>

        <section className="service-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how our services can help you achieve your business goals</p>
          <button className="cta-button">Request a Consultation</button>
        </section>
      </div>
    </div>
  );
};

export default Services;
