import { CDN_URL } from "../utils/constants";

const Resturantcard = (props) => {
    const {resData} = props;

    if (!resData || !resData.info) {
        return <div>Error: Restaurant data not available.</div>;
    }

    const {
        name, cuisines, avgRating, costForTwo, cloudinaryImageId, sla
    } = resData?.info;

    return (
        <div className = "rescard" style = {{backgroundColor:"#f0f0f0"}}>
            <img className = "res-logo" alt = "res-logo" src ={CDN_URL+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h5>{costForTwo}</h5>
            <h6>{sla?.deliveryTime} minutes</h6>
        </div>
    );
};

export default Resturantcard;