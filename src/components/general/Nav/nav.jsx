import './nav.css';
import { HiMenu } from "react-icons/hi";
import logo from '../../../assets/global/logo_negro.png';
import CarWidget from '../CartWidget/CartWidget';

function Nav() {
    return (
        <>
            <header className='container-fluid'>
                <div className='app-logo row'>
                    <a href="#" className="col-12 text-center"><img className="img-fluid" src={logo} alt="Sara escriu logo" /></a>
                </div>

                <nav className="navbar navbar-expand-md justify-content-center row">
                    <a href="#toggle_target" className="menu-toggler hidden"><HiMenu /></a>
                    <ul className="navbar-nav container-fluid">
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center tb">About us</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center tb">Shop now</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center tb">SlowBlog zone</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center tb">Contact us</a></li>
                    </ul>
                    <CarWidget />
                </nav>
            </header>
        </>
    )
}

export default Nav;