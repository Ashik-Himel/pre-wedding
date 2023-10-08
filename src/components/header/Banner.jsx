import 'aos/dist/aos.css';
import { useContext } from "react";
import { UserContext } from '../../ContextProvider';

const Banner = () => {
  const {aosSettings} = useContext(UserContext);
  aosSettings();

  return (
    <section className="py-10 md:py-20 lg:py-40 text-center">
      <div className="container" data-aos="fade-up">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Welcome to Pre<span className="text-primary">Wedding</span>!</h1>
        <p className="max-w-[700px] mx-auto mb-8">PreWedding is an wedding management company that will manage all these things to need in your wedding ceremony.</p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <a href='#latest-events' className="btn btn-primary">Latest Events</a>
          <a href='#services' className="btn btn-outline">Our Services</a>
        </div>
      </div>
    </section>
  );
};

export default Banner;