import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('/data/services.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    <section className="mt-10 md:mt-16 bg-[rgba(229,84,115,0.1)] py-12" id="services">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold mb-4">Our <span className="text-primary">Services</span></h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mt-8">
          {
            services.map(service => <ServiceCard key={service.id} service={service} />)
          }
        </div>
      </div>
    </section>
  );
};

export default Services;