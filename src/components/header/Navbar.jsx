import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill } from 'react-icons/ri';
import { FaCircleXmark } from 'react-icons/fa6';
import { useContext, useState } from "react";
import { UserContext } from "../../ContextProvider";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase.config";
import toast from "react-hot-toast";

const Navbar = () => {
  const {userLoaded, user} = useContext(UserContext);
  const [drawerShow, setDrawerShow] = useState(false);
  const [profileShow, setProfileShow] = useState(false);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logout Successful !!!")
      })
      .catch(error => {
        toast.error(error.code);
      })
    setProfileShow(false);
  }

  return (
    <nav className="py-4 flex justify-between items-center gap-4">
      <div className="flex items-center gap-4">
        <div className="md:hidden text-2xl cursor-pointer" onClick={() => setDrawerShow(true)}>
          <RiMenu2Fill />
        </div>
        <Link to='/' className="text-2xl font-medium">Pre<span className="text-primary">Wedding</span></Link>
      </div>
      <ul className="bg-white text-text-color md:bg-[transparent] md:text-white flex flex-col md:flex-row justify-center items-center gap-6 fixed -left-full top-0 bottom-0 md:static w-full max-w-[300px] md:w-auto md:max-w-none [box-shadow:10px_0px_30px_30px_rgba(0,0,0,0.3)] md:shadow-none me-8 md:me-0 transition-[left] [&_a]:text-xl md:[&_a]:text-base z-10" style={drawerShow ? {left: 0} : {}}>
        <FaCircleXmark className="md:hidden text-3xl text-primary absolute right-6 top-6 cursor-pointer" onClick={() => setDrawerShow(false)} />
        <li>
          <NavLink to='/' className={({isActive}) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''} onClick={() => setDrawerShow(false)}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/wedding-gallery' className={({isActive}) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''} onClick={() => setDrawerShow(false)}>Wedding Gallery</NavLink>
        </li>
        <li>
          <NavLink to='/vendor-directory' className={({isActive}) => isActive ? 'text-primary font-semibold border-b-2 border-primary' : ''} onClick={() => setDrawerShow(false)}>Vendor Directory</NavLink>
        </li>
      </ul>
      {
        userLoaded ? !user ? <Link to='/login' className="btn btn-primary">Login</Link> : <div className="relative">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setProfileShow(!profileShow)}>
            <img src={user?.photoURL} alt="User's Photo" className="w-10 rounded-full" />
            <p className="font-medium hidden lg:block">{user?.displayName?.split(' ')[0]}</p>
          </div>
          {
            profileShow ? <div className="bg-white text-text-color px-6 py-4 rounded-md text-center w-[300px] absolute top-[calc(100%+15px)] right-0">
              <span className="block w-4 h-4 bg-white rotate-45 absolute -top-2 right-3 lg:right-[135px]"></span>
              <img src={user?.photoURL} alt="User's Photo" className="w-14 mx-auto rounded-full mb-2" />
              <p className="text-[18px] font-medium">{user?.displayName}</p>
              <p className="text-para-color mb-4">{user?.email}</p>
              <button className="btn btn-warning text-black" onClick={handleSignOut}>Logout</button>
            </div> : ''
          }
        </div> : <div className="px-3">
          <span className="loading loading-spinner loading-md"></span>
        </div>
      }
    </nav>
  );
};

export default Navbar;