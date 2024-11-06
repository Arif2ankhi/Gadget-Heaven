import React from 'react';
import { MdDelete } from "react-icons/md";

const WishList = ({wishItem}) => {
    const { title, image, price, description } = wishItem;
    return (
        <>
        <div className="flex justify-between items-center border-2 rounded-lg bg-gray-100 py-2 px-4 mb-3 mt-4">
                <div className="flex items-center gap-3">
                    <img className="w-24 h-20 rounded-lg" src={image} />
                    <div>
                     <p className="text-xl font-bold">{title}</p>
                     <p className="text-sm text-gray-600 font-bold"></p>
                    <p className="text-sm text-gray-600 font-bold">${price}</p>
                    <p className="text-sm text-gray-600 font-bold">${description}</p>

                </div>
                </div>
                    <button onClick={() => handleRemoveFromCart(id)} className="text-purple-900"><MdDelete /></button>
        </div>
        </>
    );
};

export default WishList;