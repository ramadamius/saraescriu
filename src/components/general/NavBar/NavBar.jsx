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
                    <li className="navBar-list-item"><Link to="/showNow">Shop now</Link></li>
                    <li className="navBar-list-item"><Link to="/slowBlogZone">Slow Blog zone</Link></li>
                    <li className="navBar-list-item"><Link to="/contactUs">Contact us</Link></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;