import { Link } from "react-router-dom"


export default function CategoryCards(props) {
    return (      
    <div className="categoryPic">
        <div>
            <Link to={props.link}><img src={props.imageUrl} alt="" className="imageCircle"/></Link>
        </div>
        <div>
            <Link to={props.link} className="categoryName"><h3>{props.description}</h3></Link>
        </div>
    </div>
    )
}
