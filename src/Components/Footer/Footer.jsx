import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10">
          <div className="text-center space-y-2">
           <h1 className="text-4xl font-extrabold">Gadget Heaven</h1>
           <p className="text-gray-500 text-base">Leading the way in cutting-edge technology and innovation.</p>
           </div>
           <div className="divider"></div>  
  <div className='flex justify-around  text-gray-500 '>
  <nav className="flex flex-col items-center">
    <h6 className="font-bold text-black">Services</h6>
    <a className="link link-hover">Product Support</a>
    <a className="link link-hover">Order Tracking</a>
    <a className="link link-hover">Shipping & Delivery</a>
    <a className="link link-hover">Returns</a>
  </nav>
  <nav className="flex flex-col items-center">
    <h6 className="font-bold text-black">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Careers</a>
    <a className="link link-hover">Contact</a>
    
  </nav>
  <nav className="flex flex-col items-center">
    <h6 className="font-bold text-black">Legal</h6>
    <a className="link link-hover">Terms of Service</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  </div>
</footer>
    );
};

export default Footer;