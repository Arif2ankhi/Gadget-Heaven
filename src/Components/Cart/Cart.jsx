import React from 'react';

import { AiFillDelete } from "react-icons/ai";

const Cart = ({cartItem}) => {

    const { title, image, price, description } = cartItem;
    return (
        <>
         <div className="relative bg-base-200 my-8 rounded-xl p-6">
            <div className="absolute top-4 right-4 text-rose-600 text-3xl cursor-pointer">
            <AiFillDelete />
            </div>

            <div className="flex gap-3">
                <img
                    src={image}
                    alt="Product"
                    className="w-52 h-36 rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <p>Price: $ {price}</p>
                </div>
            </div>
        </div>

        </>
    );
};

export default Cart;

