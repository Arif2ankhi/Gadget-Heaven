import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const GadgetDetail = () => {

    const {Id} = useParams();
    const data = useLoaderData();
    const gadgetId = parseInt(Id);
    const gadget = data.find(gadget => gadget.id === gadgetId);
    // console.log(gadget);

    const {
        title,
        price,
        availability,
        description,
        image,
        Specification,
        rating,
      } = gadget;
    
       

        
  

    return (
        <div>
            {/* <h2>Gadget detail: {Id}</h2>
            <img className='w-60' src={image} alt="" /> */}
            
        </div>
    );
};

export default GadgetDetail;