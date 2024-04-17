import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return(
        <div className="text-center m-4 p-4">
            <h1 className="font-bold text-2xl">CART</h1>
            <div className="w-6/12 m-auto ">
                <button 
                className="m-2 p-2 rounded-lg bg-gray-300"
                onClick={handleClearCart}
                >
                    Clear Cart
                </button>
                {cartItems.length === 0 && <h1> Your Cart is soooo empty!!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;