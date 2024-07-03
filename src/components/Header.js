import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const[btnName, setbtnName] = useState("Login");

    const onlinestatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    //console.log(loggedInUser);

    // subscribing  to the store using selector
    const cartItems = useSelector((store)=> store.cart.items);

    return (
    <div className = "flex justify-between shadow-lg m-2 mb-2 bg-pink-100">
        <div className = "logo">
            <img className = "w-40"  src = { LOGO_URL }/>
        </div>
        <div className = "flex items-center justify-between">
            <ul className="flex  space-x-2 p-4 m-4">
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg">Online Status:{onlinestatus ? "✅" : "🔴" }</li>
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg"><Link to = "/">Home</Link></li>
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg"><Link to = "/about">About</Link></li>
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg"><Link to = "/contact">Contact us</Link></li>
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg"><Link to = "/grocery">Grocery</Link></li>
                <li className="px-4 bg-indigo-600 text-white text-sm leading-6 font-bold py-2 rounded-lg"><Link to = "/cart">Cart - {(cartItems.length)} Items</Link></li>
                <li className="px-4 bg-indigo-600 text-white text-sm py-2 rounded-lg font-bold">{loggedInUser}</li>
                <button
                 className="px-4 bg-indigo-600 text-white text-sm leading-6 font-medium py-2 rounded-lg"
                 onClick={() => { 
                    btnName == "Login"
                    ? setbtnName("Logout")
                    : setbtnName("Login");
                    }}
                    >{btnName}</button>
            </ul>
        </div>
        </div>
    );
};

export default Header;