import { FaTwitter, FaInstagram, FaFacebook} from "react-icons/fa";
import './footer.css';

const Footer = () => {
    return ( 
        <footer>
            <div className="social-media">
                <ul className="social-media-icons">
                    <li><a href="#"><FaTwitter/></a></li>
                    <li><a href="#"><FaInstagram/></a></li>
                    <li><a href="#"><FaFacebook/></a></li>
                </ul>
            </div>
            <p className="footer-text"><span className="brand">sara escriú</span>, todos los derechos reservados &copy;</p>
        </footer>
     );
}
 
export default Footer;