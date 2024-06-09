import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const ResturantMenu = () => {

    const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {

        fetchMenu();

    },[]);

    const fetchMenu = async () => {

        const data = await fetch(MENU_URL + resId);
        const json = await data.json();

        console.log(json);
        setResInfo(json.data);

    };

    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return(
        <div className="menu">
            <h1>{name} </h1>
            <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item )=> (<li key = {item.card.info.id}>{item.card.info.name} - {item.card.info.price/100}</li>))}
            </ul>
        </div>
    );
};

export default ResturantMenu;