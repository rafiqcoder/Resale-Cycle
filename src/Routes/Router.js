import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Foxter from "../Pages/Categories/Foxter";
import Phonix from "../Pages/Categories/Phonix";
import Veloce from "../Pages/Categories/Veloce";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import AllBuyers from "../Pages/Dashboard/UsersList/AllBuyers";
import AllSellers from "../Pages/Dashboard/UsersList/AllSellers";

import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";



const router = createBrowserRouter([
    {
        path: '/',element: <Main></Main>,
        children: [
            {
                path: '/',element: <Home></Home>,
            },



            // {
            //     path: '/contact-us',element: <ContactUs />
            // },

            {
                path: '/login',element: <Login />
            },
            {
                path: '/register',element: <Register></Register>
            },
            {
                path: '/veloce',element: <Veloce />
            },
            {
                path: '/phonix',element: <Phonix />
            },
            {
                path: '/foxter',element: <Foxter />
            },

            {
                path: '*',element: <NotFound />
            },
        ]
    },
    {
        path: '/',element:<DashboardLayout />,
        children: [
            {
                path: '/dashboard',element: <Dashboard />,
            },
            {
                path: '/my-orders',element: <MyOrders />,
            },
            {
                path: '/allbuyers',element: < AllBuyers/>,
            },
            {
                path: '/allsellers',element: < AllSellers/>,
            },
            {
                path: '/add-product',element: <AddProducts />,
            },
            {
                path: '/my-products',element: <MyProducts />,
            },

        ],
    },
    {
        path: '*',element: <NotFound />
    },
])


export default router;