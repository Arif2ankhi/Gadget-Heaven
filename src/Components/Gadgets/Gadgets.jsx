import React, { useEffect, useState } from "react";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const [gadgets, setGadgets] = useState([]);
  const [category, setCategory] = useState("All Products");

  useEffect(() => {
    fetch("./gadget.json")
      .then((res) => res.json())
      .then((data) => setGadgets(data));
  }, []);

  const filteredGadgets =
    category === "All Products"
      ? gadgets
      : gadgets.filter((gadget) => gadget.category === category);

  return (
    <div className="">
      <h2 className="text-6xl font-bold text-center mb-12">
        Explore Cutting-Edge Gadgets
      </h2>
      <div className='flex flex-col md:flex-row justify-around container mx-auto border p-10 rounded-3xl mb-10"'>
        <div className="flex flex-col gap-4 p-4 mb-6">
        <button 
                        onClick={() => setCategory("All Products")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "All Products" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        All Products
                    </button>
                    <button 
                        onClick={() => setCategory("Laptops")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "Laptops" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        Laptops
                    </button>
                    <button 
                        onClick={() => setCategory("Phones")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "Phones" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        Phones
                    </button>
                    <button 
                        onClick={() => setCategory("Accessories")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "Accessories" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        Accessories
                    </button>
                    <button 
                        onClick={() => setCategory("Smart Watches")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "Smart Watches" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        Smart Watches
                    </button>
                    <button 
                        onClick={() => setCategory("MacBook")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "MacBook" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        MacBook Pro 
                    </button>
                    <button 
                        onClick={() => setCategory("iPhones")}
                        className={`font-semibold text-2xl p-5 rounded-3xl ${category === "iPhones" ? "bg-[#9538E2] text-slate-800" : "bg-gray-300"}`}
                    >
                        iPhones
                    </button>
                </div>

                {/* Display filtered gadgets */}
                <div className='bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {filteredGadgets.length > 0 ? (
                        filteredGadgets.map(gadget => <Gadget gadget={gadget} key={gadget.id} />)
                    ) : (
                        <p className="text-center text-2xl font-bold text-gray-500">
                            This item is not available at this moment. Please try again later.
                        </p>
                    )}





            {/* Original code */}
          {/* <button
            onClick={() => setCategory("All Products")}
            className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5 "
          >
            All Products
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            Laptops
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            Phones
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            Accessories
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            Smart Watches
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            MacBook
          </button>
          <button className="bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5">
            iPhones
          </button>
        </div>

        <div className=" bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gadgets.map((gadget) => (
            <Gadget gadget={gadget} key={gadget.id}></Gadget>
          )
           */}
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;
