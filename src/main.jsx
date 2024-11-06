import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import Dashboard from './Components/Page/Dashboard';
import Statistics from './Components/Page/Statistics';
import Login from './Components/Page/Login';
import GadgetDetail from './Components/GadgetDetail/GadgetDetail';
// import Cart from './Components/Cart/Cart';
import Cart from './Components/Cart/Cart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },

      {
        path: 'gadgets/:Id',
        element: <GadgetDetail></GadgetDetail>,
        loader: () => fetch('/gadget.json')
        .then(res => res.json()),
        

      },
      {
        path: '/dashboard',
        element:<Dashboard></Dashboard>,
        loader:() => fetch("/gadget.json"),
        // children:[
        //   {
        //     path:"/dashboard/cart",
        //     element:<Cart></Cart>
        //   }
        // ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
        
      },
      {
        path: '/login',
        element: <Login></Login> // Default error page for unmatched routes
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)

