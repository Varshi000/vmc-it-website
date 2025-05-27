import './ServiceCard.css';
const ServiceCard = ({ title, desc, icon }) => {
  return (
    <div className="service-card">
      <div className='icon'>{icon}</div>

      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export default ServiceCard;