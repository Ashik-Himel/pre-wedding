import { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import googleIcon from "../../assets/images/google.png";
import { UserContext } from "../../ContextProvider";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

const Login = () => {
  const { setUser } = useContext(UserContext);
  const [showPass, setShowPass] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [BtnActive, setBtnActive] = useState(false);
  const [eyeShow, setEyeShow] = useState(false);
  const {pathname} = useLocation();

  const handlePassOnChange = (e) => {
    const password = e.target.value;
    if (password) setEyeShow(true);
    else setEyeShow(false);
    setBtnActive(false);

    if (password.length < 6) {
      setErrorMsg("Password should have at least 6 characters!");
    } else if (!/[A-Z]/.test(password)) {
      setErrorMsg("Password should have at least one uppercase letter!");
    } else if (!/[^a-zA-Z0-9]/.test(password)) {
      setErrorMsg("Password should have at least one special character!");
    } else {
      setErrorMsg("");
      setBtnActive(true);
    }
  };
  const handleSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("Login Successful !!!");
        console.log(userCredential.user);
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-login-credentials') setErrorMsg("Incorrect username or password!");
        else toast.error(error.code);
        console.error(error);
      });
  };
  const handleGoogSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        toast.success("Login Successful !!!");
      })
      .catch((error) => {
        toast.error(error.code);
        console.error(error);
      });
  };

  return (
    <main>
      <Helmet>
        <title>Login - PreWedding</title>
      </Helmet>

      <section className="bg-[rgba(229,84,115,0.1)] min-h-[calc(100vh-72px)] py-8">
        <div className="container">
          <div className="bg-white w-full max-w-[500px] mx-auto px-6 py-10 rounded-md">
            <h2 className="text-2xl font-semibold text-center">
              Login your account
            </h2>
            <hr className="my-6" />
            <form className="[&>*]:block" onSubmit={handleSignIn}>
              <label htmlFor="email" className="font-medium mb-2">
                Email Address
              </label>
              <input
                className="input w-full bg-[rgba(255,141,166,0.1)] mb-4"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />

              <label htmlFor="password" className="font-medium mb-2">
                Password
              </label>
              <div className="relative mb-4">
                <input
                  className="input w-full bg-[rgba(255,141,166,0.1)]"
                  onChange={handlePassOnChange}
                  type={showPass ? "text" : "password"}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                  required
                />
                <div
                  className="absolute top-1/2 right-4 -translate-y-1/2 text-2xl cursor-pointer"
                  style={eyeShow ? { display: "block" } : { display: "none" }}
                >
                  {showPass ? (
                    <AiFillEyeInvisible
                      onClick={() => setShowPass(!showPass)}
                    />
                  ) : (
                    <AiFillEye onClick={() => setShowPass(!showPass)} />
                  )}
                </div>
              </div>
              <p className="text-error font-medium mb-4">{errorMsg}</p>
              <button
                type="submit"
                className="btn btn-primary w-full mb-6"
                disabled={BtnActive ? "" : "disabled"}
              >
                Login
              </button>
            </form>
            <p className="font-medium">
              Don&apos;t have an account? <Link to='/register' className="text-primary" state={pathname} onClick={() => scrollTo(0, 0)}>Register</Link>
            </p>
            <div className="flex justify-center items-center gap-4 my-4">
              <span className="flex-1 h-[1px] bg-text-color"></span>
              <span className="font-semibold">Or</span>
              <span className="flex-1 h-[1px] bg-text-color"></span>
            </div>
            <button
              className="border-2 border-text-color rounded-full px-4 py-2 flex justify-center items-center gap-4 font-medium w-full"
              onClick={handleGoogSignIn}
            >
              <img src={googleIcon} alt="Google Icon" className="w-6" /> Sign in
              with Google
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Login;
