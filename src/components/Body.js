import RestaurantCard, {withPromotedLabel} from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";   
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

    useEffect (() => {
        fetchData();
    }, []);
    
    const fetchData = async () => {
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9035762&lng=77.6672134&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_");

        const json = await data.json();

        //Optional Chaining
        setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false)
    
        return (
            <h1>
                Looks like you're Offline! Please check your Internet Connection!
            </h1>
        );

        const { loggedInUser, setUserName } = useContext(UserContext);

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? (< Shimmer />): (
      <div className="body">
            <div className="filter flex">
                <div className="search m-4 p-4">
                    <input type="text" 
                    className="border border-solid border-black" 
                    value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" 
                     onClick={() => {
                        //filter the restaurant cards and update/re-render the UI
                        const filteredRestaurant = listOfRestaurants.filter((res) =>
                        res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredRestaurant(filteredRestaurant);
                    }} 
                    >
                        Search
                    </button>
                </div>
                <div className="search m-4 p-4 flex items-center">
                    <button 
                    className="px-4 py-2 bg-gray-100 rounded-lg"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter(
                         (res) => res.info.avgRating > 4
                        );
                        setListOfRestaurants(filteredList);    
                     }}
                >
                Top Rated Restaurants
                </button>  
                </div>
                <div className="search m-4 p-4 flex items-center">
                <label>Username : </label>
                <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}></input>
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link 
                    key={restaurant.info.id} 
                    to={"/restaurants/"+ restaurant.info.id}
                    >
                        {restaurant.info.promoted ? (
                            <RestaurantCardPromoted resData={restaurant} />
                        ) : (
                            <RestaurantCard resData={restaurant} />
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;