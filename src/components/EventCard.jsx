import PropTypes from "prop-types";
import {format} from "date-fns";

const EventCard = ({event}) => {
  const {thumbnail, title, location, date, budget} = event;

  return (
    <div className="border-2 border-primary rounded [box-shadow:2px_2px_30px_rgba(229,84,115,0.3)]">
      <img src={thumbnail} alt="Event Thumbnail" className="aspect-[4/3] object-cover object-center" />
      <div className="p-4">
        <div className="flex justify-between items-center text-para-color mb-4">
          <span>Date: {format(new Date(date), "dd/MM/yyyy")}</span>
          <span>Budget: {budget}</span>
        </div>
        <h2 className="text-2xl font-medium">{title}</h2>
        <span className="text-para-color block">{location}</span>
      </div>
    </div>
  );
};

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object
}