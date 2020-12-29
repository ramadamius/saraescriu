import { FaShoppingBag } from "react-icons/fa";
import './cartIcon.css';

const CartWidget = ({action}) => {
    return (
        <div className="nav-icon">
            <a href="#" onClick={action} className="cartIcon">
                <FaShoppingBag />
            </a>
        </div>
    );
}

export default CartWidget;