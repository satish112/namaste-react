
import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";
//import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";




const Grocery = lazy(()=> import("./components/Grocery"));


const Applayout = () => {

    //authentication
    const [userName, setuserName] = useState();


    useEffect(()=>{

        // make an API call and send username and password
        const data = {
            name: "Satish Rella",
        };
        setuserName(data.name);
    }, []);



    return (

       <Provider store = {appStore}>
            <UserContext.Provider value = {{loggedInUser : userName, setuserName}}>    
            <div className = "app">
                <Header/>  
                <Outlet />
            </div>
            </UserContext.Provider>
        </Provider>
         
    );
};


const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<Applayout />,
        children:[
            {
                path : "/",
                element: <Body />,
            },

            {
                path : "/about",
                element: <About />,
            },
            {
                path : "/contact",
                element: <Contact />,
            },
            {
                path : "/grocery",
                element: <Suspense fallback = {<Shimmer/> } ><Grocery /></Suspense>,
            },
            {
                path: "restaurants/:resId",
                element: <ResturantMenu/>
            },
            {
                path : "/cart",
                element: <Cart />,
            },

        ],
        errorElement: <Error />,
    },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
