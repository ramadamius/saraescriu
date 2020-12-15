import './header.css';
import logo from '../../../assets/global/logo_negro.png'

const Header = () => {
    return (
        <header>
            <a href="#" className="app-header-logo"><img className="img-fluid" src={logo} alt="Sara escriu logo" /></a>
        </header>
    );
}

export default Header;
