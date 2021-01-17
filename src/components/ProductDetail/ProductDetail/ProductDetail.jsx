import './productdetail.css';
import { useState, useContext } from 'react';
import { Store } from '../../../store';
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa"

const ProductDetail = ({ product }) => {
    const [countProd, setCountProd] = useState(0);
    const [data, setData] = useContext(Store);

    const addItem = () => {
        setCountProd(countProd + 1);
    }

    const removeItem = () => {
        countProd > 1 ? setCountProd(countProd - 1) : setCountProd(countProd);
    }

    const addToCart = () => {
        if (!data.items.filter(item => item.id === product.id).length > 0) {
            if (countProd > 0) {
                product.data.qty = countProd;
            } else {
                product.data.qty = 1;
            }
            setData({
                ...data,
                items: [...data.items, product]
            });
        } else {
            data.items[data.items.findIndex(item => item.id === product.id)].data.qty += countProd;
            setData({
                items: [...data.items]
            })
        }
    }

    return (
        <section className="product-detail-container">
            <img className="product-img" src={product.data.img} alt={product.data.title} />
            <div className="product-info-container">

                <div className="title-and-price">
                    <h3 className="product-name">{product.data.title}</h3>
                    <div className="price">
                        <p className="product-price-title product-detail-subtitle">Precio:</p>
                        <p className="product-price-val">{`€ ${product.data.price}`}</p>
                    </div>
                </div>

                <div className="description-container">
                    <p className="product-description-title product-detail-subtitle">Descripción del producto:</p>
                    <p className="product-description">{product.data.description}</p>
                </div>

                <div className="sizes">
                    <p className="sizes-title product-detail-subtitle">Talles disponibles:</p>
                    <ul className="sizes-list">
                        {
                            product.data.sizes
                                ? product.data.sizes.map(size => <li className="size">{size}</li>)
                                : <li className="size">Talle único</li>
                        }
                    </ul>
                </div>

                <div className="colors">
                    <p className="colors-title product-detail-subtitle">Colores disponibles:</p>
                    <ul className="color-list">
                        {
                            product.data.colors
                                ? product.data.colors.map(
                                    color => <div className="color-container">
                                        <li className="color"><a href="#" className={`color-icon ${color}`}></a></li>
                                    </div>
                                )
                                : <li className="color">Color único</li>
                        }
                    </ul>
                </div>

                <div className="counter-wrapper">
                    <a href="#" className="counterBtn reducer" onClick={removeItem}><FaMinusCircle /></a>
                    <p className="counter-display">{countProd}</p>
                    <a href="#" className="counterBtn increaser" onClick={addItem}><FaPlusCircle /></a>
                </div>

                <div className="add-to-cart-btn">
                    <input type='button' className="add-to-cart" onClick={addToCart} value='Comprar' />
                </div>

            </div>
        </section>
    );
}

export default ProductDetail;