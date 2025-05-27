import React from 'react';
import './Services.css';
import Footer from '../components/Footer.js';
const Services = () => {
  const services = [
    { 
      title: "Job Support", 
      desc: "24/7 assistance for your employment needs, including interview prep and assignments.",
      details: "Includes resume optimization, mock interviews, and technical guidance for your current role.",
      icon: "💼",
      img: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      title: "Proxies", 
      desc: "Secure and reliable proxy services for browsing and testing.",
      details: "High-speed residential and datacenter proxies with 99.9% uptime guarantee.",
      icon: "🔒",
      img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      title: "Training", 
      desc: "Master technologies like React, Python, and AWS with hands-on sessions.",
      details: "Personalized 1:1 coaching or group sessions with industry experts.",
      icon: "🎓",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      title: "Document Editing", 
      desc: "Professional resume and cover letter polishing.",
      details: "ATS-friendly formatting and keyword optimization for maximum impact.",
      icon: "📝",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      title: "Job Applying", 
      desc: "We apply to jobs on your behalf across the US market.",
      details: "Customized applications tailored to each job description.",
      icon: "🌎",
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    { 
      title: "Background Checks", 
      desc: "Compliance and verification services.",
      details: "Employment history, education, and reference verification packages.",
      icon: "✅",
      img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <div className="service-image-container">
              <img 
                src={service.img} 
                alt={service.title} 
                className="service-image"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <div className="service-header">
                <span className="service-icon" aria-hidden="true">{service.icon}</span>
                <h2>{service.title}</h2>
              </div>
              <p className="service-desc">{service.desc}</p>
              <div className="service-details">
                <p>{service.details}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    
    </div>
  );
};

export default Services;