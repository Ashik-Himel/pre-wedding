import PropTypes from "prop-types";

const DirectoryCard = ({vendor}) => {
  const {brand, category, image, phone, portfolio} = vendor;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <img src={image} alt="Brand Image" className="h-[50px] mb-4" />
      <h2 className="text-2xl font-medium">{brand}</h2>
      <span className="text-para-color mb-6 block">{category}</span>
      <div className="flex items-center gap-4">
        <a className="btn btn-primary" href={portfolio}>Portfolio</a>
        <a className="btn btn-outline !text-primary !border-primary hover:!text-white" href={`tel:${phone}`}>Call Now</a>
      </div>
    </div>
  );
};

export default DirectoryCard;

DirectoryCard.propTypes = {
  vendor: PropTypes.object
}