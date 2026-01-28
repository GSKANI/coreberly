import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <section className="about-hero">
          <h1>About CoreBerly</h1>
          <p>Empowering businesses through innovative technology solutions</p>
        </section>

        <section className="about-intro">
          <div className="intro-content">
            <h2>Who We Are</h2>
            <p>
              CoreBerly is a leading IT consulting company dedicated to
              transforming businesses through cutting-edge technology solutions. Since our inception,
              we've been committed to delivering excellence in every project we undertake.
            </p>
            <p>
              Our team of expert developers, designers, and strategists work collaboratively to create
              innovative solutions that drive business growth and digital transformation. We combine
              technical expertise with creative thinking to solve complex challenges and deliver
              measurable results.
            </p>
          </div>
        </section>

        <section className="mission-vision">
          <div className="mission">
            <div className="icon">🎯</div>
            <h3>Our Mission</h3>
            <p>
              To empower businesses worldwide with innovative, scalable, and reliable technology
              solutions that drive growth, efficiency, and competitive advantage in the digital age.
            </p>
          </div>
          <div className="vision">
            <div className="icon">🚀</div>
            <h3>Our Vision</h3>
            <p>
              To be the global leader in technology innovation, recognized for our commitment to
              excellence, customer success, and creating transformative digital experiences.
            </p>
          </div>
        </section>

        <section className="about-stats">
          <div className="stat">
            <h3>500+</h3>
            <p>Projects Delivered</p>
          </div>
          <div className="stat">
            <h3>200+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat">
            <h3>50+</h3>
            <p>Team Experts</p>
          </div>
          <div className="stat">
            <h3>15+</h3>
            <p>Countries Served</p>
          </div>
        </section>

        <section className="values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">💡</div>
              <h3>Innovation</h3>
              <p>
                We constantly push boundaries and explore emerging technologies to deliver
                cutting-edge solutions that keep our clients ahead of the curve.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Excellence</h3>
              <p>
                Quality is not an act, but a habit. We ensure excellence in every line of code,
                every design element, and every client interaction.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Collaboration</h3>
              <p>
                We work closely with our clients as partners, understanding their vision and
                collaborating to turn ideas into reality.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h3>Integrity</h3>
              <p>
                We build trust through transparency, honesty, and ethical practices in all our
                business dealings and relationships.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🎓</div>
              <h3>Learning</h3>
              <p>
                We foster a culture of continuous learning and improvement, staying updated with
                the latest technologies and industry best practices.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌟</div>
              <h3>Customer Success</h3>
              <p>
                Your success is our success. We're committed to delivering solutions that create
                real value and drive measurable business outcomes.
              </p>
            </div>
          </div>
        </section>

        <section className="why-choose">
          <h2>Why Choose CoreBerly?</h2>
          <div className="reasons-grid">
            <div className="reason">
              <h4>🏆 Proven Track Record</h4>
              <p>Over 500 successful projects delivered across various industries</p>
            </div>
            <div className="reason">
              <h4>👥 Expert Team</h4>
              <p>Highly skilled professionals with extensive industry experience</p>
            </div>
            <div className="reason">
              <h4>⚡ Agile Methodology</h4>
              <p>Fast, flexible, and efficient project delivery processes</p>
            </div>
            <div className="reason">
              <h4>🔒 Security First</h4>
              <p>Enterprise-grade security and data protection standards</p>
            </div>
            <div className="reason">
              <h4>💬 24/7 Support</h4>
              <p>Round-the-clock technical support and maintenance</p>
            </div>
            <div className="reason">
              <h4>💰 Cost-Effective</h4>
              <p>Competitive pricing with exceptional value for investment</p>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <h2>Ready to Transform Your Business?</h2>
          <p>Let's discuss how we can help you achieve your digital goals</p>
          <button className="cta-button">Get Started Today</button>
        </section>
      </div>
    </div>
  );
};

export default About;
