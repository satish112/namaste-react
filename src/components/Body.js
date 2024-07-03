import Resturantcard from "./Resturantcard";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


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

        //console.log(json);

        // optional chaining
        setListofResturants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredresturant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlinestatus = useOnlineStatus();

    if(onlinestatus == false) return <h1>Yoy are offline, Please check your Network</h1>


    const {loggedInUser, setuserName} = useContext(UserContext);

    // conditional rendering
    return listofresturants.length == 0? <Shimmer /> : (
        <div className = "body">
            <div className = "filter flex">
                <div className="search flex m-4 p-4">
                    <input type ="text" data-testid="searchInput"className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" aria-label="Filter resturants" placeholder="Search resturants ..." value = {searchtext} onChange={(e) => {
                        setsearchtext(e.target.value);
                    }}/>
                    <button
                    className="px-3 py-1 bg-green-100 m-2  rounded-lg hover:bg-green-300"
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
                <div className="filter m-4 p-4 flex items-center">

                            <button className="px-3 py-1 bg-gray-100 m-2 rounded-lg hover:bg-gray-300" onClick={() => 
                        {
                            const filtered_list = listofresturants.filter(
                                (res) => res.info.avgRating > 4
                            );
                            //console.log(filtered_list);
                            setfilteredresturant(filtered_list);
                        }}>
                            Top Rated restaurants</button>

                </div> 
                <div className="m-4 p-4 flex items-center">
                    <label>UserName: </label>
                    <input className="border border-black p-2 rounded-lg" 
                    value = {loggedInUser}
                    onChange={(e)=>setuserName(e.target.value)}/>
                    
                </div>
            </div>
            <div className = "flex flex-wrap ju">
                {filteredresturant.map((resturant)=>(
                <Link key = {resturant.info.id} to ={"/restaurants/"+resturant.info.id}>
                    
                    {/** if the resturant has a header and subheader we are going to join the header and subheader on the card  */}
                     <Resturantcard  resData ={resturant}/>
                </Link>))}
            </div>
            
        </div>
    );

};
export default Body;