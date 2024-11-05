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
            <h2 className="text-6xl font-bold text-center ml-40 mb-10">Explore Cutting-Edge Gadgets</h2>
            {/* <p className="text-2xl text-center">Discover the latest and most innovative gadgets in our collection</p> */}

            <div className='flex'>
            <div className='flex flex-col'>
                <button className="bg-white text-[#9538E2] font-bold rounded-full" >A</button>
                <button>b</button>
                <button>c</button>
                <button>d</button>
                <button>e</button>
                <button>f</button>
            </div>

        
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    gadgets.map(gadget => <Gadget  gadget ={gadget} key ={gadget.id} ></Gadget>)
                }
            </div>
            </div>

            
        </div>
    );
};

export default Gadgets;