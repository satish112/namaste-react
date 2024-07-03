import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResturantCategory from "./ResturantCategory";
import { useState } from "react";

const ResturantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setshowIndex] = useState(null);


    if (resInfo == null) return <Shimmer />;

    const {name, cuisines, cloudinaryImageId, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards)

    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
    (
        c => c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    //console.log(categories)

    return(
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name} </h1>
            <h3 className="font-bold text-lg">
                <p>
                    {cuisines.join(",")} - {costForTwoMessage}
                </p>
            </h3>

            {/** categories accordions */}

            {categories.map((category, index)=> (
                //controlled components
                <ResturantCategory 
                    key= {category?.card?.card?.title} 
                    data = {category?.card?.card}
                    showItems = {index == showIndex ? true : false} 
                    setshowIndex = {() => setshowIndex(index == showIndex ? null : index)}/>
                ))}
           
        </div>
    );
};

export default ResturantMenu;