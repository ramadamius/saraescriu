import Header from '../Header/Header';
import NavBar from '../NavBar/NavBar';
import './headerandnav.css';

const HeaderAndNav = () => {
    return ( 
        <div className="header-nav">
            <Header/>
            <NavBar/>
        </div>
       );
}
 
export default HeaderAndNav;
