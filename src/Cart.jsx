import CartContext from "./CartContext"
import { useContext } from "react";
import data from "./data";
import {CartItem} from "./CartItem"

export default function Cart() {
    const { cartItems, getTotalCartAmount, getTotalItemAmount } = useContext(CartContext);
    const totalAmount = getTotalCartAmount();
    const totalItemAmount = getTotalItemAmount();
    
    return (
        <>
           <div>
                <div className="cartItems">
                    {data.map((product) => {
                        if (cartItems[product.id] !== 0) {
                            return <CartItem 
                            key={product.id}
                            id = {product.id}
                            title={product.title}
                            imageUrl={product.imageUrl}
                            description={product.description}
                            price={product.price}/>
                        }
                    })}
                </div>
           </div>
        {totalAmount > 0 ?
           <div className="price-subtotal-container">
                    <p className="subtotal-heading">Subtotal ({totalItemAmount} {totalItemAmount > 1 ? "items" : "item"}):
                    <span className="subtotal-price"> ${totalAmount}</span></p>
            </div>
        : <h1>Your Cart is Empty</h1>}
        </>
    )
}