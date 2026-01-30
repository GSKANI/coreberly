import React from 'react';
import { Link } from 'react-router-dom';
import './Pricing.css';

const Pricing = () => {


  const educationPricing = [
    {
      id: 1,
      slug: 'full-stack-development',
      title: 'Full Stack Development',
      price: '₹2,000',
      subtitle: 'Career Track',
      description: 'Master frontend and backend with modern frameworks.',
      features: ['MERN Stack', 'Real-world Projects', 'Job Placement Support', 'Certification'],
      badge: 'Popular'
    },
    {
      id: 2,
      slug: 'ai-machine-learning',
      title: 'AI & Machine Learning',
      price: '₹2,000',
      subtitle: 'Next-Gen Tech',
      description: 'Deep dive into neural networks and predictive modeling.',
      features: ['Python & PyTorch', 'NLP & CV Projects', 'Advanced Math', 'Research Support'],
      badge: 'Cutting Edge',
      featured: true
    },
    {
      id: 3,
      slug: 'hr-training',
      title: 'HR Training',
      price: '₹2,000',
      subtitle: 'Corporate Skills',
      description: 'Comprehensive human resource management and strategy.',
      features: ['Payroll Management', 'Recruitment Strategy', 'Labor Laws', 'Soft Skills'],
      badge: null
    },
    {
      id: 4,
      slug: 'networking',
      title: 'Networking',
      price: '₹2,000',
      subtitle: 'Infrastructure',
      description: 'Master server management and network security.',
      features: ['CCNA Prep', 'Cloud Infrastructure', 'Cybersecurity Basics', 'Hardware Lab'],
      badge: null
    },
    {
      id: 5,
      slug: 'autocad',
      title: 'AutoCAD',
      price: '₹2,000',
      subtitle: 'Design Engineering',
      description: 'Learn 2D and 3D design for engineering and architecture.',
      features: ['Architectural Design', 'Blueprints', '3D Modeling', 'Technical Drawing'],
      badge: null
    },
    {
      id: 6,
      slug: 'data-science',
      title: 'Data Science',
      price: '₹2,000',
      subtitle: 'Analytics Track',
      description: 'Master data visualization, statistics, and big data.',
      features: ['Pandas & NumPy', 'Tableau/PowerBI', 'Statistical Analysis', 'Big Data Tools'],
      badge: 'In Demand'
    }
  ];

  const PricingCard = ({ item }) => (
    <div className={`pricing-card ${item.featured ? 'featured' : ''}`}>
      {item.badge && <div className="pricing-badge">{item.badge}</div>}
      <h3 className="pricing-title">{item.title}</h3>
      <div className="pricing-price">{item.price}</div>
      <p className="pricing-subtitle">{item.subtitle}</p>
      <p className="pricing-description">{item.description}</p>
      <ul className="pricing-features">
        {item.features.map((feature, i) => (
          <li key={i}>✓ {feature}</li>
        ))}
      </ul>
      <Link
        to={`/course/${item.slug}`}
        className={`pricing-button ${item.featured ? 'primary' : 'secondary'}`}
      >
        Get Started
      </Link>
    </div>
  );

  return (
    <section id="pricing" className="pricing">
      <div className="pricing-container">
        <h2 className="section-title">Transparent Pricing</h2>
        <p className="section-subtitle">Choose the perfect plan for your needs</p>



        {/* Educational Programs Pricing */}
        <div className="pricing-section">
          <h3 className="pricing-category-title">Educational Programs</h3>
          <div className="pricing-grid">
            {educationPricing.map((item) => (
              <PricingCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pricing-cta">
          <h3>Have custom requirements?</h3>
          <p>Contact our team for a personalized quote</p>
          <button className="btn-primary">Contact Sales</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
