import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import  'react-toastify/dist/ReactToastify.css'
import { addToFavList, getFavList } from '../Utilities/addToFav';
import { addToCartList, getCartList } from '../Utilities/addToCart';
import { GoHeart } from "react-icons/go";

const GadgetDetail = () => {

    const {Id} = useParams();
    const data = useLoaderData();

    const gadgetId = parseInt(Id);

    const gadget = data.find(gadget => gadget.id === gadgetId);
    // console.log(gadget);

    const {
        title, price,
        availability, description,
        image, specification, category, brand,
        rating,
      } = gadget;
    
       const itemRating = Math.round(rating * 2) / 2;

       const [favDisabled, setFavDisabled] = useState(false);
       const [ cartDisabled, setCartDisabled] = useState(false);

      useEffect(() => {
        const favList = getFavList();
        const cartList = getCartList();
        
        setFavDisabled(favList.includes(gadgetId));
        setCartDisabled(cartList.includes(gadgetId) ||!availability);

      } , [] ); 

      const addToFav = () => {
        addToFavList(gadgetId);
        setFavDisabled(true);
        toast.success("Added to favorites!", { position: "top-center" });

      };

      const addToCart = () => {
        addToCartList(gadgetId)
        setCartDisabled(true);
        toast.success("Added to cart!", { position: "top-center" });
      };

    

    return (
        <>
        
        <ToastContainer></ToastContainer>
        <div className="relative">
        <div className="text-center bg-[#9538E2] p-10 pb-80">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold text-white mb-4">
              Product Details
            </h1>
            <p className="text-lg text-white mb-6">
              Explore the latest gadgets that will take your experience to the
              next level. From smart devices to the coolest accessories, we have
              it all!
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:flex-row max-w-4xl mx-auto bg-white p-10 gap-12 rounded-lg shadow-lg -mt-72 mb-32">
          <div className="max-w-[350px] rounded-lg p-4">
            <img
              src={image}
              alt="Gadget"
              className="w-[500px] h-[500px] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-semibold">{title}</h1>
              <p className="text-xl font-semibold text-gray-700 mt-2">
                Price: ${price}
              </p>

              {/* <p className="text-xl font-semibold  text-green-700 mt-2">
                Availability: {availability}
              </p> */}
              <p className="text-xl font-semibold  text-green-700 mt-2">
                {category}
              </p>
              <p className="text-xl font-semibold  text-green-700 mt-2">
                 {brand}
              </p>
              
             

           <div>
           <div>
  <h2 className="font-semibold text-lg text-gray-800">
    Specification:
  </h2>
  <ul className="list-disc list-inside text-gray-700 ml-4">
    {Object.entries(specification).map(([key, value], index) => (
      <li key={index}>
        <span className="font-semibold capitalize">{key.replace('_', ' ')}:</span> {Array.isArray(value) ? value.join(', ') : value}
      </li>
    ))}
  </ul>
</div>
           </div>

              <div className="flex gap-2"></div>

            </div>
            {availability ? (
            <button className="px-2 py-1 border mt-2 border-green-500 font-bold  rounded-xl text-green-500">
              In stock
            </button>
          ) : (
            <button className="px-2 py-1 mt-2 border border-red-500 inline-block rounded-xl font-bold text-red-500">
              Out of Stock
            </button>
          )}
           
            <p className="text-gray-600">{description}</p>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Specification:
              </h2>
              <ul className="list-decimal list-inside text-gray-700 ml-4">
        
              </ul>
            </div>
            <div>
              <h2 className="font-semibold text-lg text-gray-800">
                Rating: {rating}
              </h2>
              <div className="rating rating-lg rating-half">
                <input
                  type="radio"
                  name="rating-10"
                  className="rating-hidden"
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1 bg-yellow-300"
                  defaultChecked={itemRating >= 0.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2  bg-yellow-300"
                  defaultChecked={itemRating >= 1}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1  bg-yellow-300"
                  defaultChecked={itemRating >= 1.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2  bg-yellow-300"
                  defaultChecked={itemRating >= 2}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1  bg-yellow-300"
                  defaultChecked={itemRating >= 2.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2  bg-yellow-300"
                  defaultChecked={itemRating >= 3}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1  bg-yellow-300"
                  defaultChecked={itemRating >= 3.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2  bg-yellow-300"
                  defaultChecked={itemRating >= 4}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-1  bg-yellow-300"
                  defaultChecked={itemRating >= 4.5}
                />
                <input
                  type="radio"
                  name="rating-10"
                  className="mask mask-star-2 mask-half-2  bg-yellow-300"
                  defaultChecked={itemRating >= 5}
                />
              </div>
            </div>

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={() => addCart(id)}
                disabled={cartDisabled}
                className={`px-6 py-2 text-white rounded-lg flex items-center gap-2 ${
                  cartDisabled || !availability
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
              >
                {availability
                  ? cartDisabled
                    ? "Already in Cart"
                    : "Add to Cart"
                  : "Out of Stock"}
              </button>
              <button
                onClick={() => addFav(id)}
                disabled={favDisabled}
                className={`btn btn-circle bg-pink-100 border rounded-full ${
                  favDisabled
                    ? "bg-gray-900 cursor-not-allowed"
                    : "text-purple-600 border-purple-600 hover:bg-purple-100"
                }`}
              >
                {/* <img className="w-3/5" src="/heart.png" alt="" /> */}
                <a className="btn bg-white px-3 rounded-full border-b-fuchsia-200 font-bold text-xl"><GoHeart /></a>
              </button>
            </div>
          </div>
        </div>
      </div>
            

        </> 
    );
};

export default GadgetDetail;

