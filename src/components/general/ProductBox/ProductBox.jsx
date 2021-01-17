import './productbox.css';
import {Link} from 'react-router-dom';

const ProductBox = ({ item }) => {
    return (
        <article>
            <img src={item.data.img} alt={item.data.description} />
            <div className="product-info">
                <h3 className="product-title">{item.data.title}</h3>
                <p className="product-price">{`€ ${item.data.price}`}</p>
                <Link to={`productDetail/${item.id}`} className="addToCart">
                    <span>Ver más</span>
                </Link>
            </div>
        </article>
    );
}

export default ProductBox;