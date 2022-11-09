import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import LogIn from "../Pages/Register/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Services from "../Pages/Services/Services";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "home",
                element: <Home></Home>
            },
            {
                path: "services",
                element: <Services></Services>,
                loader: () => fetch("http://localhost:5000/all-services")
            },
            {
                path: "services/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/all-services/${params.id}`)
            },
            {
                path: "sign-up",
                element: <Register></Register>,
            },
            {
                path: "sign-in",
                element: <LogIn></LogIn>,
            },

        ]
    }
])
export default router;