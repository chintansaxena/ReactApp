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
    } = resData.info;

    return (
        <div className="rest-card">
            <img 
                className="rest-logo" 
                alt="rest-logo" 
                src= {CDN_URL + cloudinaryImageId}
            />
            <h4> { name } </h4>
            <h5> { cuisines.join(",") }</h5>
            <h5> { avgRating }</h5>
            <h5>₹{ costForTwo }</h5>
            <h5> { sla?.slaString }</h5>
        </div>
    );
};

export default RestaurantCard;  