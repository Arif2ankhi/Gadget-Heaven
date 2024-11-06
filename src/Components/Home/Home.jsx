import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import Gadgets from '../Gadgets/Gadgets';
import  {Helmet} from "react-helmet";

const Home = () => {
    return (
       <>
       <Helmet>
        <title>Home || Gadget Heaven</title>
       </Helmet>
        <div>
            <Banner></Banner>
            <Gadgets></Gadgets>
        </div>

    </>
    );
};

export default Home;