import React from 'react';

const Training = () => {
  const technologies = [
    "React", "Python", "Node.js", "AWS", 
    "Docker", "SQL", "JavaScript", "Machine Learning"
  ];

  return (
    <div className="training-page">
      <h1>Technology Training</h1>
      <p>We offer demo sessions before interviews and hands-on training in:</p>
      <ul className="tech-list">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <div className="demo-cta">
        <h3>Interested in a demo session?</h3>
        <button>Schedule a Call</button>
      </div>
    </div>
  );
};

export default Training;