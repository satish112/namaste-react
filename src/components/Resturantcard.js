import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";


const Resturantcard = (props) => {
    const {resData} = props;
    const {loggedInUser} = useContext(UserContext)

    if (!resData || !resData.info) {
        return <div>Error: Restaurant data not available.</div>;
    }

    const {
        name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla
    } = resData?.info;
    const{header, subHeader} = resData?.info?.aggregatedDiscountInfoV3 || {};

    //console.log({header, subHeader})

    return (
        <div data-testid="resCard" className = "rescard m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 relative">
            {header && subHeader && <div className="absolute top-0 left-0 bg-green-500 text-white px-2 py-1 rounded-tr-lg"> {header} {subHeader}</div>}
            <img className = "res-logo rounded-lg" alt = "res-logo" src ={CDN_URL+cloudinaryImageId}/>
            <h2 className="font-extrabold py-4 text-lg border-spacing-2">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{costForTwo}</h5>
            <h6>{sla?.deliveryTime} minutes</h6>
            <h6>User : {loggedInUser}</h6>
        </div>
    );
};



// High order component 
// input - resturant card ==> resturant card with header and subheader


export const withheader = (Resturantcard) => {
    return () =>{
        return (

            <div>
                <label></label>
            </div>
        )
    };
};

export default Resturantcard;