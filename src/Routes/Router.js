import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login/Login";
import Register from "../Auth/Register/Register";
import Main from "../Layout/Main";

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
                path: '*',element: <NotFound />
            },
        ]
    },
    // {
    //     path: '/',element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
    //     children: [
    //         {
    //             path: '/dashboard',element: <Dashboard />,
    //         },

    //     ],
    // },
    {
        path: '*',element: <NotFound />
    },
])


export default router;