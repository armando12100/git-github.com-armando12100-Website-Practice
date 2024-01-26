import { useState } from "react";
import { Link } from "react-router-dom";
import hamburgerIcon from "../Icons/hamburger-menu.png"
import cart from "../Icons/cart.png"

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);

    function toggleMenu(){
        if (isOpen === false) {
            setIsOpen(open => !open)
        } else {
            setIsOpen(true)
        }
    }

    function toggleAnywhere() {
        if (isOpen === true) {
            setIsOpen(open => !open);
        }
    }

    return (
        <div className="header">

<div className="hamburger-modal"
                    style={{
                        display: isOpen ? "flex" : "none"
                    }}
                    >
                        <ul>
                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/" className="link">
                                    Home
                                </Link>
                            </li>

                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/contact" className="link">
                                    Contact
                                </Link>
                            </li>

                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/careers" className="link">
                                    Careers
                                </Link>
                            </li>

                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/merch" className="link">Merch</Link>
                            </li>

                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/info" className="link">Info</Link>
                            </li>
                            
                            <li className="hamburger-modal-menu-item" onClick={toggleAnywhere}>
                                <Link to="/cart" className="link">Cart</Link>
                            </li>
                        </ul>
                    </div>


            <div className="header-title" onClick={toggleAnywhere}>

                <Link to="/" className="golfipino">
                    <h1 className="home">365 Fitness</h1>
                </Link>
                
            </div>

            <div className={`header-list`} onClick={toggleAnywhere}>

                <ul>

                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <img src={hamburgerIcon} alt="" className="hamburger"/>
                    </div>

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

            </div>

            <div className="header-sign-up">

                <ul>
                    <li className="link">
                        <Link to="/signIn" className="link">
                            Sign Up
                        </Link>
                    </li>  

                    <li>
                        <Link to="/cart">
                            <img src={cart} alt="" className="cartButton"/>
                        </Link>
                    </li>
            </ul>
            
            </div>

        </div>
    )
}
