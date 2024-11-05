import React from "react";
import gadget from '../../../public/gadget.json';

const Gadget = ({ gadget }) => {
  const { title, image, price } = gadget;

  return (
    <div className="card bg-base-100 w-96  shadow-xl p-6">
      {/* <figure className="px-10 pt-10 bg-slate-500 "> */}
      <figure className="bg-gray-300 py-8  rounded-2xl">
        <img
          src={image}
          alt="{gadgetName"
          className="rounded-xl h-[181px] w-[240px]"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title font-bold ">{title}</h2>
        <p>{price}</p>
        <div className="card-actions">
          <button className="btn text-[#9538E2] border-[#9538E2] bg-white font-bold rounded-full ">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
