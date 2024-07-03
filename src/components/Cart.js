import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{

    //subscribe to the right portion of the store
    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems)


    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return <div className="text-center m-4 p-4">
                <h1 className="text-2xl font-bold">Cart</h1>
                <div className="w-6/12 m-auto">
                    <button className="px-4 text-white text-sm leading-6 font-medium py-2 rounded-lg bg-black"
                    onClick={handleClearCart}
                    >Clear Cart</button>
                    {cartItems.length == 0 && <h1>Your Cart is Empty, Please add Items to the Cart</h1>}
                    <ItemList items = {cartItems} />
                </div>
            </div>

};

export default Cart;