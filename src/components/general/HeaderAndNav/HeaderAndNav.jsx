import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import WidgetCart from '../WidgetCart/WidgetCart';
import './headerandnav.css';
import {useState} from 'react';


const HeaderAndNav = () => {

    const [showWidgetCart, setShowWidgetCart] = useState(false);

    const openWidgetCart = () => {
        setShowWidgetCart(!showWidgetCart);
    }

    return (
        <div className="header-nav">
            <Header action={openWidgetCart}/>
            <NavBar />
            <WidgetCart action={openWidgetCart} show={showWidgetCart}/>
        </div>
    );
}

export default HeaderAndNav;
