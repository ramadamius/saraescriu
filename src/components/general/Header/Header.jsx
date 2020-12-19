import './header.css';
import logo from '../../../assets/global/logo_negro.png'
import CartIcon from '../CartIcon/CartIcon';

const Header = () => {
    return (
        <header>
            <div className="operatives"></div>
            <a href="#" className="app-header-logo"><img className="img-fluid" src={logo} alt="Sara escriu logo" /></a>
            <div className="operatives">
                <CartIcon />
            </div>
        </header>
    );
}

export default Header;
