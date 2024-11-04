import React from 'react';

const Header = () => {
    return (
        
  <Nav>
  {/* <!-- navbar starts here --> */}
  <Navbar classNameName="" >
      <nav className=" w-full top-0 z-10">
          <div className="flex items-center justify-between p-4 md:p-8 lg:p-16">
            {/* <!-- Menubar design --> */}
            <div className="md:hidden">
              <i className="fa-solid fa-bars"></i>
            </div> 
            {/* <!-- Logo design --> */}
            <div className="flex items-center ">
                {/* <img src="./images/logo.webp" alt="" className="h-6 w-6 mr-2"> */}
                <h2 className="font-extrabold text-2xl">Peddy</h2>
                </div>
                {/* <!-- Navbar middle section --> */}
              <div className="sm:flex hidden gap-2 font-bold items-center space-x-4">
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Shop</a>
                <a className="link link-hover">Contact</a>
            </div>
            <div className="md:hidden">
              <i className="fa-solid fa-bars"></i>
            </div> 
            {/* <!-- navbar icon --> */}
            <div className="bg-sky-200 text-black border-solid border-2 border-gray-300 px-2 py-1 rounded-full">
                <i className="fa-regular fa-user font-semibold border-gray-800 rounded"></i>

            </div>
          </div>
        
      </nav>
        {/* <!-- navbar ends here -->

        <!-- Banners starts here  --> */}
        <div className="hero">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <p className="text-lg font-semibold ">Bringing Families Together 🔥
                  </p>
              <h1 className="text-4xl font-bold py-3 ">
                  Your Path to Adoption  Starts Here
              </h1>
              <p>A pet is a loyal companion, always there to offer unconditional love.
                  They bring joy, laughter, and a sense of purpose to our lives.
                  A pet is more than just an animal; they are a member of the family.</p>
                  <a href="#connectViewMore" className="btn bg-[#0E7A81] text-[#FFFFFF] mt-2">View More</a>

                   <button id="" className="btn bg-[#0E7A81] text-[#FFFFFF] mt-2">View More</button>
               <button id="" className="btn bg-[#0E7A81] text-[#FFFFFF] mt-2">View More</button>
            </div>
            
          </div>
        </div>
        <div className="w-full text-center">
          {/* <img className="mx-auto" src="images/pet.webp" alt=""> */}
        </div>
        </Nav>
    );
};

export default Header;