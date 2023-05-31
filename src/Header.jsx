import { Link } from "react-router-dom"


export default function Header() {
    return (
        <div className="header">
                <Link to="/" className="golfipino">
                    <h1 className="home">Golfipino</h1>
                </Link>

            <ul>

                <li>
                    <Link to="/" className="link">
                        Home
                    </Link>
                </li>

                <li className="link">
                    <Link to="/contact" className="link">
                        Contact
                    </Link>
                </li>

                <li className="link">
                    <Link to="/careers" className="link">
                        Careers
                    </Link>
                </li>

                <li className="">
                    <Link to="/merch" className="link">Merch</Link>
                </li>

                <li>
                    <Link to="/info" className="link">Info</Link>
                </li>
            </ul>

            <ul>
                <li className="link">
                    <Link to="/signIn" className="link">
                        Sign Up
                    </Link>
                </li>  

                <li className="Link">
                    <img src="../Icons/profilepic.png" alt="" className="profilePic"/>    
                </li>  

                <li>
                    <img src="../Icons/cart.png" alt="" className="cartButton"/>
                </li>
            </ul>

        </div>
    )
}
