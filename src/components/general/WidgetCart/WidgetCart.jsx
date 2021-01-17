import './widgetcart.css';
import { Store } from '../../../store';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const WidgetCart = ({ show, action }) => {
    const [data, setData] = useContext(Store);

    const { items } = data
    useEffect(() => {
        console.log('montado');
    }, [items])

    const deleteAll = () => {
        setData({
            items: []
        })
    }

    const deleteItem = itemId => {
        const filteredItems = data.items.filter(item => item.id != itemId);
        setData({
            items: filteredItems
        })
    }

    return (
        <div className={`widget-cart ${show ? 'open' : 'close'}`}>
            <div className="cartwidget-button">
                <a href="#" className="cart-widget-btn closeBtn" onClick={action}>
                    X
                </a>
            </div>
            {
                items.length > 0
                    ? <>
                        <h3 className="cart-widget-title">Resumen del carrito</h3>

                        <div className="delete-all-container">
                            <input type='button' id='delete-all' className="deleteItem" onClick={deleteAll} value='Delete All' />
                        </div>

                        <div className="information-cart-widget">
                            <ul className="cart-items-list">
                                {
                                    data.items.map(item =>
                                        <li className="cart-item-container">
                                            <p className="item-title">{item.data.title}</p>
                                            <img className='item-img' src={item.data.img} alt={item.data.title} />
                                            <div className="more-info">
                                                <p className="item-qty">{`Cantidad: ${item.data.qty}`}</p>
                                                <p className="item-size">{`Tamaño: ${item.data.sizes ? item.data.sizes : 'Talle único'}`}</p>
                                                <p className="item-color">{`Color: ${item.data.colors ? item.data.colors : 'Color único'}`}</p>
                                                <input type="button" value='Borrar' className='deleteItem' onClick={() => deleteItem(item.id)} />
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </> : <h2 className="no-items-widget">¡Ops! Parece que no has agregado nada aún :(</h2>
            }

            <Link to='/cart' className='go-to-cart-btn'>Ir al carrito</Link>
        </div>
    );
}

export default WidgetCart;