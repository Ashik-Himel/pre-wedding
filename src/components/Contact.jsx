import toast from "react-hot-toast";
import contactImg from "../assets/images/contact.png";
import 'aos/dist/aos.css';
import { useContext } from "react";
import { UserContext } from "../ContextProvider";

const Contact = () => {
  const {aosSettings} = useContext(UserContext);
  aosSettings();

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    toast.success("Message Sent !!!");
  }

  return (
    <section className="mt-10 md:mt-16">
      <div className="container">
        <h2 className="text-center text-3xl font-semibold mb-4"><span className="text-primary">Contact</span> Us</h2>
        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8 [&>*]:w-full [&>*]:md:flex-1 overflow-x-hidden">
          <div data-aos="fade-right">
            <img src={contactImg} alt="Contact Image" />
          </div>
          <div data-aos="fade-left">
            <form className="[&>*]:block max-w-[500px]" onSubmit={handleSubmit}>
              <label htmlFor="name" className="font-medium mb-2">Name</label>
              <input className="input bg-[rgba(255,141,166,0.1)] mb-4 w-full" type="text" name="name" id="name" placeholder="Enter your name" required />

              <label htmlFor="email" className="font-medium mb-2">Email Address</label>
              <input className="input bg-[rgba(255,141,166,0.1)] mb-4 w-full" type="email" name="email" id="email" placeholder="Enter your email address" required />

              <label htmlFor="subject" className="font-medium mb-2">Subject</label>
              <input className="input bg-[rgba(255,141,166,0.1)] mb-4 w-full" type="text" name="subject" id="subject" placeholder="Write your subject" required />

              <label htmlFor="message" className="font-medium mb-2">Message</label>
              <textarea className="textarea text-base resize-none bg-[rgba(255,141,166,0.1)] mb-4 w-full h-20" name="message" id="message" placeholder="Write your Message" required></textarea>
              <button className="btn btn-primary">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;