import { CDN_URL } from "../utils/constants";

const ItemList = ({items}) => {
    console.log(items);
    return(
        <div>
            {items.map((item) => (
                <div 
                    key={item.card.info.id}
                    className="p-2 m-2 text-left border-gray-300 border-b-2 justify-between flex"
                >
                    <div className="w-8/12">
                        <div className="py-2">
                             <span className="font-normal">{item.card.info.name}</span>
                              <span>
                                 - ₹
                                 {item.card.info.price 
                                    ? item.card.info.price / 100
                                   : item.card.info.defaultPrice / 100 }
                              </span>
                         <span className="p-2">
                             {item.card.info.ratings.aggregatedRating.rating} 
                              ({item.card.info.ratings.aggregatedRating.ratingCountV2}) 
                          </span>
                        </div>
                     <p className="font-extralight">{item.card.info.description}</p>
                    </div>
                    <div className="w-4/12 p-4">
                        <div className="absolute align-bottom">
                        <button className="px-8 py-2 mx-8 my- font-bold shadow-lg rounded-lg text-green-600 bg-white align-bottom">ADD</button>
                        </div>
                        <img src= {CDN_URL + item.card.info.imageId} className="w-full"/>
                    </div>
                </div>  
            ))}
        </div>
    );
};

export default ItemList;