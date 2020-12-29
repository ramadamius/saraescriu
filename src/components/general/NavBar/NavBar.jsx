import { useState } from "react";
import { Link } from 'react-router-dom';
import { HiMenu } from "react-icons/hi";
import './navbar.css';

const NavBar = () => {

    const [showNavBar, setShowNavBar] = useState(false);

    const openNavBar = () => {
        setShowNavBar(!showNavBar);
    }

    return (
        <>
            <div className="menu-toggler-container">
                <a href="#" className="menu-toggler hidden" onClick={openNavBar}><HiMenu /></a>
            </div>

            <nav className="navBar">
                <ul className={`navBar-list ${showNavBar ? 'nav-opened' : 'nav-closed'}`}>
                    <li className="navBar-list-item"><Link to="/aboutUs">About us</Link></li>
                    <li className="navBar-list-item"><a href="#">Shop now</a></li>
                    <li className="navBar-list-item"><a href="#">Slow Blog zone</a></li>
                    <li className="navBar-list-item"><a href="#" className="text-cap">Contact us</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;