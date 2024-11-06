import React, { useEffect, useState } from 'react';
import Gadget from '../Gadget/Gadget';

const Gadgets = () => {

    const [gadgets, setGadgets] = useState([]);

    useEffect( ( )=> {
        fetch('./gadget.json')
        .then(res =>res.json())
        .then(data => setGadgets(data))

    },[])

    return (
        <div className=''>
            <h2 className="text-6xl font-bold text-center mb-12">Explore Cutting-Edge Gadgets</h2>
            <div className='flex flex-col md:flex-row justify-around container mx-auto border p-10 rounded-3xl mb-10"'>
            <div className='flex flex-col gap-4 p-4 mb-6'>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>All Products</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>Laptops</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>Phones</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>Accessories</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>Smart Watches</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>MacBook</button>
                <button className='bg-gray-300 text-slate-800 font-semibold text-2xl hover:bg-[#9538E2] rounded-3xl p-5'>iPhones</button>
            </div>

        
            <div className=' bg-slate-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    gadgets.map(gadget => <Gadget gadget ={gadget} key ={gadget.id} ></Gadget>)
                }
            </div>
            </div>

            
        </div>
    );
};

export default Gadgets;