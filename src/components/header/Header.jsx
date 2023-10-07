import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "./Banner";
import bannerBg from "../../assets/images/banner.jpg";

const Header = () => {
  const {pathname} = useLocation();

  return (
    <header className="bg-center bg-[rgba(0,0,0,0.8)] bg-blend-overlay text-white" style={pathname === '/' ? {backgroundImage: `url("${bannerBg}")`} : {}}>
      <div className="container">
        <Navbar />
        {
          pathname === '/' && <Banner />
        }
      </div>
    </header>
  );
};

export default Header;