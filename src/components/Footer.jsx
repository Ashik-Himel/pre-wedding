import { Link } from "react-router-dom";
import fbIcon from "../assets/images/facebook.png";
import instaIcon from "../assets/images/instagram.png";
import twitterIcon from "../assets/images/twitter.png";

const Footer = () => {
  return (
    <footer className="bg-[#111010] text-white">
      <div className="container">
        {/* Main Footer */}
        <div className="py-12 flex flex-col sm:flex-row gap-8 justify-between [&>*]:flex-1">
          <div>
            <h2 className="text-2xl font-medium mb-4">Pre<span className="text-primary">Wedding</span></h2>
            <div className="flex items-center gap-6">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <img className="w-8" src={fbIcon} alt="Facebook Icon" />
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                <img className="w-8" src={instaIcon} alt="Instagram Icon" />
              </a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                <img className="w-8" src={twitterIcon} alt="Twitter Icon" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-2">Follow Us</h2>
            <nav className="flex flex-col gap-2">
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a>
            </nav>
          </div>

          <div>
            <h2 className="text-2xl font-medium mb-2">Pages</h2>
            <nav className="flex flex-col gap-2">
              <Link to='/'>Home</Link>
              <Link to='/wedding-gallery'>Wedding Gallery</Link>
              <Link to='/vendor-directory'>Vendor Directory</Link>
            </nav>
          </div>
        </div>
        <hr />

        {/* Bottom Footer */}
        <div className="py-8 text-center">
          <p className="leading-8">Copyright &copy; {new Date().getFullYear()} PreWedding - All rights reserved. Developed by <a className="font-semibold" href="https://www.facebook.com/ashikujjaman.himel" target="_blank" rel="noreferrer">Ashik-Himel</a>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;