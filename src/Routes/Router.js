import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import AddCategories from "../Components/DashComponents/AddCategories/AddCategories";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Blog from "../Pages/Blog/Blog";
// import Blog from "../Pages/ContactUs/ContactUs";
import CategoryPage from "../Pages/Categories/CategoryPage";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Foxter from "../Pages/Categories/Foxter";
import Phonix from "../Pages/Categories/Phonix";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import Checkout from "../Pages/Dashboard/Checkout/Checkout";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import ReportedItems from "../Pages/Dashboard/ReportedItems/ReportedItems";
import AllBuyers from "../Pages/Dashboard/UsersList/AllBuyers";
import AllSellers from "../Pages/Dashboard/UsersList/AllSellers";

import Home from "../Pages/Home/Home/Home";
import NotFound from "../Pages/NotFound/NotFound";
import AdminRoutes from "./AdminRoutes";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: '/',element: <Main></Main>,
        children: [
            {
                path: '/',element: <Home></Home>,
                loader: () => { return fetch('http://localhost:5000/all-categories') }
            },
            {
                path: '/home',element: <Home></Home>,
                loader: () => { return fetch('http://localhost:5000/all-categories') }
            },



            // {
            //     path: '/contact-us',element: <ContactUs />
            // },

            {
                path: '/login',element: <Login />
            },
            {
                path: '/contact-us',element: <ContactUs/>
            },
            {
                path: '/blog',element: <Blog />
            },
            {
                path: '/register',element: <Register></Register>
            },
            
            {
                path: '/:name/:id',element: <CategoryPage />,
                loader: ({ params }) => { return fetch(`http://localhost:5000/${params.name}/${params.id}`) }
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
                path: '/checkout/:id',element: <Checkout></Checkout>,
                loader: ({ params }) => { return fetch(`http://localhost:5000/checkout/${params.id}`) },
            },
            {
                path: '/reports',element: <AdminRoutes> <ReportedItems /></AdminRoutes>,
            },
            {
                path: '/all-buyers',element: <AdminRoutes> < AllBuyers /></AdminRoutes>,
            },
            {
                path: '/all-sellers',element: <AdminRoutes>< AllSellers /></AdminRoutes>,
            },

            {
                path: '/add-categories',element: <AdminRoutes>< AddCategories /></AdminRoutes>,
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