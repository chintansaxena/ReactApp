import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
const { resId } = useParams();

const resInfo = useRestaurantMenu(resId);

if (resInfo === null) return <Shimmer />;

const {name, cuisines, costForTwoMessage, avgRating} = resInfo?.cards[2]?.card?.card?.info;

const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

const categories = 
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) =>
        c.card?.card?.["@type"] === 
         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    return (
        <div className="text-center">
            <h1 className="font-extrabold p-4 text-xl">{name}</h1>
            <h2 className="font-bold text-lg">{cuisines.join(", ")} - {costForTwoMessage}</h2>
            <h2>Rating - {avgRating}</h2>
            <h2>MENU</h2>

            {/* Categories for Accordion */}
            {categories.map((category) => (
                <RestaurantCategory data = {category?.card?.card}/>
            ))}
        </div>
    );
};

export default RestaurantMenu;