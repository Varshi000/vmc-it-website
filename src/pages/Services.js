import React from 'react';

const Services = () => {
  const services = [
    { 
      title: "Job Support", 
      desc: "24/7 assistance for your employment needs, including interview prep and assignments.",
      icon: "💼"
    },
    { 
      title: "Proxies", 
      desc: "Secure and reliable proxy services for browsing and testing.",
      icon: "🔒"
    },
    { 
      title: "Training", 
      desc: "Master technologies like React, Python, and AWS with hands-on sessions.",
      icon: "🎓"
    },
    { 
      title: "Document Editing", 
      desc: "Professional resume and cover letter polishing.",
      icon: "📝"
    },
    { 
      title: "Job Applying", 
      desc: "We apply to jobs on your behalf across the US market.",
      icon: "🌎"
    },
    { 
      title: "Background Checks", 
      desc: "Compliance and verification services.",
      icon: "✅"
    }
  ];

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;