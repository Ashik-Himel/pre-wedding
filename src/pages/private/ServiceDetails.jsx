import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const ServiceDetails = () => {
  const {id} = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch('/data/services.json')
    .then(res => res.json())
    .then(data => {
      setService(data.find(item => item.id == id));
    })
  }, [id]);

  return (
    <main className="bg-[rgba(229,84,115,0.1)] py-12 md:py-16">
      <Helmet>
        <title>Service Details - PreWedding</title>
      </Helmet>

      <section>
        <div className="container">
          <div className="bg-white flex flex-col md:flex-row [&>*]:flex-1 rounded-lg shadow-lg max-w-[900px] mx-auto">
            <div>
              <img src={service?.image} alt="Service Image" className="h-full object-cover object-center rounded-t-lg md:rounded-none md:rounded-s-lg" />
            </div>
            <div className="p-8 self-center">
              <h2 className="text-3xl font-medium mb-1">{service?.title}</h2>
              <span className="text-xl text-para-color mb-4 block">Price: {service?.price}</span>
              <p className="text-para-color">{service?.description}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceDetails;