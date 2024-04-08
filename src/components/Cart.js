import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">CART</h1>
            <div>
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;