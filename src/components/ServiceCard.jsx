import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import 'aos/dist/aos.css';
import { useContext } from "react";
import { UserContext } from "../ContextProvider";

const ServiceCard = ({service}) => {
  const {id,image, title, description, price} = service;
  const {aosSettings} = useContext(UserContext);
  aosSettings();

  return (
    <div className="bg-white p-6 pb-[65px] rounded-md shadow-lg relative" data-aos="fade-up">
      <img src={image} alt="Service Image" className="w-24 aspect-square object-cover object-center rounded-full mb-4" />
      <h2 className="text-xl font-medium mb-4">{title}</h2>
      <p className="text-para-color mb-2">{description.slice(0, 110)}...</p>
      <span className="text-xl font-medium block mb-4">Price: {price}</span>
      <Link className="btn btn-primary absolute bottom-6 left-6" to={`/service-details/${id}`}>View Details</Link>
    </div>
  );
};

export default ServiceCard;

ServiceCard.propTypes = {
  service: PropTypes.object
}