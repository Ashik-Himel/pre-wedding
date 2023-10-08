import { Link } from "react-router-dom";
import errorImg from "../assets/images/error.jpg";

const ErrorPage = () => {
  return (
    <main>
      <div className="container flex justify-center items-center h-screen">
        <div className="text-center">
          <img src={errorImg} alt="Error Image" className="w-full max-w-[300px] mx-auto mb-6" />
          <h2 className="text-3xl font-medium mb-4
          ">404 - Page Not Found !!!</h2>
          <p className="text-para-color mb-6 max-w-[650px]">The page you are looking for is not available. Please return to our homepage and let&apos;s get you back on the right path.</p>
          <Link to='/' className="btn btn-primary" onClick={() => scrollTo(0, 0)}>Return Home</Link>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;