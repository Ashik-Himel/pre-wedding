import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";
import Services from "../components/Services";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>PreWedding - Your Wedding Planner</title>
      </Helmet>

      <Banner />
      <Services />
    </main>
  );
};

export default Home;