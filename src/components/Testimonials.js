import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Aisha Rahman',
      title: 'Founder, TechVenture',
      quote: 'Coreberly transformed our entire digital infrastructure. Their expertise and dedication exceeded all expectations.',
      rating: 5,
      initials: 'AR',
      color: 'gradient-1'
    },
    {
      id: 2,
      name: 'Marcus Johnson',
      title: 'CEO, InnovateCorp',
      quote: 'Working with Coreberly was a game-changer. Professional, responsive, and results-driven every step of the way.',
      rating: 5,
      initials: 'MJ',
      color: 'gradient-2'
    },
    {
      id: 3,
      name: 'Sarah Patel',
      title: 'CTO, DataFlow Systems',
      quote: 'Their AI solutions helped us reduce costs by 40% while improving performance significantly.',
      rating: 5,
      initials: 'SP',
      color: 'gradient-3'
    },
    {
      id: 4,
      name: 'Rajesh Kumar',
      title: 'Director, CloudFirst',
      quote: 'Exceptional cloud architecture and seamless migration. Coreberly knows their stuff.',
      rating: 5,
      initials: 'RK',
      color: 'gradient-4'
    },
    {
      id: 5,
      name: 'Jessica Lee',
      title: 'VP Product, WebScale',
      quote: 'Their bootcamp program was instrumental in building our engineering team. Highly recommend.',
      rating: 5,
      initials: 'JL',
      color: 'gradient-5'
    },
    {
      id: 6,
      name: 'David Park',
      title: 'Founder, DevHub',
      quote: 'Amazing support team and cutting-edge solutions. Coreberly is the partner we trust.',
      rating: 5,
      initials: 'DP',
      color: 'gradient-6'
    },
    {
      id: 7,
      name: 'Nina Chopra',
      title: 'Manager, TechLearn Academy',
      quote: 'Their educational programs are comprehensive and industry-relevant. Our students absolutely loved it.',
      rating: 5,
      initials: 'NC',
      color: 'gradient-1'
    },
    {
      id: 8,
      name: 'Michael Brown',
      title: 'CEO, FutureTech Inc',
      quote: 'Best investment we made in enterprise solutions. ROI was clear from month one.',
      rating: 5,
      initials: 'MB',
      color: 'gradient-2'
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: rating }).map((_, i) => (
      <span key={i} className="star">★</span>
    ));
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials">
      <div className="testimonials-container">
        <h2 className="section-title">Built on Trust</h2>
        <p className="section-subtitle">Hear from our satisfied clients and partners</p>

        {/* Featured Testimonial Carousel */}
        <div className="testimonial-carousel">
          <button className="carousel-nav prev" onClick={prevTestimonial} aria-label="Previous">
            <span>‹</span>
          </button>

          <div className="featured-testimonial">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`testimonial-slide ${
                  index === activeIndex ? 'active' : ''
                } ${index < activeIndex ? 'prev' : 'next'}`}
              >
                <div className="quote-mark">"</div>
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-meta">
                  <div className={`testimonial-avatar ${testimonial.color}`}>
                    {testimonial.initials}
                  </div>
                  <div className="testimonial-info">
                    <h4 className="testimonial-name">{testimonial.name}</h4>
                    <p className="testimonial-title">{testimonial.title}</p>
                    <div className="testimonial-stars">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={nextTestimonial} aria-label="Next">
            <span>›</span>
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="card-glow"></div>
              <div className={`avatar-small ${testimonial.color}`}>
                {testimonial.initials}
              </div>
              <p className="quote-short">{testimonial.quote.substring(0, 80)}...</p>
              <div className="card-footer">
                <h5>{testimonial.name}</h5>
                <p className="role">{testimonial.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
