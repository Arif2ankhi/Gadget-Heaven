import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Root = () => {
    return (
        <div className="w-10/12 mx-auto">
           <Navbar></Navbar>
           <div className="min-h-[calc(100vh-589.34px)]">
            <Outlet></Outlet>
      </div>
           <Footer></Footer>
        </div>
    );
};

export default Root;