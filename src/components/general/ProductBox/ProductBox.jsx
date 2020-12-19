import './productbox.css';
import { FaShoppingBag } from "react-icons/fa";
import ItemCount from '../../general/ItemCount/ItemCount';

const ProductBox = ({ title, price, img, alt }) => {
    return (
        <article>
            <img src={img} alt={alt} />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                <ItemCount/>
                <a href="#" className="addToCart">
                    <FaShoppingBag/>
                    <span>añadir</span>
                </a>
            </div>
        </article>
    );
}

export default ProductBox;