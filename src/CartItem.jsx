import { useContext } from "react";
import CartContext from "./CartContext";

export const CartItem = (props) => {
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(CartContext);

    return ( 
        <>
            <div className="shopping-cart-background-color">
               
                <div className="shopping-cart-header-container">
                    <h2 className="shopping-cart-header">Shopping Cart</h2>
                    <div className="shopping-cart-sub-heading">
                        <p>Items</p>
                        <p>Price</p>
                    </div>
                </div>
               
                <div className="items-container">
                    <div className="img-block">
                        <img src={props.imageUrl} alt="" />
                            <div className="description-block">
                            <p>{props.description}</p>
                            <p>by Golfipino</p>
                            <p>Golf Equipment</p>
                            <p>Only 5 left in stock - order soon.</p>
                        </div>
                    </div>
                    <div className="price-block">${props.price}</div>
                    <div className="countHandler">
                        <button className="cartCountButton" onClick={() => removeFromCart(props.id)}>-</button>
                        <input type="text" className="cartInput" value={cartItems[props.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), props.id)} />
                        <button className="cartCountButton" onClick={() => addToCart(props.id)}>+</button>
                    </div>
                </div>
                <div>
                    <h1 className="invisible">hi</h1>
                </div>
            </div>
        </>
    )
}