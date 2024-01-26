import { useContext } from "react";
import CartContext from "./CartContext"

export default function Card(props) {

    const { addToCart, cartItems } = useContext(CartContext);
    const cartItemAmount = cartItems[props.id]

    return (      
        <div className="card">
            <div className="imageContainer">
            <img src={props.imageUrl} alt="" className="productImage"/>
            </div>
            <div className="descriptionContainer">
                <h3>{props.description}</h3>
                <p>From ${props.price}</p>
                <p className="stock-text">In stock now!</p>
            </div>
            <div className="buttonContainer">
                <button className="cart" onClick={() => addToCart(props.id)}>
                 Add to Cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}</button>
            </div>
        </div>
              
    )
}