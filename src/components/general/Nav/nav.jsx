import './nav.css';

import logo from '../../../assets/global/logo_negro.png';
function Nav() {
    return (
        <>
            <header className='container-fluid'>
                <div className='app-logo row'>
                    <a href="#" className="col-12 text-center"><img className="img-fluid" src={logo} alt="Sara escriu logo"/></a>
                </div>

                <nav className="row">
                    <ul className="row col-12">
                        <a className="col-3 mx-auto" href="#"><li className="txt-center">About us</li></a>
                        <a className="col-3 mx-auto" href="#"><li className="txt-center">Shop now</li></a>
                        <a className="col-3 mx-auto" href="#"><li className="txt-center">Blog zone</li></a>
                        <a className="col-3 mx-auto" href="#"><li className="txt-center">Contact us</li></a>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Nav;