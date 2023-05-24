export default function CategoryCards(props) {
    return (      
    <div className="categoryPic">
        <div>
            <img src={props.imageUrl} alt="" className="imageCircle"/>
        </div>
        <div className="categoryName">
            <h3>{props.description}</h3>
        </div>
    </div>
    )
}