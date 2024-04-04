import ItemList from "./ItemList";

const RestaurantCategory = ({data}) => {
    console.log(data)
    return (
        <div>
            {/*Header*/}
            <div className="w-6/12 mx-auto my-4 p-4 shadow-lg bg-gray-50 hover:bg-gray-100 ">
                <div className="flex justify-between cursor-pointer">
                <span className="font-medium text-lg">{data.title} ({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                <ItemList items={data.itemCards} />
            </div>
        </div>
    );
};

export default RestaurantCategory;