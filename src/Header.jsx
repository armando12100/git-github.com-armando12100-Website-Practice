import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div className="header">
                <Link to="/" className="link">
                    <h1 className="home">Golfipino</h1>
                </Link>

                
                <input type="text" placeholder="Search" className="search"/>

            <ul>

                <li className="">
                    <Link to="/games" className="link">Merch</Link>
                </li>

                <li>
                    <Link to="/shoppingcart" className="link">Info</Link>
                </li>
            </ul>
        </div>
    )
}
