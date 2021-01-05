import './productdetail.css';
import { FaShoppingBag } from "react-icons/fa";
import ItemCount from '../../general/ItemCount/ItemCount';
import { Redirect } from 'react-router-dom';
import { useState } from 'react';

const ProductDetail = ({ img, title, price, description, sizes, colors }) => {
    const [redirect,setRedirect] = useState(false);

    const handlergoToCart = () => {
        setRedirect(true);
    }

    if (redirect) return <Redirect to='/cartReview'/>

    return (
        <section className="product-detail-container">
            <img className="product-img" src={img} alt={title} />
            <div className="product-info-container">

                <div className="title-and-price">
                    <h3 className="product-name">{title}</h3>
                    <div className="price">
                        <p className="product-price-title product-detail-subtitle">Precio:</p>
                        <p className="product-price-val">{price}</p>
                    </div>
                </div>

                <div className="description-container">
                    <p className="product-description-title product-detail-subtitle">Descripción del producto:</p>
                    <p className="product-description">{description}</p>
                </div>

                <div className="sizes">
                    <p className="sizes-title product-detail-subtitle">Talles disponibles:</p>
                    <ul className="sizes-list">
                        {
                            sizes
                                ? sizes.map(size => <li className="size">{size}</li>)
                                : <li className="size">Talle único</li>
                        }
                    </ul>
                </div>

                <div className="colors">
                    <p className="colors-title product-detail-subtitle">Colores disponibles:</p>
                    <ul className="color-list">
                        {
                            colors
                                ? colors.map(
                                    color => <div className="color-container">
                                        <li className="color"><a href="#" className={`color-icon ${color}`}></a></li>
                                    </div>
                                )
                                : <li className="color">Color único</li>
                        }
                    </ul>
                </div>

                <ItemCount />

                <div className="add-to-cart-btn">

                    <input type='button' className="add-to-cart" onClick={handlergoToCart} value='Comprar'/>
                </div>

            </div>
        </section>
    );
}

export default ProductDetail;