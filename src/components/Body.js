import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";   
import Shimmer from "./Shimmer";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

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

   

    if(listOfRestaurants.length === 0 )
    {
        return <h1><Shimmer /></h1>
    }

    //Conditional Rendering
    return listOfRestaurants.length === 0 ? (< Shimmer />): (
      <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="sarch-box" value={searchText} 
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                    />
                    <button onClick={() => {
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
                <button className="filter-btn"
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
            <div className="rest-container">
                {filteredRestaurant.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;