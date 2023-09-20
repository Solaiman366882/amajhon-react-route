import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import About from "../pages/about/About";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";


const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<MainLayouts></MainLayouts>,
        children:[
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/products",
                element:<Products></Products>,
                loader:() => fetch(`https://dummyjson.com/products`)
            },
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:"/dashboard",
                element:<Dashboard></Dashboard>
            }
        ]
    }
]);

export default myCreatedRoute;