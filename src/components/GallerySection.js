// components/GallerySection.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./GallerySection.css";

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Training Session",
      category: "Education",
      imgUrl:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 2,
      title: "Team Meeting",
      category: "Collaboration",
      imgUrl:
        "https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 3,
      title: "Tech Workshop",
      category: "Learning",
      imgUrl:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1472&q=80",
    },
  ];

  return (
   <section className="gallery-section">
  <div className="gallery-container">
    <div className="gallery-header">
      <h2>Our Gallery</h2>
      <p className="gallery-subtitle">Moments that define us</p>
    </div>

    <div className="gallery-row">
      {galleryItems.map((item) => (
        <div key={item.id} className="gallery-card">
          <img src={item.imgUrl} alt={item.title} className="gallery-card-img" />
          <div className="gallery-card-content">
            <h3>{item.title}</h3>
            <p className="gallery-card-category">{item.category}</p>
          </div>
        </div>
      ))}
    </div>

    
  </div>
</section>

  );
};

export default GallerySection;
