import React from 'react';
import { Link } from 'react-router-dom';
import './Testimonials.css';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "This platform transformed our business operations. Highly recommended for professionals looking to streamline their workflow."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director",
      content: "The intuitive interface and powerful features saved us countless hours. Our team's productivity has never been higher."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Freelance Designer",
      content: "As a solo professional, this gives me the tools I need to compete with larger agencies. It's been a game-changer."
    }
  ];

  return (
    <div className="testimonials-container">
      <h2>What Our Clients Say</h2>
      <div className="testimonials-grid">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-card">
            <p className="testimonial-content">"{testimonial.content}"</p>
            <div className="testimonial-author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </div>
        ))}
      </div>
      <Link to="/" className="back-button">Back to Home</Link>
    </div>
  );
}

export default Testimonials;