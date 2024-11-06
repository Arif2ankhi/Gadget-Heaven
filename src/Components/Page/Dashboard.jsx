import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const Dashboard = () => {
const {pathname} = useLocation

    return (
        <>
        <div className="W-full text-center bg-[#9538E2] pt-8 pb-6">
        <h1 className="text-white font-semibold text-4xl">Dashboard</h1>
        <p className="text-white text-sm font-light leading-[1.5] my-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to
          <br /> the coolest accessories, we have it all!
        </p>
        <NavLink to="dashboard/cart"
        className={({ isActive }) =>
            isActive ||
            pathname === "/dashboard" ||
            pathname === "/dashboard/cart"
              ? "bg-white text-[#9538E2] font-semibold rounded-full"
              : "bg-[#9538E2] border border-white text-black font-bold space-x-4 rounded-full"
          }
        >
        <button className="px-10 py-2">Cart</button>
        </NavLink>
        <NavLink
            to="/dashboard/wishlist"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-[#9538E2] font-semibold rounded-full"
                : "bg-[#9538E2] border border-white text-black font-bold rounded-full"
            }
          >

        <button className="px-10 py-2">Wishlist</button>
        </NavLink>

        <Outlet></Outlet> 
      </div>
      


      </>
      
    );
};

export default Dashboard;