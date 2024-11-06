

import React from 'react';
import { MdDelete } from "react-icons/md";

const WishList = ({ wish , onAddToCart }) => {
  const { id, title, image, price } = wish; // Destructure wishlist item

//   const handleRemoveFromWishlist = () => {
//     Add function to remove item from wishlist
//   };

  return (
    <div className="flex justify-between items-center border-2 rounded-lg bg-gray-100 py-2 px-4 mb-3 mt-4">
      <div className="flex items-center gap-3">
        <img className="w-24 h-20 rounded-lg" src={image} />
        <div>
          <p className="text-xl font-bold">{title}</p>
          <p className="text-sm text-gray-600 font-bold">${price}</p>
        </div>
      </div>

      
      <div className='flex items-center gap-4'>
      <button onClick={onAddToCart} className="text-purple-900">
    
      </button>
      <button className="text-purple-900">

        <MdDelete />
      </button>

      </div>
      
      

    </div>
  );
};

export default WishList;
