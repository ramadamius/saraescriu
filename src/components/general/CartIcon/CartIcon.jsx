import { FaShoppingBag } from "react-icons/fa";
import './cartIcon.css';

const CartWidget = () => {
    return (
        <div className="nav-icon">
            <a href="#" className="cartIcon">
                <FaShoppingBag />
            </a>
        </div>
    );
}

export default CartWidget;