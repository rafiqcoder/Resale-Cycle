import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AddCategories from "../Components/DashComponents/AddCategories/AddCategories";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import CategoryPage from "../Pages/Categories/CategoryPage";
import Foxter from "../Pages/Categories/Foxter";
import Phonix from "../Pages/Categories/Phonix";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import AllBuyers from "../Pages/Dashboard/UsersList/AllBuyers";
import AllSellers from "../Pages/Dashboard/UsersList/AllSellers";

import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',element: <Main></Main>,
        children: [
            {
                path: '/',element: <Home></Home>,
                loader: () => { return fetch('http://localhost:5000/all-categories') }
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
                path: '/:name/:id',element: <CategoryPage />,
                loader: ({params}) => { return fetch(`http://localhost:5000/${params.name}/${params.id}`) }
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
        path: '/',element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
        children: [
            {
                path: '/dashboard',element: <Dashboard />,
            },
            {
                path: '/my-orders',element: <MyOrders />,
            },
            {
                path: '/all-buyers',element: < AllBuyers />,
            },
            {
                path: '/all-sellers',element: < AllSellers />,
            },
            {
                path: '/add-categories',element: < AddCategories />,
            },
            {
                path: '/add-product',element: <AddProducts />,
            },
            {
                path: '/my-products',element: <MyProducts />,
            },
            {
                path: '/addproduct',element: <AddProducts />,
            },

        ],
    },
    {
        path: '*',element: <NotFound />
    },
])


export default router;