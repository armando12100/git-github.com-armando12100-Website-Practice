import React from "react";

export default function Card(props) {

    const [total, setTotal] = React.useState(0);

    function addItem() {
      setTotal(prevTotal => prevTotal + props.price)
    }
  
    return (      
        <div className="card">
            <div className="imageContainer">
            <img src={props.imageUrl} alt="" className="productImage"/>
            </div>
            <div className="descriptionContainer">
                <h3>{props.description}</h3>
                <p>From ${props.price}</p>
            </div>
            <div className="buttonContainer">
                <button className="cart" onClick={addItem}>Add to Cart</button>
                <button>{total}</button>
            </div>
        </div>
              
    )
}