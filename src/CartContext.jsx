import { createContext, useState } from "react";
import data from "./data";

const CartContext = createContext();

export const CartProvider = (props) => {

    const itemsData = data;

    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < itemsData.length + 1; i++) {
            cart[i] = 0
            }
        return cart;
    }

    const [cartItems, setCartItems] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = itemsData.find((product) => product.id === Number(item));
                totalAmount += cartItems[item] * itemInfo.price
            }
        }
        return totalAmount;
    }

    const getTotalItemAmount = () => {
        let totalItemAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItemAmount += cartItems[item]
            }
        }

        return totalItemAmount;
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    }


    return (
        <CartContext.Provider value={{ addToCart, removeFromCart, cartItems, updateCartItemCount, 
        getTotalCartAmount, getTotalItemAmount }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContext  