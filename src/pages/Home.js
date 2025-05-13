import React from 'react';
import ServiceCard from '../components/ServiceCard';

const Home = () => {
  const services = [
    { title: "Job Support", desc: "24/7 assistance for your employment needs." },
    { title: "Proxies", desc: "Secure and reliable proxy services." },
    { title: "Training", desc: "Master technologies with expert guidance." }
  ];

  return (
    <div>
      <section className="hero">
        <h1>VMC IT Services</h1>
        <p>Your trusted partner for career growth and tech solutions.</p>
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} desc={service.desc} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;