import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    
    const { resData } = props;

    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
    } = resData?.info;

    return (
        <div 
        data-testid="resCard" 
        className="m-4 p-4 w-[300px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-lg"
        >
            <img 
                className="rounded-lg w-[280px]" 
                alt="rest-logo" 
                src= {CDN_URL + cloudinaryImageId}
            />
            <h4 className="font-bold py-4 text-xl"> { name } </h4>
            <h5> { cuisines.join(",") }</h5>
            <h5> { avgRating }</h5>
            <h5>₹{ costForTwo }</h5>
            <h5> { sla?.slaString }</h5>
        </div>
    );
};

export const withPromotedLabel = (RestaurantCard) => {
    return(props) =>{
        return(
            <div>
                <label className="absolute p-2 m-2 bg-black text-white rounded-lg font-medium">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        );
    };
};

export default RestaurantCard;  