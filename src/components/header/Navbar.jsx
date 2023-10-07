import { Link, NavLink } from "react-router-dom";
import { RiMenu2Fill } from 'react-icons/ri';
import { FaCircleXmark } from 'react-icons/fa6';
import { useState } from "react";

const Navbar = () => {
  const [drawerShow, setDrawerShow] = useState(false);

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
      <Link to='/login' className="btn btn-primary">Login</Link>
    </nav>
  );
};

export default Navbar;