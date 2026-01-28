import React from 'react';
import './Pricing.css';

const Pricing = () => {


  const educationPricing = [
    {
      id: 1,
      title: 'Self-Paced',
      price: '$299',
      subtitle: 'per course',
      description: 'Learn at your own speed',
      features: ['Lifetime access', 'Course materials', 'Video lectures', 'Assignments', 'Certificate of completion'],
      badge: null
    },
    {
      id: 2,
      title: 'Bootcamp',
      price: '$3,999',
      subtitle: '12-week program',
      description: 'Intensive hands-on training',
      features: ['Live instruction', 'Project-based learning', 'Career guidance', 'Job placement support', 'Industry network access'],
      badge: 'Best Value',
      featured: true
    },
    {
      id: 3,
      title: 'Corporate Training',
      price: '$199',
      subtitle: 'per employee/month',
      description: 'Tailored for your team',
      features: ['Custom curriculum', 'On-site training', 'Progress tracking', 'Certified instructors', 'Team support'],
      badge: null
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
      <button className={`pricing-button ${item.featured ? 'primary' : 'secondary'}`}>
        Get Started
      </button>
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
