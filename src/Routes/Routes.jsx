
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import Root from "../Layout/Root";
import Home from "../Page/Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import AddJob from "../Page/AddJob/AddJob";
import JobDetails from "../Page/JobDetails/JobDetails";
import MyBids from "../Page/MyBids/MyBids";
import MyPosted from "../Page/MyPosted/MyPosted";
import PrivateRoute from "./PrivateRoutes";
import UpdateJob from "../Page/UpdateJob/UpdateJob";
import BidRequest from "../Page/BidRequest/BidRequest";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,

            },
            {
                path: "/add",
                element: <PrivateRoute><AddJob></AddJob></PrivateRoute>,

            },
            {

                path: "jobs/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://job-finder-server-lake.vercel.app/jobs/${params.id}`)

            },
            {
                path: "/bid",
                element: <PrivateRoute><MyBids></MyBids></PrivateRoute>,
            },

            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/post",
                element: <PrivateRoute><MyPosted></MyPosted></PrivateRoute>,
            },
            {
                path: "update/:id",
                element: <PrivateRoute><UpdateJob></UpdateJob></PrivateRoute>,
                loader: ({ params }) => fetch(` https://job-finder-server-lake.vercel.app/JobByEmail/${params.id}`)
            },

            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/request",
                element: <PrivateRoute><BidRequest></BidRequest></PrivateRoute>,

            },


        ]
    },
]);

export default router;