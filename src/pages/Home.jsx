import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Services from "../components/Services";
import LatestEvents from "../components/LatestEvents";
import Contact from "../components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 700,
      mirror: true
    });
  }, [])

  return (
    <main className="mb-12">
      <Helmet>
        <title>PreWedding - Your Wedding Planner</title>
      </Helmet>
      
      <LatestEvents />
      <Services />
      <Contact />
    </main>
  );
};

export default Home;