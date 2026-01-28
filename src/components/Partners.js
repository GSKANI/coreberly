import React from 'react';
import './Partners.css';

const Partners = () => {
  const companies = [
    { id: 1, name: 'TechCore Inc', color: 'gold' },
    { id: 2, name: 'CloudVision', color: 'orange' },
    { id: 3, name: 'DataFlow Systems', color: 'gold' },
    { id: 4, name: 'InnovateLabs', color: 'orange' },
    { id: 5, name: 'SwiftDev Co', color: 'gold' },
    { id: 6, name: 'FutureTech', color: 'orange' },
    { id: 7, name: 'QuantumAI', color: 'gold' },
    { id: 8, name: 'NextGen Solutions', color: 'orange' },
  ];

  return (
    <section className="partners">
      <div className="partners-header">
        <h2 className="section-title">Trusted By Leading Companies</h2>
        <p className="section-subtitle">Partnerships with industry leaders who rely on our expertise</p>
      </div>

      <div className="partners-scroll">
        <div className="partners-track">
          {companies.map((company) => (
            <div key={company.id} className={`company-card ${company.color}`}>
              <div className="company-logo">
                {company.name.charAt(0)}
              </div>
              <div className="company-name">{company.name}</div>
            </div>
          ))}
          {/* Duplicate for continuous loop */}
          {companies.map((company) => (
            <div key={`duplicate-${company.id}`} className={`company-card ${company.color}`}>
              <div className="company-logo">
                {company.name.charAt(0)}
              </div>
              <div className="company-name">{company.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="partners-stats">
        <div className="stat">
          <div className="stat-num">50+</div>
          <div className="stat-text">Partner Companies</div>
        </div>
        <div className="stat">
          <div className="stat-num">$2B+</div>
          <div className="stat-text">Combined Market Value</div>
        </div>
        <div className="stat">
          <div className="stat-num">10+</div>
          <div className="stat-text">Countries</div>
        </div>
        <div className="stat">
          <div className="stat-num">24/7</div>
          <div className="stat-text">Partnership Support</div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
