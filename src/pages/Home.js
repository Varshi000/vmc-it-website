import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import "./Home.css";
import HeroSection from "../components/HeroSection";
import AboutPreview from "../components/AboutPreview";
import GallerySection from "../components/GallerySection";
import Footer from "../components/Footer";


const Home = () => {
  const services = [
    {
      title: "Job Support",
      desc: "24/7 assistance for your employment needs.",
      icon: "💼",
    },
    {
      title: "Proxies",
      desc: "Secure and reliable proxy services available",
      icon: "🔒",
    },
    {
      title: "Training",
      desc: "Master technologies with expert guidance.",
      icon: "🎓",
    },
  ];

  

  

  return (
    <div className="home-page">
      {/* Navbar */}
      
      <HeroSection/>
      {/* Hero Section */}
      

      {/* About Section */}
      <AboutPreview/>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h1 style={{color:'blue'}}>Our Services</h1>
            <p className="section-subtitle">
              Tailored solutions for your success
            </p>
          </div>
          <div className="service-grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                desc={service.desc}
                icon={service.icon}
              />
            ))}
          </div>
          <div className="text-center">
            <Link to="/services" className="cta-button outline">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Improved Layout */}
      <GallerySection/>
      {/* CTA Section */}
      <Footer/>
    </div>
  );
};

export default Home;
