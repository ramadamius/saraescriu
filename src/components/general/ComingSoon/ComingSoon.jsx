import { FaCat } from "react-icons/fa";
import './comingsoon.css';

const ComingSoon = () => {
    return ( 
        <div className="coming-soon">
            <h3 className="coming-soon-title">Ups! Parece que la página está siendo construida</h3>
            <span className="cat-icon"><FaCat/></span>
            <p className="coming-soon-description">Por favor, vuelve a intentarlo luego.</p>
        </div>
     );
}
 
export default ComingSoon;