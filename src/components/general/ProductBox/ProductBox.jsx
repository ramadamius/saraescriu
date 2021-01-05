import './productbox.css';
import {Link} from 'react-router-dom';

const ProductBox = ({ title, price, img, alt, productId }) => {
    return (
        <article>
            <img src={img} alt={alt} />
            <div className="product-info">
                <h3 className="product-title">{title}</h3>
                <p className="product-price">{price}</p>
                {/* <ItemCount/> */}
                <Link to={`productDetail/${productId}`} className="addToCart">
                    <span>Ver más</span>
                </Link>
            </div>
        </article>
    );
}

export default ProductBox;