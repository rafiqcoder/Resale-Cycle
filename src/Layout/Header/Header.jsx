import React,{ useContext } from "react";
import toast from "react-hot-toast";
import { NavLink } from "react-router-dom";

import { UserContext } from "../../Context/Context";
import MobileHeader from "./MobileHeader";


const Header = () => {
  const { user, logOut, initialPhoto, initialName } =
    useContext(UserContext);
  
  //logout
  const handleLogout = () => {
    logOut().then((result) => {
      toast.success("Logged Out Successfully");
    }).catch((error) => {
      toast.error(error.message);
    });
  };

  // seting user photo
  let photo = "";
  if (user && user.uid) {
    if (initialPhoto !== "") {
      photo = initialPhoto;
    } else {
      photo = user.photoURL;
    }
  } else {
    //if user is not logged in
    photo = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
  }
  // desktop header
  return (
    <header className="shadow 11/12">
      <div className=" hidden sm:flex navbar bg-base-100 h-[50px] w-[1440px] mx-auto ">
        <div className="navbar-start">
          <NavLink
            to="/"
            className=" normal-case text-xl flex justify-center items-center content-center"
          >
            {/* <img src={logo} className="w-20 rounded-full" alt="" />  */}
            {/* Resale Cycle */}
            RESALE CYCLE
          </NavLink>
        </div>
        <div>
          <ul className="menu menu-horizontal p-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            
        
            
            <li>
              <NavLink to="/contact-us">Contact Us</NavLink>
            </li>
            <li>
              <NavLink to="/blog">Blogs</NavLink>
            </li>
            {user?.uid &&
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
            }
          </ul>
        </div>
        <div className="navbar-end">
          {
            //if user is logged in then show user photo and logout button
          }
          {user && user.uid ? (
            <NavLink
              to="/login"
              className="btn-outline btn-warning border rounded-r-full rounded-l-full py-[2px] px-3"
              onClick={handleLogout}
            >
              Logout
            </NavLink>
          ) : (
            <NavLink
              to="/login"
              className="btn-outline btn-warning border rounded-r-full rounded-l-full py-[2px] px-3"
            >
              Login
            </NavLink>
          )}

          <div className=" content-center justify-center items-center flex">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-8 rounded-full">
                  <img alt="" src={photo} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span className="justify-between">
                    {initialName ? initialName : user?.displayName}
                  </span>
                </li>
                <li>
                  <span>Settings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/** Header for Mobile */}
      <MobileHeader
        initialName={initialName}
        user={user}
        photo={photo}
        handleLogout={handleLogout}
      ></MobileHeader>
    </header>
  );
};

export default Header;
