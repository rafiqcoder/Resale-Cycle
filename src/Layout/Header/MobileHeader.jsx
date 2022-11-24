import React from "react";
import { NavLink } from "react-router-dom";

const MobileHeader = ({ initialName ,user,photo,handleLogout}) => {
  return (
    <div className=" sm:hidden navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active:" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {user && user.uid && (
              <div className="">
                <li>
                  <NavLink to="/reviews">My Reviews</NavLink>
                </li>
                <li>
                  <NavLink to="/add-service">Add Service</NavLink>
                </li>
              </div>
            )}
            <li>
              <NavLink to="/blog">Blog</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink className="btn btn-ghost normal-case text-xl">
          Resale Cycle
        </NavLink>
      </div>
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="" src={photo} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/" className="justify-between">
                <span className="justify-between">
                  {initialName ? initialName : user?.displayName}
                </span>
              </a>
            </li>
            <li>
              <a href="/">Settings</a>
            </li>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
