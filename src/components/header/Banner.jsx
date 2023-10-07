import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="py-10 md:py-20 lg:py-40 text-center">
      <div className="container">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">Welcome to Pre<span className="text-primary">Wedding</span>!</h1>
        <p className="max-w-[700px] mx-auto mb-8">PreWedding is an wedding management company that will manage all these things to need in your wedding ceremony.</p>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          <Link to='#about' className="btn btn-primary">About Us</Link>
          <Link to='#services' className="btn btn-outline">Our Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;