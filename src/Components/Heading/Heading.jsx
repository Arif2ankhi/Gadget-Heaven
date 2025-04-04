import React from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Navbar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
       <li><NavLink to="/dashboard">Dashboard</NavLink></li>
       <li><NavLink to="/statistics">Statistics</NavLink></li>
       <li><NavLink to="/Login">Login</NavLink></li>

      
    
    </>

    return (
        <div className="navbar bg-white rounded-t-xl container mx-auto mt-2">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {links}
      </ul>
      
    </div>
    <a className="btn btn-ghost text-2xl font-bold">Gadget Heaven</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
      
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <a className="btn bg-white px-3 rounded-full text-xl"><MdOutlineShoppingCart /></a>
    <a className="btn bg-white px-3 rounded-full text-xl"><IoHeartOutline /></a>
  </div>
</div>
    );
};

export default Navbar;

