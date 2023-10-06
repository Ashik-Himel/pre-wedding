import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState('Error Message');

  return (
    <main>
      <Helmet>
        <title>Login - PreWedding</title>
      </Helmet>

      <section className="bg-[rgba(229,84,115,0.1)] min-h-[calc(100vh-72px)] py-8 md:pt-16">
        <div className="container">
          <div className="bg-white w-full max-w-[500px] mx-auto px-6 py-10 rounded-md">
            <h2 className="text-2xl font-semibold text-center">Login your account</h2>
            <hr className="my-6" />
            <form className="[&>*]:block">
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
              <button type="submit" className="btn btn-primary w-full mb-6">Login</button>
            </form>
            <p className="font-medium">Don&apos;t have an account? <Link to='/register' className="text-primary">Register</Link></p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;