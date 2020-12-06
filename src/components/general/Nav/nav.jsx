import './nav.css';

import logo from '../../../assets/global/logo_negro.png';
function Nav() {
    return (
        <>
            <header className='container-fluid'>
                <div className='app-logo row'>
                    <a href="#" className="col-12 text-center"><img className="img-fluid" src={logo} alt="Sara escriu logo"/></a>
                </div>

                <nav className="navbar navbar-expand-md justify-content-center">
                    <ul className="navbar-nav container-fluid">
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center">About us</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center">Shop now</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center">Blog zone</a></li>
                        <li className="nav-item mx-auto"><a href="#" className="nav-link text-center">Contact us</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;