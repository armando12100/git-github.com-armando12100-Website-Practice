
export default function Card(props) {
    return (      
        <div className="card">
            <div className="imageContainer">
            <img src={props.imageUrl} alt="" className="productImage"/>
            </div>
            <div className="descriptionContainer">
                <h3>{props.description}</h3>
                <p>{props.price}</p>
            </div>
            <div className="buttonContainer">
                <button className="cart">Add to Cart</button>
            </div>
        </div>
              
    )
}