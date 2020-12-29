import {Link} from 'react-router-dom';
import './header.css';
import logo from '../../../assets/global/logo_negro.png'
import CartIcon from '../CartIcon/CartIcon';

const Header = ({action}) => {
    return (
        <header>
            <div className="operatives"></div>
            <Link to="/" className="app-header-logo"><img className="img-fluid" src={logo} alt="Sara escriu logo" /></Link>
            <div className="operatives">
                <CartIcon action={action}/>
            </div>
        </header>
    );
}

export default Header;
