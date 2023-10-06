import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Error Message');

  return (
    <main>
      <Helmet>
        <title>Register - PreWedding</title>
      </Helmet>

      <section className="bg-[rgba(229,84,115,0.1)] min-h-[calc(100vh-72px)] py-8 md:pt-16">
        <div className="container">
          <div className="bg-white w-full max-w-[500px] mx-auto px-6 py-10 rounded-md">
            <h2 className="text-2xl font-semibold text-center">Register your account</h2>
            <hr className="my-6" />
            <form className="[&>*]:block">
              <label htmlFor="name" className="font-medium mb-2">Name</label>
              <input className="input w-full bg-[rgba(255,141,166,0.1)] mb-4" type="text" name="name" id="name" placeholder="Enter your name" required />

              <label htmlFor="photo" className="font-medium mb-2">Photo URL</label>
              <input className="input w-full bg-[rgba(255,141,166,0.1)] mb-4" type="text" name="photo" id="photo" placeholder="Enter your photo url" required />

              <label htmlFor="email" className="font-medium mb-2">Email Address</label>
              <input className="input w-full bg-[rgba(255,141,166,0.1)] mb-4" type="email" name="email" id="email" placeholder="Enter your email address" required />

              <label htmlFor="password" className="font-medium mb-2">Password</label>
              <div className="relative mb-4">
                <input className="input w-full bg-[rgba(255,141,166,0.1)]" type={showPass ? "text" : "password"} name="password" id="password" placeholder="Enter your password" required />
                <div className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer">
                  {
                    showPass ? <AiFillEyeInvisible onClick={() => setShowPass(!showPass)} /> : <AiFillEye onClick={() => setShowPass(!showPass)} />
                  }
                </div>
              </div>
              <p className="text-error font-medium mb-4">{errorMsg}</p>
              <button type="submit" className="btn btn-primary w-full mb-6">Register</button>
            </form>
            <p className="font-medium">Already have an account? <Link to='/login' className="text-primary">Login</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;