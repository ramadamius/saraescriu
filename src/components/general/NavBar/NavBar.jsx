import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import CartIcon from '../CartIcon/CartIcon';
import './navbar.css';

const NavBar = () => {

    const [showNavBar, setShowNavBar] = useState(false);

    const openNavBar = () => {
        setShowNavBar(!showNavBar);
    }

    return (
        <>
            <div className="operatives">
                <a href="#" className="menu-toggler hidden" onClick={openNavBar}><HiMenu /></a>
                <CartIcon />
            </div>

            <nav className="navBar">
                <ul className={`navBar-list ${showNavBar ? 'nav-opened' : 'nav-closed'}`}>
                    <li className="navBar-list-item"><a href="#">About us</a></li>
                    <li className="navBar-list-item"><a href="#">Shop now</a></li>
                    <li className="navBar-list-item"><a href="#">SlowBlog zone</a></li>
                    <li className="navBar-list-item"><a href="#">Contact us</a></li>
                </ul>
            </nav>
        </>
    );
}

export default NavBar;