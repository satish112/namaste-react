import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {

    const[btnName, setbtnName] = useState("Login");

    useEffect(() => {
        console.log("useeffect called");
    }, [btnName])
    return (
    <div className = "header">
        <div className = "logo">
            <img src = { LOGO_URL }/>
        </div>
        <div className = "nav-items">
            <ul>
                <li><Link to = "/">Home</Link></li>
                <li><Link to = "/about">About</Link></li>
                <li><Link to = "/contact">Contact us</Link></li>
                <li>cart</li>
                <button
                 className="login-button"
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