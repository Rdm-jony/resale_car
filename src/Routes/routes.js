import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Addservice from "../Pages/AddService/Addservice";
import Blogs from "../Pages/Blogs/Blogs";
import EditReview from "../Pages/EditReview/EditReview";
import Home from "../Pages/Home/Home/Home";
import Myreviews from "../Pages/Myreviews/Myreviews";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
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
            {
                path: "my-reviews",
                element: <PrivateRoute><Myreviews></Myreviews> </PrivateRoute>,
            
            },
            {
                path: "add-service",
                element:<Addservice><Myreviews></Myreviews></Addservice>,
            },
            {
                path: "/my-review/edit/:id",
                loader:()=>fetch("http://localhost:5000/my-review"),
                element:<EditReview></EditReview>
            },
            {
                path: "blogs",
                element:<Blogs></Blogs>
            }
            

        ]
    }
])
export default router;