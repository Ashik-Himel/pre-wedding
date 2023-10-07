import { Helmet } from "react-helmet-async";
import Services from "../components/Services";

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>PreWedding - Your Wedding Planner</title>
      </Helmet>
      
      <Services />
    </main>
  );
};

export default Home;