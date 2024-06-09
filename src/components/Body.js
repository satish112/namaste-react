import Resturantcard from "./Resturantcard";
import { useState, useEffect} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body = () => {

    //Local State Variable - Super powerful variable
    const [listofresturants, setListofResturants] = useState([]);

    const[searchtext, setsearchtext] = useState("");

    const[filteredresturant, setfilteredresturant] = useState([]);

    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4400802&lng=78.3489168&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        console.log(json);

        // optional chaining
        setListofResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredresturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    // conditional rendering
    return listofresturants.length == 0? <Shimmer /> : (
        <div className = "body">
            <div className = "filter">
                <div className="search">
                    <input type ="text" className="search-box" value = {searchtext} onChange={(e) => {
                        setsearchtext(e.target.value);
                    }}/>
                    <button
                    // filter the resturant cards and update the UI
                    // search text 
                    onClick={()=>{
                        console.log(searchtext)
                        const filteredlist = listofresturants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchtext.toLowerCase())
                        );
                        setfilteredresturant(filteredlist);
                    }}>Search
                    </button>
                </div>
                <button className="filter-button" onClick={() => 
                {
                    const filtered_list = listofresturants.filter(
                        (res) => res.info.avgRating > 4
                    );
                    //console.log(filtered_list);
                    setfilteredresturant(filtered_list);
                }}>
                    Top Rated restaurants</button>
            </div>
            <div className = "res-container">
                {filteredresturant.map((resturant)=>(
                <Link key = {resturant.info.id} to ={"/restaurants/"+resturant.info.id}> <Resturantcard  resData ={resturant}/></Link>))}
            </div>
        </div>
    );

};
export default Body;